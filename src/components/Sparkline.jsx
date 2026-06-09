import React from 'react';

const Sparkline = ({ data, color = "#22C55E" }) => {
  // If all zeros, show a subtle "No data" message instead
  const allZero = data.every(v => v === 0);
  if (allZero) {
    return (
      <div className="flex items-center justify-end h-10">
        <span className="text-[10px] text-zinc-600 font-medium">No recent data</span>
      </div>
    );
  }

  // Simple SVG sparkline generator
  const width = 200;
  const height = 40;
  const padding = 5;
  
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * (width - padding * 2) + padding;
    const y = height - ((val - min) / range) * (height - padding * 2) - padding;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
      {/* Small dot at the end */}
      <circle 
        cx={width - padding} 
        cy={height - ((data[data.length - 1] - min) / range) * (height - padding * 2) - padding} 
        r="3" 
        fill={color} 
      />
    </svg>
  );
};

export default Sparkline;
