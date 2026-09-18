import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Carousel({ slides = [], gif, label, to }) {
  const [i, setI] = useState(0);
  const still = Boolean(gif);
  const frames = still ? [gif] : slides;

  useEffect(() => {
    if (still || frames.length < 2) return undefined;
    const t = setInterval(() => setI((n) => (n + 1) % frames.length), 5200);
    return () => clearInterval(t);
  }, [still, frames.length]);

  return (
    <Link to={to} className="panel" aria-label={label}>
      {frames.map((src, n) => (
        <img
          key={src}
          src={src}
          alt=""
          className={n === i || still ? "is-on" : ""}
          draggable="false"
        />
      ))}
      <span className="veil" />
      <span className="ghost">{label}</span>
    </Link>
  );
}
