// Slide 19: Future Enhancements
const Slide19 = () => (
  <div className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto">
    <p className="text-sm font-bold tracking-widest uppercase text-white/50 mb-16">Future Scope</p>
    <div className="space-y-12 pl-8 border-l-2 border-white/20">
      <div className="relative">
        <div className="absolute w-4 h-4 bg-white rounded-full -left-[41px] top-2"></div>
        <h3 className="text-3xl font-bold">Custom Categories</h3>
        <p className="text-white/60 text-lg mt-2">User-defined taxonomy for logging.</p>
      </div>
      <div className="relative">
        <div className="absolute w-4 h-4 bg-[#111] border-2 border-white/50 rounded-full -left-[41px] top-2"></div>
        <h3 className="text-3xl font-bold text-white/50">Recurring Logs</h3>
        <p className="text-white/40 text-lg mt-2">Automated entries for subscriptions and rent.</p>
      </div>
      <div className="relative">
        <div className="absolute w-4 h-4 bg-[#111] border-2 border-white/50 rounded-full -left-[41px] top-2"></div>
        <h3 className="text-3xl font-bold text-white/50">Biometric Lock</h3>
        <p className="text-white/40 text-lg mt-2">FaceID / Fingerprint layer for local security.</p>
      </div>
    </div>
  </div>
);
export default Slide19;