import clsx from "clsx";

export default function Loader({ className = "" }: { className?: string }) {
  return (
    <div
      className={clsx(
        "flex justify-center items-center min-h-[60vh]",
        className
      )}
    >
      <span className="inline-block w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
