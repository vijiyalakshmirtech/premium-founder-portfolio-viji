import { useEffect, useRef, useState } from "react";

type Props = {
  srcMp4?: string;
  poster?: string;
  className?: string;
};

export default function HeroVideo({ srcMp4 = "/videos/hero.mp4", poster = "/videos/hero-poster.svg", className = "" }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;

    try {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !loaded) {
            // set src lazily
            if (!el.getAttribute("data-loaded")) {
              el.src = srcMp4;
              el.setAttribute("data-loaded", "true");
              el.load();
              el.play().catch(() => {});
              setLoaded(true);
            }
          }
        });
      }, { threshold: 0.25 });

      observer.observe(el);
    } catch {
      // fallback: load immediately
      if (!el.getAttribute("data-loaded")) {
        el.src = srcMp4;
        el.setAttribute("data-loaded", "true");
        el.load();
        el.play().catch(() => {});
        setLoaded(true);
      }
    }

    return () => {
      if (observer && el) observer.unobserve(el);
    };
  }, [srcMp4, loaded]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      playsInline
      muted
      loop
      preload="none"
      aria-hidden
      style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 18 }}
    />
  );
}
