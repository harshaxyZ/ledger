// Slide 17: Privacy First
const Slide17 = () => (
  <div className="w-full h-full flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-16">
    <div className="flex-1">
      <h2 className="text-6xl font-black uppercase tracking-tighter mb-6 font-['Horizon','Outfit',sans-serif]">DATA<br/>OWNERSHIP</h2>
      <p className="text-xl text-white/60">No backend. No trackers. You have total control to export or hard reset your data at any time.</p>
    </div>
    <div className="flex-1 flex justify-end">
      <img src="/ppt/screenshot_privacy.png" alt="Privacy Settings" className="rounded-[2.5rem] h-[75vh] object-cover border-4 border-white/10" />
    </div>
  </div>
);
export default Slide17;