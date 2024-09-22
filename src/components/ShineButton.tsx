export default function ShineButton({
  onClick,
  children,
  className,
}: {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`before:ease relative overflow-hidden border border-violet-900 bg-violet-500 bg-opacity-5
        text-white shadow-md transition-all duration-500 before:absolute before:right-0 before:top-0 before:h-12 before:w-6
         before:translate-x-12 before:rotate-6 before:bg-violet-950 before:opacity-20 before:duration-700
          hover:shadow-violet-500 hover:before:-translate-x-40 ${className}`}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
