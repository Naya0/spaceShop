import React, { useEffect, useRef, useState } from "react";
import { useTrail, a } from "react-spring";

interface TrailProps {
  open: boolean;
  children: React.ReactNode;
}

const Trail: React.FC<TrailProps> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

const AnimationTextBlock = () => {
  const [open, setOpen] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setOpen(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={elementRef}
      className="h-[600px] py-18 grid md:grid-cols-[2fr_1fr] grid-cols-1 grid-rows-[3fr_1fr] items-end overflow-hidden"
    >
      <div className="h-full">
        <Trail open={open}>
          <span className="text-gray-300 uppercase md:text-9xl text-6xl">
            Открой
          </span>
          <span className="text-gray-300 uppercase  md:text-9xl md:ml-28 text-6xl ml-15">
            Тайны
          </span>
          <span className="text-gray-300 uppercase md:text-9xl md:ml-48 text-6xl">
            Космоса
          </span>
          <span className="text-gray-300 uppercase not-first:uppercase md:text-9xl  text-6xl md:ml-68 ml-20">
            с нами
          </span>
        </Trail>
      </div>
      <div className="flex justify-end">
        <img src="/images/moon.png" alt="moon" className="sm:h-5/6 h-[100px]" />
      </div>
    </section>
  );
};

export default AnimationTextBlock;
