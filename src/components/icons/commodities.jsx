// src/components/icons/commodities.jsx

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const PaddyIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M12 3v18" />
    <path d="M9 6l3-2 3 2" />
    <path d="M9 10l3-2 3 2" />
    <path d="M9 14l3-2 3 2" />
  </svg>
);

export const GrainsIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <circle cx="8" cy="12" r="2" />
    <circle cx="16" cy="12" r="2" />
    <circle cx="12" cy="8" r="2" />
  </svg>
);

export const SugarIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <rect x="5" y="5" width="14" height="14" rx="2" />
  </svg>
);

export const RiceIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <ellipse cx="10" cy="12" rx="2" ry="6" />
    <ellipse cx="14" cy="12" rx="2" ry="6" />
  </svg>
);

export const OilSeedsIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M12 3C8 8 7 11 7 14a5 5 0 0010 0c0-3-1-6-5-11z" />
  </svg>
);

export const CornIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <ellipse cx="12" cy="12" rx="4" ry="7" />
    <path d="M8 6c-2 2-3 4-3 6" />
    <path d="M16 6c2 2 3 4 3 6" />
  </svg>
);

export const WheatIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M12 3v18" />
    <path d="M10 7l2-2 2 2" />
    <path d="M10 11l2-2 2 2" />
    <path d="M10 15l2-2 2 2" />
  </svg>
);

export const BiofuelIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M12 3c4 4 6 7 6 11a6 6 0 11-12 0c0-4 2-7 6-11z" />
  </svg>
);

export const FruitsIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <circle cx="12" cy="13" r="5" />
    <path d="M12 4c1.5 2 3 3 5 3" />
  </svg>
);

export const SpicesIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M12 4v16" />
    <path d="M4 12h16" />
  </svg>
);

export const PulsesIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <ellipse cx="9" cy="12" rx="2" ry="3" />
    <ellipse cx="15" cy="12" rx="2" ry="3" />
  </svg>
);
