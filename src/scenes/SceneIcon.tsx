const stroke = { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" } as const;

/** One small line icon per scene id; unknown ids fall back to a plain dot grid. */
export default function SceneIcon({ id }: { id: string }) {
  if (id === "live") {
    return (
      <svg width="30" height="30" viewBox="0 0 24 24" {...stroke} strokeWidth={1.8}>
        <circle cx={12} cy={12} r={2.200} fill="currentColor" stroke="none" />
        <path d="M7.800 7.800a6 6 0 0 0 0 8.400M16.200 7.800a6 6 0 0 1 0 8.400" />
        <path d="M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14" />
      </svg>
    );
  }
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
      <circle cx={7} cy={7} r={1.600} />
      <circle cx={17} cy={7} r={1.600} />
      <circle cx={7} cy={17} r={1.600} />
      <circle cx={17} cy={17} r={1.600} />
    </svg>
  );
}
