// Slide 18: Results
const Slide18 = () => (
  <div className="w-full h-full flex flex-col justify-center items-center max-w-5xl mx-auto text-center">
    <p className="text-sm font-bold tracking-widest uppercase text-white/50 mb-16">Results</p>
    <div className="grid grid-cols-1 md:grid-cols-3 w-full border border-white rounded-3xl overflow-hidden">
      <div className="p-16 border-b md:border-b-0 md:border-r border-white flex flex-col justify-center items-center bg-[#111]">
        <h3 className="text-7xl font-black mb-4">0<span className="text-4xl">ms</span></h3>
        <p className="text-white/60 font-bold uppercase tracking-widest">Latency</p>
      </div>
      <div className="p-16 border-b md:border-b-0 md:border-r border-white flex flex-col justify-center items-center bg-[#111]">
        <h3 className="text-7xl font-black mb-4">100<span className="text-4xl">%</span></h3>
        <p className="text-white/60 font-bold uppercase tracking-widest">Private</p>
      </div>
      <div className="p-16 flex flex-col justify-center items-center bg-white text-black">
        <h3 className="text-7xl font-black mb-4">PWA</h3>
        <p className="text-black/60 font-bold uppercase tracking-widest">Native Feel</p>
      </div>
    </div>
  </div>
);
export default Slide18;