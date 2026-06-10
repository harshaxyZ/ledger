// Slide 15: Budget Warnings
const Slide15 = () => (
  <div className="w-full h-full flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-16">
    <div className="flex-1">
      <h2 className="text-6xl font-black uppercase tracking-tighter mb-6 font-['Horizon','Outfit',sans-serif]">DYNAMIC<br/>WARNINGS</h2>
      <p className="text-xl text-white/60">The interface reacts in real-time, flashing visually to warn you about approaching limits.</p>
    </div>
    <div className="flex-1 flex justify-end">
      <img src="/ppt/screenshot_budget_warning.png" alt="Budget Warning" className="rounded-[2.5rem] h-[75vh] object-cover border-4 border-white/10" />
    </div>
  </div>
);
export default Slide15;