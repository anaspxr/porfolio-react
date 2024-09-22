export default function SectionCard({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`section flex justify-center items-center p-4 m-8 border border-violet-950 bg ${className}`}
      id={id}>
      {children}
    </section>
  );
}
