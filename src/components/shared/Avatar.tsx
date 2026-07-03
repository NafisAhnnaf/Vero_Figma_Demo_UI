import React from 'react';

const AVATAR_COLORS = [
  "from-violet-400 to-indigo-500",
  "from-pink-400 to-rose-400",
  "from-teal-400 to-cyan-400",
  "from-amber-400 to-orange-400",
  "from-sky-400 to-blue-400",
];

export function Avatar({
  initials,
  colorIndex = 0,
  size = "md",
}: {
  initials: string;
  colorIndex?: number;
  size?: "xs" | "sm" | "md" | "lg";
}) {
  const sz = { xs: "w-5 h-5 text-[8px]", sm: "w-6 h-6 text-[9px]", md: "w-8 h-8 text-[11px]", lg: "w-10 h-10 text-sm" }[size];
  return (
    <div className={`${sz} rounded-full bg-gradient-to-br ${AVATAR_COLORS[colorIndex % AVATAR_COLORS.length]} flex items-center justify-center shrink-0`}>
      <span className="text-white font-semibold">{initials}</span>
    </div>
  );
}

export function AvatarStack({ names, size = "sm" }: { names: string[]; size?: "xs" | "sm" }) {
  return (
    <div className="flex -space-x-1.5">
      {names.slice(0, 4).map((n, i) => (
        <div
          key={i}
          className={`${size === "xs" ? "w-5 h-5 text-[8px]" : "w-6 h-6 text-[9px]"} rounded-full bg-gradient-to-br ${AVATAR_COLORS[i % AVATAR_COLORS.length]} border-2 border-background flex items-center justify-center`}
        >
          <span className="text-white font-semibold">{n[0]}</span>
        </div>
      ))}
    </div>
  );
}

export function VeroLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sz = { sm: "w-6 h-6 text-[10px]", md: "w-8 h-8 text-xs", lg: "w-12 h-12 text-xl" }[size];
  return (
    <div className={`${sz} rounded-xl bg-primary flex items-center justify-center shrink-0`}>
      <span className="text-white font-bold tracking-tight">V</span>
    </div>
  );
}
