// Slide 05: Need for project
const Slide05 = () => (
  <div className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto">
    <p className="text-sm font-bold tracking-widest uppercase text-white/50 mb-16">Need For Project</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="border-t border-white pt-6">
        <h3 className="text-3xl font-bold mb-4">Trust</h3>
        <p className="text-white/60 text-lg">When you rely on third-party servers, your data is exposed to breaches and data brokers.</p>
      </div>
      <div className="border-t border-white pt-6">
        <h3 className="text-3xl font-bold mb-4">Speed</h3>
        <p className="text-white/60 text-lg">Cloud syncing adds friction. Tracking a simple coffee purchase shouldn't take 10 seconds of loading.</p>
      </div>
      <div className="border-t border-white pt-6">
        <h3 className="text-3xl font-bold mb-4">Simplicity</h3>
        <p className="text-white/60 text-lg">Most interfaces are cluttered to serve marketing goals rather than user experience.</p>
      </div>
    </div>
  </div>
);
export default Slide05;