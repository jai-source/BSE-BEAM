export default function Coil({ className = "" }) {
  return (
    <svg
      viewBox="0 0 420 70"
      className={`w-[90%] h-14 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4f6f60" />
          <stop offset="45%" stopColor="#1e3b30" />
          <stop offset="55%" stopColor="#10261f" />
          <stop offset="100%" stopColor="#4f6f60" />
        </linearGradient>

        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.35" />
        </filter>
      </defs>

      {Array.from({ length: 9 }).map((_, i) => {
        const x = 40 + i * 45;
        return (
          <path
            key={i}
            d={`
              M ${x} 8
              C ${x - 14} 10, ${x - 14} 52, ${x} 54
              C ${x + 14} 52, ${x + 14} 18, ${x + 6} 14
            `}
            fill="none"
            stroke="url(#metal)"
            strokeWidth="6"
            strokeLinecap="round"
            filter="url(#shadow)"
          />
        );
      })}
    </svg>
  );
}
