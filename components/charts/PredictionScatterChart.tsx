"use client";
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

type Point = { actual: number; predicted: number };

const PRIMARY = "#92A8D1";
const MUTED = "#4A5870";
const GRID = "#D0DAE8";

export default function PredictionScatterChart({ data }: { data: Point[] }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <ScatterChart margin={{ top: 8, right: 8, bottom: 24, left: -8 }}>
        <XAxis
          type="number"
          dataKey="actual"
          name="Actual"
          domain={[-3, 3]}
          axisLine={false}
          tickLine={false}
          tick={{ fill: MUTED, fontSize: 11 }}
          label={{
            value: "Actual (std)",
            position: "insideBottom",
            offset: -12,
            fill: MUTED,
            fontSize: 11,
          }}
        />
        <YAxis
          type="number"
          dataKey="predicted"
          name="Predicted"
          domain={[-3, 3]}
          axisLine={false}
          tickLine={false}
          tick={{ fill: MUTED, fontSize: 11 }}
          label={{
            value: "Predicted (std)",
            angle: -90,
            position: "insideLeft",
            offset: 12,
            fill: MUTED,
            fontSize: 11,
          }}
        />
        <Tooltip
          formatter={(v: number) => v.toFixed(3)}
          contentStyle={{
            background: "#fff",
            border: `1px solid ${GRID}`,
            borderRadius: 10,
            fontSize: 12,
          }}
          cursor={{ strokeDasharray: "3 3" }}
        />
        <Scatter
          data={data}
          shape={(props: { cx?: number; cy?: number }) => (
            <circle
              cx={props.cx}
              cy={props.cy}
              r={2.5}
              fill={PRIMARY}
              fillOpacity={0.45}
            />
          )}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
