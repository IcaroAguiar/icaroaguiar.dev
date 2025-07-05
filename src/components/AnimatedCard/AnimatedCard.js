import React from "react";
import { useInView } from "react-intersection-observer";
import "./AnimatedCard.css";

function AnimatedCard({ children, customClass = "" }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação acontece apenas uma vez
    threshold: 0.1, // O card aparece quando 10% dele estiver visível
  });

  return (
    <div
      ref={ref}
      className={`animated-card ${inView ? "is-visible" : ""} ${customClass}`}
    >
      {children}
    </div>
  );
}

export default AnimatedCard;
