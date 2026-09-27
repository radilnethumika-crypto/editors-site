import WorkGrid from "@/components/WorkGrid";
import NeonBackground from "@/components/NeonBackground";
import FadeIn from "@/components/FadeIn";

export default function Portfolio() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-16">
      <NeonBackground variant="mixed" />
      <FadeIn>
        <h1 className="text-3xl md:text-5xl font-bold mb-2 font-display">Portfolio</h1>
        <p className="text-neutral-400 mb-10">Selected video & photo work.</p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <WorkGrid />
      </FadeIn>
    </section>
  );
}
