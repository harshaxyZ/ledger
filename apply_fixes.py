import os
import re

slide_dir = r"C:\Users\harsh\OneDrive\Pictures\Antigravity\ledger\src\components\ppt\slides"
engine_path = r"C:\Users\harsh\OneDrive\Pictures\Antigravity\ledger\src\components\ppt\PresentationEngine.jsx"

# Fix Engine
with open(engine_path, "r", encoding="utf-8") as f:
    engine = f.read()

engine = engine.replace("max-w-[1000px]", "w-[90vw] max-w-[1400px]")
engine = engine.replace("p-[80px]", "p-[30px] py-[30px]")
engine = engine.replace("font-['Syncopate',sans-serif]", "font-['Horizon',sans-serif]")

with open(engine_path, "w", encoding="utf-8") as f:
    f.write(engine)

# Fix Slides
for i in range(2, 21):
    filename = f"Slide{i:02d}.jsx"
    filepath = os.path.join(slide_dir, filename)
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Subheadings bold
        content = re.sub(r'text-\[\#ff3333\](?!\s+font-bold)', r'text-[#ff3333] font-bold', content)
        
        # Reduce margins
        content = content.replace("mb-[60px]", "mb-[30px]")
        content = content.replace("mb-[50px]", "mb-[20px]")
        content = content.replace("mb-[40px]", "mb-[20px]")
        content = content.replace("mb-[30px]", "mb-[15px]")
        
        # Widen containers
        content = content.replace("max-w-[900px]", "max-w-[1200px]")
        content = content.replace("max-w-[1000px]", "max-w-[1300px]")
        
        # Reduce image height slightly so text fits
        content = content.replace("70vh", "60vh")
        
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

# Replace Slide01
slide01_content = """import React from 'react';
import { motion } from 'framer-motion';

export default function Slide01() {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#000000]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1.0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 bg-contain bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/slideone.png')" }}
      />
    </div>
  );
}
"""
with open(os.path.join(slide_dir, "Slide01.jsx"), "w", encoding="utf-8") as f:
    f.write(slide01_content)

print("Updates applied successfully.")
