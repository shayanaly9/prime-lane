"use client";

import React from "react";

interface BrandLogoProps {
  variant?: "icon" | "horizontal" | "badge";
  size?: number;
  light?: boolean;
  className?: string;
}

export default function BrandLogo({
  variant = "horizontal",
  size = 32,
  light = false,
  className = "",
}: BrandLogoProps) {
  // Colors
  const primary = "#639922";
  const accent = "#C0DD97";
  const dark = "#3B6D11";
  const white = "#ffffff";

  // Icon Component
  const Icon = ({ s }: { s: number }) => (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* Hexagon */}
      <path
        d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z"
        fill={variant === "badge" ? "transparent" : primary}
        stroke={variant === "badge" ? accent : "none"}
        strokeWidth="1.5"
      />
      {/* 5 Bars (Signal Style) */}
      <rect x="6" y="14" width="1.5" height="4" rx="0.75" fill={accent} />
      <rect x="9" y="11" width="1.5" height="7" rx="0.75" fill={accent} />
      <rect x="12" y="8" width="1.5" height="10" rx="0.75" fill={accent} />
      <rect x="15" y="6" width="1.5" height="12" rx="0.75" fill={accent} />
      <rect x="18" y="9" width="1.5" height="9" rx="0.75" fill={accent} />
    </svg>
  );

  if (variant === "icon") {
    return <Icon s={size} />;
  }

  if (variant === "badge") {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${className}`}
        style={{ background: dark, border: `1px solid ${primary}20` }}
      >
        <Icon s={size * 0.6} />
        <span
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontWeight: 500,
            fontSize: `${size * 0.5}px`,
            color: accent,
            letterSpacing: "-0.01em",
          }}
        >
          Lane
        </span>
      </div>
    );
  }

  // Default: horizontal lockup
  return (
    <div className={`flex items-center gap-3 relative group ${className}`}>
      <Icon s={size} />
      <div className="flex flex-col leading-none">
        <div className="relative">
          <span
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontWeight: 500,
              fontSize: `${size * 0.8}px`,
              color: light ? white : "var(--c-ink)",
              letterSpacing: "-0.02em",
            }}
          >
            Lane
          </span>
          {/* Underline accent */}
          <div 
            className="absolute -bottom-1 left-0 h-[2px] bg-lane-accent w-0 group-hover:w-full transition-all duration-300"
            style={{ backgroundColor: accent }}
          ></div>
        </div>
        <span
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontWeight: 400,
            fontSize: `${size * 0.3}px`,
            color: light ? "rgba(255,255,255,0.6)" : "var(--c-ink-soft)",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginTop: "2px",
          }}
        >
          by PrimeLane
        </span>
      </div>
    </div>
  );
}
