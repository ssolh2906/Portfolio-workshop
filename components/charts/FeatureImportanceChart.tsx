"use client";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type FeatureEntry = { feature: string; importance: number };

const PRIMARY = "#92A8D1";
const ACCENT = "#E8845A";
const MUTED = "#4A5870";
const GRID = "#D0DAE8";

const shortenLabel = (f: string) =>
  f.replace(" (bin ", " (b").replace(")", ")");

export default function FeatureImportanceChart({
  data,
}: {
  data: FeatureEntry[];
}) {
  const max = Math.max(...data.map((d) => d.importance));
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 0, right: 16, bottom: 0, left: 0 }}
      >
        <XAxis
          type="number"
          axisLine={false}
          tickLine={false}
          tick={{ fill: MUTED, fontSize: 11 }}
          tickFormatter={(v) => v.toFixed(2)}
        />
        <YAxis
          type="category"
          dataKey="feature"
          width={132}
          axisLine={false}
          tickLine={false}
          tick={{ fill: MUTED, fontSize: 11 }}
          tickFormatter={shortenLabel}
        />
        <Tooltip
          formatter={(v: number) => [v.toFixed(4), "Importance"]}
          contentStyle={{
            background: "#fff",
            border: `1px solid ${GRID}`,
            borderRadius: 10,
            fontSize: 12,
          }}
          cursor={{ fill: "rgba(0,0,0,0.03)" }}
        />
        <Bar dataKey="importance" radius={[0, 4, 4, 0]} maxBarSize={22}>
          {data.map((entry) => (
            <Cell
              key={entry.feature}
              fill={entry.importance === max ? ACCENT : PRIMARY}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
