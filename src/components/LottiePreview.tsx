import { useEffect, useRef } from "react";

type Props = {
  src?: string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  className?: string;
};

export default function LottiePreview({ src, loop = true, autoplay = true, speed = 1, className = "" }: Props) {
  const container = useRef<HTMLDivElement | null>(null);
  const anim = useRef<{
    destroy: () => void;
    setSpeed: (value: number) => void;
  } | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      if (!src || !container.current) return;
      try {
        const lottie = (await import("lottie-web")).default;
        const res = await fetch(src);
        const data = await res.json();
        if (cancelled) return;
        anim.current = lottie.loadAnimation({
          container: container.current,
          renderer: "svg",
          loop,
          autoplay,
          animationData: data,
        });
        anim.current.setSpeed(speed);
      } catch {
        // silent fallback
      }
    }

    init();

    return () => {
      cancelled = true;
      if (anim.current) anim.current.destroy();
    };
  }, [src, loop, autoplay, speed]);

  return (
    <div className={className} aria-hidden>
      <div ref={container} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
