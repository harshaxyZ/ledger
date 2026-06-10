// Slide 03: Hero
const Slide03 = () => (
  <div className="w-full h-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
    <div className="flex-1">
      <h1 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] font-black uppercase tracking-tighter font-['Horizon','Outfit',sans-serif]">
        YOUR<br/>MONEY.<br/>YOUR<br/>RULES.
      </h1>
    </div>
    <div className="flex-1 flex justify-center relative">
      <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-75"></div>
      <img src="/ppt/screenshot_dashboard_data.png" alt="App Dashboard" className="relative z-10 rounded-[3rem] border-8 border-[#151B23] shadow-2xl h-[70vh] object-cover" />
    </div>
  </div>
);
export default Slide03;