import WorkGrid from "@/components/WorkGrid";

export default function Portfolio() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Portfolio</h1>
      <p className="text-neutral-400 mb-10">Selected video & photo work.</p>
      <WorkGrid />
    </section>
  );
}
