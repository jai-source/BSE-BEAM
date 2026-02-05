// src/components/icons/commodities.jsx

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const PaddyIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M12 3v18" />
    <path d="M12 6l-3 2" />
    <path d="M12 6l3 2" />
    <circle cx="8.5" cy="8.2" r="0.9" />
    <circle cx="15.5" cy="8.2" r="0.9" />
    <path d="M12 10l-3 2" />
    <path d="M12 10l3 2" />
    <circle cx="8.5" cy="12.2" r="0.9" />
    <circle cx="15.5" cy="12.2" r="0.9" />
    <path d="M12 14l-3 2" />
    <path d="M12 14l3 2" />
    <circle cx="8.5" cy="16.2" r="0.9" />
    <circle cx="15.5" cy="16.2" r="0.9" />
  </svg>
);

export const GrainsIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <ellipse cx="9" cy="9" rx="2.2" ry="3" />
    <path d="M9 7.2v3.6" />
    <ellipse cx="15" cy="9" rx="2.2" ry="3" />
    <path d="M15 7.2v3.6" />
    <ellipse cx="12" cy="15" rx="2.4" ry="3.2" />
    <path d="M12 13v4" />
  </svg>
);

export const SugarIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M12 4l6 3.5v9L12 20l-6-3.5v-9L12 4z" />
    <path d="M6 7.5l6 3.5 6-3.5" />
    <path d="M12 11v9" />
  </svg>
);

export const RiceIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M6 13c0 4 3 7 6 7s6-3 6-7" />
    <path d="M7 13h10" />
    <path d="M9 8c.6-.8 1.4-1.2 2.2-1.2" />
    <path d="M12 8c.6-.8 1.4-1.2 2.2-1.2" />
    <path d="M10 10c.5-.6 1.1-.9 1.8-.9" />
    <path d="M13 10c.5-.6 1.1-.9 1.8-.9" />
  </svg>
);

export const OilSeedsIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M12 3C8 8 7 11 7 14a5 5 0 0010 0c0-3-1-6-5-11z" />
    <path d="M12 8c0 2.5-1 4.5-2.2 6" />
  </svg>
);

export const CornIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M12 4c3 0 5 3.2 5 8s-2 8-5 8-5-3.2-5-8 2-8 5-8z" />
    <path d="M10 7v10" />
    <path d="M12 7v10" />
    <path d="M14 7v10" />
    <path d="M7.5 9C6.2 10.6 5.6 12 5.6 14c0 2 1.1 3.8 2.9 5" />
    <path d="M16.5 9c1.3 1.6 1.9 3 1.9 5 0 2-1.1 3.8-2.9 5" />
  </svg>
);

export const WheatIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M12 3v18" />
    <path d="M12 6c-2 0-3.5 1.2-4.2 2.5 1.8.2 3.2-.3 4.2-1.2" />
    <path d="M12 6c2 0 3.5 1.2 4.2 2.5-1.8.2-3.2-.3-4.2-1.2" />
    <path d="M12 10c-2 0-3.5 1.2-4.2 2.5 1.8.2 3.2-.3 4.2-1.2" />
    <path d="M12 10c2 0 3.5 1.2 4.2 2.5-1.8.2-3.2-.3-4.2-1.2" />
    <path d="M12 14c-2 0-3.5 1.2-4.2 2.5 1.8.2 3.2-.3 4.2-1.2" />
    <path d="M12 14c2 0 3.5 1.2 4.2 2.5-1.8.2-3.2-.3-4.2-1.2" />
  </svg>
);

export const BiofuelIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M12 3c4 4 6 7 6 11a6 6 0 11-12 0c0-4 2-7 6-11z" />
    <path d="M9.2 15.8c1.4-1.8 3.4-2.8 5.6-3-1 2.6-2.8 4.5-5.6 5" />
  </svg>
);

export const FruitsIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M12 7c-2.5-2-5-1-6.2 1.6C4 12.6 6.2 20 12 20s8-7.4 6.2-11.4C17 6 14.5 5 12 7z" />
    <path d="M12 7c0-1.7.7-3 2.4-3.8" />
    <path d="M13.5 4.2c1.7 2 3.3 2.6 5.3 2.3" />
  </svg>
);

export const SpicesIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M9 3h6" />
    <path d="M8 6h8" />
    <path d="M8 6v3c0 1 1 2 2 2h4c1 0 2-1 2-2V6" />
    <path d="M8.5 11.5V20a2 2 0 002 2h3a2 2 0 002-2v-8.5" />
    <circle cx="11" cy="15" r="0.6" />
    <circle cx="13" cy="17" r="0.6" />
    <circle cx="13" cy="14" r="0.6" />
  </svg>
);

export const PulsesIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M9.5 7.5c-2 1-3 3.2-2.5 5.4.6 2.6 3 4.2 5.4 3.6 1.5-.4 2.6-1.6 3-3.1.6-2.4-.8-5.1-3.1-6-1.1-.4-2.1-.4-2.8.1z" />
    <path d="M14.5 8.8c1.9-.6 4 .3 4.8 2.2.9 2.3-.3 4.9-2.6 5.8-2.3.9-4.9-.3-5.8-2.6" />
  </svg>
);
