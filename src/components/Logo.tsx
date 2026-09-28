import React from 'react';
import logoSvg from '../assets/logo.svg';

interface LogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 36,
  showText = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Exact CoreSudo Labs Logo Icon */}
      <img
        src={logoSvg}
        alt="CoreSudo Labs Logo"
        width={typeof size === 'number' ? size : undefined}
        height={typeof size === 'number' ? size : undefined}
        style={{
          width: size,
          height: size,
        }}
        className="rounded-lg shadow-xs shrink-0 object-contain hover:brightness-110 transition-all duration-200"
      />

      {showText && (
        <span className="text-xl font-bold tracking-tight text-[#1C1C1C] font-display">
          CoreSudo <span className="text-[#0F4C4C] font-semibold">Labs</span>
        </span>
      )}
    </div>
  );
};
