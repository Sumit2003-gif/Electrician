import React, { useEffect, useRef, useState } from "react";

const ScrollReveal = ({ children, direction = "up", className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  let translateClass = "";
  switch (direction) {
    case "up":
      translateClass = visible ? "translate-y-0" : "translate-y-12";
      break;
    case "down":
      translateClass = visible ? "translate-y-0" : "-translate-y-12";
      break;
    case "left":
      translateClass = visible ? "translate-x-0" : "-translate-x-12";
      break;
    case "right":
      translateClass = visible ? "translate-x-0" : "translate-x-12";
      break;
    default:
      translateClass = visible ? "translate-y-0" : "translate-y-12";
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out opacity-${visible ? 100 : 0} ${translateClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
