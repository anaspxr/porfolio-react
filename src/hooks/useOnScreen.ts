import { RefObject, useEffect, useState } from "react";

export default function useOnScreen(
  ref: RefObject<HTMLElement>,
  disconnect?: boolean
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
      if (disconnect && entry.isIntersecting) observer.disconnect();
    });

    observer.observe(ref.current as HTMLElement);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isIntersecting;
}
