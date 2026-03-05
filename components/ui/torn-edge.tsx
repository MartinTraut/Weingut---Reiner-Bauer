"use client";

interface TornEdgeProps {
  position?: "top" | "bottom";
  fillColor?: string;
  height?: number;
  seed?: number;
  className?: string;
}

function generateTornPath(
  position: "top" | "bottom",
  seed: number,
  width: number,
  height: number
): string {
  const points: { x: number; y: number }[] = [];
  const numPoints = 24;
  const step = width / (numPoints - 1);

  // Seeded random for deterministic output
  let s = seed;
  const rand = () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s % 1000) / 1000;
  };

  for (let i = 0; i < numPoints; i++) {
    const x = i * step;
    const baseY = position === "top" ? height * 0.6 : height * 0.4;
    const variance = height * 0.45;
    const y = baseY + (rand() - 0.5) * variance;
    points.push({ x, y: Math.max(2, Math.min(height - 2, y)) });
  }

  // Build smooth Bezier path
  let path = "";
  if (position === "bottom") {
    // Start from top-left, go across torn edge, close at top-right
    path = `M 0 0 L 0 ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const curr = points[i];
      const next = points[i + 1];
      const cpx = (curr.x + next.x) / 2;
      path += ` Q ${cpx} ${curr.y + (rand() - 0.5) * height * 0.3} ${next.x} ${next.y}`;
    }
    path += ` L ${width} 0 Z`;
  } else {
    // Start from bottom-left, go across torn edge, close at bottom-right
    path = `M 0 ${height} L 0 ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const curr = points[i];
      const next = points[i + 1];
      const cpx = (curr.x + next.x) / 2;
      path += ` Q ${cpx} ${curr.y + (rand() - 0.5) * height * 0.3} ${next.x} ${next.y}`;
    }
    path += ` L ${width} ${height} Z`;
  }

  return path;
}

export default function TornEdge({
  position = "bottom",
  fillColor = "#1A1A1A",
  height = 80,
  seed = 42,
  className = "",
}: TornEdgeProps) {
  const svgWidth = 1200;
  const path = generateTornPath(position, seed, svgWidth, height);

  return (
    <div
      className={`absolute left-0 right-0 w-full overflow-hidden pointer-events-none z-[3] ${
        position === "bottom" ? "bottom-0" : "top-0"
      } ${className}`}
      style={{ height: `${height}px`, lineHeight: 0 }}
    >
      <svg
        viewBox={`0 0 ${svgWidth} ${height}`}
        preserveAspectRatio="none"
        className="w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} fill={fillColor} />
      </svg>
    </div>
  );
}
