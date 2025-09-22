import { ReactNode, useEffect, useState } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  duration?: number; // optional, in seconds
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  duration = 0.4,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger fade/scale in on mount
    const timeout = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        transition: `opacity ${duration}s ease, transform ${duration}s ease`,
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.99)",
      }}
    >
      {children}
    </div>
  );
};

export default MotionWrapper;
