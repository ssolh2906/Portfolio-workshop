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

type ModelEntry = { model: string; r2: number; pearson: number; mae: number };

const PRIMARY = "#92A8D1";
const ACCENT = "#E8845A";
const MUTED = "#4A5870";
const GRID = "#D0DAE8";

export default function ModelComparisonChart({ data }: { data: ModelEntry[] }) {
  const best = Math.max(...data.map((d) => d.r2));
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: -20 }}>
        <XAxis
          dataKey="model"
          axisLine={false}
          tickLine={false}
          tick={{ fill: MUTED, fontSize: 13 }}
        />
        <YAxis
          domain={[0.5, 0.62]}
          axisLine={false}
          tickLine={false}
          tick={{ fill: MUTED, fontSize: 12 }}
          tickFormatter={(v) => v.toFixed(2)}
        />
        <Tooltip
          formatter={(v: number) => [v.toFixed(4), "R²"]}
          contentStyle={{
            background: "#fff",
            border: `1px solid ${GRID}`,
            borderRadius: 10,
            fontSize: 13,
          }}
          cursor={{ fill: "rgba(0,0,0,0.04)" }}
        />
        <Bar dataKey="r2" radius={[6, 6, 0, 0]} maxBarSize={52}>
          {data.map((entry) => (
            <Cell
              key={entry.model}
              fill={entry.r2 === best ? ACCENT : PRIMARY}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
