import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export type DividerVariant = 'wave' | 'curve' | 'geometric' | 'layered';

export interface SectionDividerProps {
  variant?: DividerVariant;
  fromColor?: string; // Color of the preceding section
  toColor?: string;   // Color of the following section
  accentGold?: boolean; // Whether to render a delicate gold accent stroke
  inverted?: boolean;
  className?: string;
  height?: number; // Height in px (default 48-64px)
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'wave',
  fromColor = '#061A33',
  toColor = '#F5F8FC',
  accentGold = true,
  inverted = false,
  className = '',
  height = 56,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Render SVG path based on selected variant
  const renderPattern = () => {
    switch (variant) {
      case 'curve':
        return (
          <>
            <path
              d={
                inverted
                  ? 'M0,60 Q500,0 1000,60 L1000,0 L0,0 Z'
                  : 'M0,0 Q500,60 1000,0 L1000,60 L0,60 Z'
              }
              fill={toColor}
            />
            {accentGold && (
              <path
                d={
                  inverted
                    ? 'M0,60 Q500,0 1000,60'
                    : 'M0,0 Q500,60 1000,0'
                }
                fill="none"
                stroke="#F4BD2E"
                strokeWidth="1.5"
                strokeOpacity="0.45"
              />
            )}
          </>
        );

      case 'geometric':
        return (
          <>
            <path
              d={
                inverted
                  ? 'M0,60 L500,10 L1000,60 L1000,0 L0,0 Z'
                  : 'M0,0 L500,50 L1000,0 L1000,60 L0,60 Z'
              }
              fill={toColor}
            />
            {accentGold && (
              <path
                d={
                  inverted
                    ? 'M0,60 L500,10 L1000,60'
                    : 'M0,0 L500,50 L1000,0'
                }
                fill="none"
                stroke="#F4BD2E"
                strokeWidth="1.5"
                strokeOpacity="0.5"
              />
            )}
          </>
        );

      case 'layered':
        return (
          <>
            {/* Secondary layered wave */}
            <path
              d={
                inverted
                  ? 'M0,45 C300,15 700,55 1000,20 L1000,0 L0,0 Z'
                  : 'M0,15 C300,45 700,5 1000,40 L1000,60 L0,60 Z'
              }
              fill={toColor}
              fillOpacity="0.3"
            />
            {/* Primary wave */}
            <path
              d={
                inverted
                  ? 'M0,60 C350,10 650,50 1000,15 L1000,0 L0,0 Z'
                  : 'M0,0 C350,50 650,10 1000,45 L1000,60 L0,60 Z'
              }
              fill={toColor}
            />
            {accentGold && (
              <path
                d={
                  inverted
                    ? 'M0,60 C350,10 650,50 1000,15'
                    : 'M0,0 C350,50 650,10 1000,45'
                }
                fill="none"
                stroke="#F4BD2E"
                strokeWidth="1.5"
                strokeOpacity="0.4"
              />
            )}
          </>
        );

      case 'wave':
      default:
        return (
          <>
            <path
              d={
                inverted
                  ? 'M0,60 C250,15 750,15 1000,60 L1000,0 L0,0 Z'
                  : 'M0,0 C250,45 750,45 1000,0 L1000,60 L0,60 Z'
              }
              fill={toColor}
            />
            {accentGold && (
              <path
                d={
                  inverted
                    ? 'M0,60 C250,15 750,15 1000,60'
                    : 'M0,0 C250,45 750,45 1000,0'
                }
                fill="none"
                stroke="#F4BD2E"
                strokeWidth="1.5"
                strokeOpacity="0.5"
              />
            )}
          </>
        );
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
      style={{
        backgroundColor: fromColor,
        height: `${height}px`,
      }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full block"
        viewBox="0 0 1000 60"
        preserveAspectRatio="none"
      >
        {renderPattern()}
      </svg>

      {/* Center Gold Crest Accent */}
      {accentGold && (
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center">
          <motion.div
            initial={shouldReduceMotion ? {} : { scale: 0.8, opacity: 0 }}
            whileInView={shouldReduceMotion ? {} : { scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-3.5 h-3.5 rotate-45 border border-[#F4BD2E] bg-[#061A33] shadow-[0_0_8px_rgba(244,189,46,0.6)] flex items-center justify-center"
          >
            <div className="w-1.5 h-1.5 bg-[#F4BD2E] rounded-full" />
          </motion.div>
        </div>
      )}
    </div>
  );
};
