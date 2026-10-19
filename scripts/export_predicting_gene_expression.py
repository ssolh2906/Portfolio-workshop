"""
Export script: Predicting Gene Expression from Histone Modifications
Reads serialized results from the cloned repo and writes JSON files
for the portfolio page.

Usage (from portfolio root):
    python scripts/export_predicting_gene_expression.py
"""

import json
import pickle
import random
from pathlib import Path

# ── Paths ──────────────────────────────────────────────────────────────────
REPO = Path(__file__).parent.parent / "Predicting-gene-expression-from-histone-modifications"
OUT  = Path(__file__).parent.parent / "content" / "predicting-gene-expression"
OUT.mkdir(parents=True, exist_ok=True)


def load_pkl(path: Path):
    if not path.exists():
        print(f"  [skip] {path.name} not found")
        return None
    with open(path, "rb") as f:
        return pickle.load(f)


# ── 1. Model comparison ─────────────────────────────────────────────────────
print("1. Building model comparison...")

# Map display name → expected result pkl (scripts save with these names)
model_files = {
    "SVR":   REPO / "result" / "svm_test_result.pkl",
    "RF":    REPO / "result" / "rf_test_result.pkl",
    "GBR":   REPO / "result" / "gbr_test_result.pkl",
    "Ridge": REPO / "result" / "ridge_test_result.pkl",
}
# Older scripts may have saved under the generic name
fallback_svr = REPO / "result" / "test_result.pkl"

comparison = []
for name, path in model_files.items():
    data = load_pkl(path)
    if data is None and name == "SVR":
        data = load_pkl(fallback_svr)
    if data is None:
        continue
    entry = {
        "model": name,
        "r2":      round(float(data["r2"]),      4),
        "pearson": round(float(data["pearson"]),  4),
        "mae":     round(float(data["mae"]),      4),
    }
    comparison.append(entry)
    print(f"  {name:6s}  R²={entry['r2']:.4f}  r={entry['pearson']:.4f}  MAE={entry['mae']:.4f}")

out_path = OUT / "model_comparison.json"
with open(out_path, "w") as f:
    json.dump(comparison, f, indent=2)
print(f"  -> {out_path} ({len(comparison)} models)\n")


# ── 2. Actual vs. predicted scatter (SVR, sampled 500 pts) ─────────────────
print("2. Building scatter data...")

scatter_src = load_pkl(REPO / "result" / "svm_test_result.pkl")
if scatter_src is None:
    scatter_src = load_pkl(fallback_svr)

if scatter_src and "y_test" in scatter_src and "y_pred" in scatter_src:
    pairs = list(zip(scatter_src["y_test"], scatter_src["y_pred"]))
    if len(pairs) > 500:
        random.seed(42)
        pairs = random.sample(pairs, 500)
    scatter = [
        {"actual": round(float(a), 4), "predicted": round(float(p), 4)}
        for a, p in pairs
    ]
    out_path = OUT / "svr_scatter.json"
    with open(out_path, "w") as f:
        json.dump(scatter, f, indent=2)
    print(f"  -> {out_path} ({len(scatter)} points)\n")
else:
    if scatter_src:
        print("  [skip] pkl found but missing y_test / y_pred arrays\n")


# ── 3. RF feature importance (top 10) ──────────────────────────────────────
print("3. Building feature importance...")

rf_data = load_pkl(REPO / "result" / "rf_test_result.pkl")
if rf_data and "feature_names" in rf_data and "feature_importances" in rf_data:
    # Map numeric column indices to their histone mark name + relative bin position
    hist_ranges = [
        (range(0,   80),  "H3K4me1"),
        (range(80,  160), "H3K4me3"),
        (range(160, 240), "H3K27ac"),
        (range(240, 320), "H3K27me3"),
    ]

    def label(name):
        try:
            idx = int(name)
        except (ValueError, TypeError):
            return str(name)  # engineered feature — already named
        for r, mark in hist_ranges:
            if idx in r:
                bin_pos = idx - r.start - len(r) // 2  # relative to TSS centre
                return f"{mark} (bin {bin_pos:+d})"
        return str(name)

    ranked = sorted(
        zip(rf_data["feature_names"], rf_data["feature_importances"]),
        key=lambda x: x[1],
        reverse=True,
    )[:10]
    importance = [
        {"feature": label(name), "importance": round(float(imp), 6)}
        for name, imp in ranked
    ]
    out_path = OUT / "rf_feature_importance.json"
    with open(out_path, "w") as f:
        json.dump(importance, f, indent=2)
    print(f"  -> {out_path} (top {len(importance)} features)")
    for item in importance:
        print(f"     {item['feature']:30s}  {item['importance']:.6f}")
    print()
else:
    print("  [skip] RF result pkl not available or missing feature data\n")


# ── Summary ─────────────────────────────────────────────────────────────────
files = list(OUT.glob("*.json"))
print(f"Done. {len(files)} file(s) written to {OUT}:")
for p in sorted(files):
    print(f"  {p.name}")
