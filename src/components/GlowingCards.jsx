import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';

export const GlowingCard = ({
  children,
  className,
  glowColor = "#AC6AFF",
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative",
        className
      )}
      style={{
        '--glow-color': glowColor,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const GlowingCards = ({
  children,
  className,
  enableGlow = true,
  glowRadius = 25,
  glowOpacity = 1,
  animationDuration = 400,
  gap = "1rem",
  ...props
}) => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;

    if (!container || !overlay || !enableGlow) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({ x, y });
      setShowOverlay(true);

      overlay.style.setProperty('--x', x + 'px');
      overlay.style.setProperty('--y', y + 'px');
      overlay.style.setProperty('--opacity', glowOpacity.toString());
    };

    const handleMouseLeave = () => {
      setShowOverlay(false);
      overlay.style.setProperty('--opacity', '0');
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enableGlow, glowOpacity]);

  const containerStyle = {
    '--gap': gap,
    '--animation-duration': animationDuration + 'ms',
    '--glow-radius': glowRadius + 'rem',
    '--glow-opacity': glowOpacity,
  };

  return (
    <div
      className={cn("relative w-full", className)}
      style={containerStyle}
      {...props}
    >
      <div
        ref={containerRef}
        className="relative"
      >
        {children}

        {enableGlow && (
          <div
            ref={overlayRef}
            className="absolute inset-0 pointer-events-none select-none opacity-0 transition-all ease-out"
            style={{
              WebkitMask:
                "radial-gradient(var(--glow-radius) var(--glow-radius) at var(--x, 0) var(--y, 0), #000 1%, transparent 50%)",
              mask:
                "radial-gradient(var(--glow-radius) var(--glow-radius) at var(--x, 0) var(--y, 0), #000 1%, transparent 50%)",
              opacity: showOverlay ? 'var(--opacity)' : '0',
              transitionDuration: 'var(--animation-duration)',
            }}
          >
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child) && child.type === GlowingCard) {
                const cardGlowColor = child.props.glowColor || "#AC6AFF";
                return React.cloneElement(child, {
                  className: cn(
                    child.props.className,
                    "bg-opacity-15"
                  ),
                  style: {
                    ...child.props.style,
                    backgroundColor: cardGlowColor + "15",
                    borderColor: cardGlowColor,
                    boxShadow: "0 0 0 1px inset " + cardGlowColor,
                  },
                });
              }
              return child;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default GlowingCards;
