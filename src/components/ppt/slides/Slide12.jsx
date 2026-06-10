// Slide 12: Implementation
const Slide12 = () => (
  <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto">
    <p className="text-sm font-bold tracking-widest uppercase text-white/50 mb-12">Implementation Modules</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-10 border border-white/20 hover:border-white transition-colors rounded-2xl">
        <h3 className="text-3xl font-bold mb-4">Transaction Engine</h3>
        <p className="text-white/60 text-lg">Optimized local CRUD operations with automatic real-time UI updates.</p>
      </div>
      <div className="p-10 border border-white/20 hover:border-white transition-colors rounded-2xl">
        <h3 className="text-3xl font-bold mb-4">Budget System</h3>
        <p className="text-white/60 text-lg">Dynamic thresholding that visually reacts to user spending patterns.</p>
      </div>
      <div className="p-10 border border-white/20 hover:border-white transition-colors rounded-2xl">
        <h3 className="text-3xl font-bold mb-4">AI Coach</h3>
        <p className="text-white/60 text-lg">Groq API integration for intelligent, personalized financial advice.</p>
      </div>
    </div>
  </div>
);
export default Slide12;