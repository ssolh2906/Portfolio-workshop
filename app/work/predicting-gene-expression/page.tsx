import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import modelComparison from "@/content/predicting-gene-expression/model_comparison.json";
import scatterData from "@/content/predicting-gene-expression/svr_scatter.json";
import featureImportance from "@/content/predicting-gene-expression/rf_feature_importance.json";
import ModelComparisonChart from "@/components/charts/ModelComparisonChart";
import PredictionScatterChart from "@/components/charts/PredictionScatterChart";
import FeatureImportanceChart from "@/components/charts/FeatureImportanceChart";

const best = modelComparison.reduce((a, b) => (a.r2 > b.r2 ? a : b));

const TAGS = ["Python", "scikit-learn", "NumPy", "Pandas"];

const STATS = [
  { label: "Best R²", value: best.r2.toFixed(2), sub: best.model },
  { label: "Pearson r", value: best.pearson.toFixed(2), sub: "on test set" },
  { label: "Genes", value: "27,251", sub: "after alignment" },
  { label: "Models", value: "4", sub: "compared" },
];

export default function PredictingGeneExpressionPage() {
  return (
    <main
      className="min-h-screen pb-24"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Nav */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-10">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150 hover:opacity-70"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <ArrowLeft size={15} strokeWidth={2} />
          Work
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 md:px-8 mt-10 mb-12">
        <div className="flex flex-wrap gap-2 mb-5">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: "var(--color-surface-raised)",
                color: "var(--color-text-secondary)",
                border: "1px solid var(--color-border)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <h1
          className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4 max-w-2xl"
          style={{ color: "var(--color-text-primary)" }}
        >
          Predicting Gene Expression from Histone Modifications
        </h1>
        <p
          className="text-lg leading-relaxed max-w-2xl"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Compared four ML models for predicting RNA-seq gene expression from
          histone ChIP-seq signals across 27,251 human genes.
        </p>
      </header>

      {/* Stat tiles */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-12">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4" role="list">
          {STATS.map(({ label, value, sub }) => (
            <li
              key={label}
              className="rounded-2xl border p-6"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <p
                className="text-3xl font-bold tracking-tight mb-1"
                style={{ color: "var(--color-text-primary)" }}
              >
                {value}
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--color-text-primary)" }}
              >
                {label}
              </p>
              <p
                className="text-xs mt-0.5"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {sub}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Model comparison */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-8">
        <div
          className="rounded-2xl border p-6 md:p-8"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <h2
            className="text-lg font-semibold mb-1"
            style={{ color: "var(--color-text-primary)" }}
          >
            Model Performance (R²)
          </h2>
          <p
            className="text-sm mb-6"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Gradient Boosting achieved the highest R² at 0.58, closely followed
            by Random Forest. The linear Ridge baseline confirmed that
            non-linear models better capture the histone-to-expression
            relationship.
          </p>
          <ModelComparisonChart data={modelComparison} />
        </div>
      </section>

      {/* Scatter + Feature importance */}
      <section className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Scatter */}
          <div
            className="rounded-2xl border p-6 md:p-8"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <h2
              className="text-lg font-semibold mb-1"
              style={{ color: "var(--color-text-primary)" }}
            >
              Actual vs. Predicted
            </h2>
            <p
              className="text-sm mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
              SVR on 500 sampled test genes. Pearson r = 0.75 on standardized
              log2 expression values.
            </p>
            <PredictionScatterChart data={scatterData} />
          </div>

          {/* Feature importance */}
          <div
            className="rounded-2xl border p-6 md:p-8"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <h2
              className="text-lg font-semibold mb-1"
              style={{ color: "var(--color-text-primary)" }}
            >
              Feature Importance (RF)
            </h2>
            <p
              className="text-sm mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
              H3K4me3 signal immediately downstream of the TSS accounts for
              over 36% of importance, consistent with its role as an active
              promoter marker.
            </p>
            <FeatureImportanceChart data={featureImportance} />
          </div>
        </div>
      </section>
    </main>
  );
}
