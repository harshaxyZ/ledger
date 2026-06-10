// Slide 08: Existing Systems
const Slide08 = () => (
  <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto">
    <p className="text-sm font-bold tracking-widest uppercase text-white/50 mb-16">Existing Systems vs Ledger</p>
    <div className="flex gap-16 items-center">
      <div className="flex-1 space-y-12 opacity-50">
        <h3 className="text-3xl font-bold mb-8">Existing Apps</h3>
        <div><p className="text-xl font-bold">Cloud Dependent</p><p className="text-sm">Requires connection</p></div>
        <div><p className="text-xl font-bold">Ad-Supported</p><p className="text-sm">Cluttered interface</p></div>
        <div><p className="text-xl font-bold">Account Based</p><p className="text-sm">Requires PII to use</p></div>
      </div>
      <div className="w-px h-[400px] bg-white/20"></div>
      <div className="flex-1 space-y-12">
        <h3 className="text-4xl font-black uppercase tracking-tight mb-8 font-['Horizon','Outfit',sans-serif]">LEDGER</h3>
        <div><p className="text-2xl font-bold">100% Local</p><p className="text-lg text-white/60">Instant access</p></div>
        <div><p className="text-2xl font-bold">Ad-Free</p><p className="text-lg text-white/60">Pure functionality</p></div>
        <div><p className="text-2xl font-bold">Anonymous</p><p className="text-lg text-white/60">No emails, no accounts</p></div>
      </div>
    </div>
  </div>
);
export default Slide08;