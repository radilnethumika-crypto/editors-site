export default function GlobalNeon() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="aura-orb-1 absolute top-[10%] left-[15%] w-[700px] h-[700px] bg-red-600/25 rounded-full blur-[120px]" />
      <div className="aura-orb-2 absolute top-[30%] right-[10%] w-[600px] h-[600px] bg-purple-600/25 rounded-full blur-[130px]" />
      <div className="aura-orb-3 absolute bottom-[15%] left-[30%] w-[550px] h-[550px] bg-pink-600/20 rounded-full blur-[120px]" />
      <div className="aura-orb-2 absolute bottom-[5%] right-[20%] w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[130px]" />
      <div className="aura-breathe absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/8 rounded-full blur-[150px]" />
      <div className="absolute inset-0 grid-pattern opacity-15" />
    </div>
  );
}
