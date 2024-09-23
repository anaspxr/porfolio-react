import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";

export default function SectionCard({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(ref, true);

  return (
    <section
      ref={ref}
      className={`${
        isVisible && "show"
      } hide section flex justify-center items-center p-4 m-8 border border-violet-950 bg ${className}`}
      id={id}>
      {children}
    </section>
  );
}
