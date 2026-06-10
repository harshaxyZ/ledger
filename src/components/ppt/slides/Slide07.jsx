// Slide 07: Literature Survey
const Slide07 = () => (
  <div className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto">
    <p className="text-sm font-bold tracking-widest uppercase text-white/50 mb-12">Literature Survey</p>
    <div className="w-full overflow-hidden border border-white/20 rounded-2xl">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-white text-black">
            <th className="p-6 font-bold text-xl">System</th>
            <th className="p-6 font-bold text-xl">Core Issue</th>
            <th className="p-6 font-bold text-xl">Privacy Impact</th>
          </tr>
        </thead>
        <tbody className="text-lg">
          <tr className="border-b border-white/10">
            <td className="p-6 font-bold">Splitwise</td>
            <td className="p-6 text-white/60">Server reliant, limits on free tier</td>
            <td className="p-6 text-white/60">High data collection</td>
          </tr>
          <tr className="border-b border-white/10">
            <td className="p-6 font-bold">Mint (Legacy)</td>
            <td className="p-6 text-white/60">Slow sync, ad-heavy interface</td>
            <td className="p-6 text-white/60">Sold financial data</td>
          </tr>
          <tr>
            <td className="p-6 font-bold">Wallet Apps</td>
            <td className="p-6 text-white/60">Complex setup, requires bank sync</td>
            <td className="p-6 text-white/60">Medium data exposure</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
export default Slide07;