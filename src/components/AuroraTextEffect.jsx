import { cn } from "../lib/utils";

export function AuroraTextEffect({
  text,
  className,
  textClassName,
  fontSize = "inherit",
  colors = {
    first: "#AC6AFF",
    second: "#FFC876",
    third: "#858DFF",
    fourth: "#FF98E2",
  },
  animationSpeed = 8,
}) {
  const gradientId = `aurora-gradient-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <>
      <style>{`
        @keyframes aurora-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
        }
        
        .aurora-text-${gradientId} {
          background: linear-gradient(
            -45deg,
            ${colors.first},
            ${colors.second},
            ${colors.third},
            ${colors.fourth},
            ${colors.first},
            ${colors.second}
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: aurora-shift ${animationSpeed}s ease infinite;
        }
      `}</style>
      
      <span
        className={cn(
          `aurora-text-${gradientId}`,
          className,
          textClassName
        )}
        style={{ fontSize }}
      >
        {text}
      </span>
    </>
  );
}

export default AuroraTextEffect;
