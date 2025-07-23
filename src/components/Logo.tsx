import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", showText = true }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <svg 
          width="48" 
          height="32" 
          viewBox="0 0 48 32" 
          className="overflow-visible"
        >
          {/* Heartbeat line (red) */}
          <path
            d="M2 16 L8 16 L10 8 L12 24 L14 4 L16 28 L18 16 L22 16"
            stroke="hsl(var(--heartbeat-red))"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-sm"
          />
          
          {/* Transition to growth line (green) */}
          <path
            d="M22 16 L26 14 L30 10 L34 8 L38 6 L42 4 L46 2"
            stroke="hsl(var(--growth-green))"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-sm"
          />
          
          {/* Growth arrow */}
          <path
            d="M42 2 L44 4 L42 6"
            stroke="hsl(var(--growth-green))"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      
      {showText && (
        <span className="text-2xl font-bold text-foreground tracking-tight">
          DebtBow
        </span>
      )}
    </div>
  );
};

export default Logo;