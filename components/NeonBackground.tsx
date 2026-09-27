type Variant = "red" | "purple" | "blue" | "mixed" | "mixed-reverse";

export default function NeonBackground({ variant = "mixed" }: { variant?: Variant }) {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      {variant === "mixed" && (
        <>
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[140px] animate-aurora" />
          <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] animate-aurora-2" />
        </>
      )}

      {variant === "mixed-reverse" && (
        <>
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] animate-aurora-2" />
          <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-red-600/15 rounded-full blur-[140px] animate-aurora" />
        </>
      )}

      {variant === "red" && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[140px] animate-aurora" />
      )}

      {variant === "purple" && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px] animate-aurora" />
      )}

      {variant === "blue" && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px] animate-aurora" />
      )}

      {/* Grid pattern only */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
    </div>
  );
}