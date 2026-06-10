// Slide 13: Dashboard Showcase
const Slide13 = () => (
  <div className="w-full h-full flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-16">
    <div className="flex-1">
      <h2 className="text-6xl font-black uppercase tracking-tighter mb-6 font-['Horizon','Outfit',sans-serif]">THE<br/>DASHBOARD</h2>
      <p className="text-xl text-white/60">Frictionless entry. Deep categorized logging. Habit-forming gamification streaks.</p>
    </div>
    <div className="flex-1 flex justify-end">
      <img src="/ppt/screenshot_dashboard.png" alt="Dashboard" className="rounded-[2.5rem] h-[75vh] object-cover border-4 border-white/10" />
    </div>
  </div>
);
export default Slide13;