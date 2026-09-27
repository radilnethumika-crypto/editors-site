import { Check, Sparkles } from "lucide-react";

type Pkg = { name: string; price: string; features: string[]; popular?: boolean };

export default function ServiceCard({ pkg }: { pkg: Pkg }) {
  const icons: { [key: string]: string } = { Basic: "🌱", Standard: "🔥", Premium: "👑" };

  return (
    <div className={`relative rounded-2xl p-7 transition-all duration-300 group ${
      pkg.popular 
        ? "border-2 border-red-500/50 bg-gradient-to-b from-red-500/10 to-transparent hover:shadow-2xl hover:shadow-red-500/30" 
        : "glass hover:border-white/20"
    }`}>
      {pkg.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-red-500/50">
          <Sparkles className="w-3 h-3" /> MOST POPULAR
        </span>
      )}

      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{icons[pkg.name]}</span>
        <h3 className="font-bold text-xl">{pkg.name}</h3>
      </div>

      <div className="flex items-end gap-1 mt-3">
        <p className="text-4xl font-bold gradient-text">{pkg.price}</p>
        <span className="text-neutral-500 text-sm mb-1.5">/ project</span>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6" />

      <ul className="space-y-3 text-sm text-neutral-300">
        {pkg.features.map(f => (
          <li key={f} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> 
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}