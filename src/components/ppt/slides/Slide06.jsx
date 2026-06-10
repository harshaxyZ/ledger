// Slide 06: Objectives
const Slide06 = () => (
  <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto">
    <p className="text-sm font-bold tracking-widest uppercase text-white/50 mb-12">Objectives</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-[#111] p-12 rounded-3xl border border-white/10 hover:border-white/30 transition-colors">
        <h3 className="text-5xl font-bold mb-6 font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter">100% OFFLINE</h3>
        <p className="text-xl text-white/60">An application that works instantly, regardless of network conditions, acting as a native system feature.</p>
      </div>
      <div className="bg-[#111] p-12 rounded-3xl border border-white/10 hover:border-white/30 transition-colors">
        <h3 className="text-5xl font-bold mb-6 font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter">0 MS LATENCY</h3>
        <p className="text-xl text-white/60">Zero-latency transaction logging through localized state management.</p>
      </div>
      <div className="bg-[#111] p-12 rounded-3xl border border-white/10 hover:border-white/30 transition-colors md:col-span-2">
        <h3 className="text-5xl font-bold mb-6 font-['Horizon','Outfit',sans-serif] uppercase tracking-tighter">PRIVACY BY DESIGN</h3>
        <p className="text-xl text-white/60">Total data ownership. No databases, no telemetry, no tracking.</p>
      </div>
    </div>
  </div>
);
export default Slide06;