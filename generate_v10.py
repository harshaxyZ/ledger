import os

slide_dir = r"C:\Users\harsh\OneDrive\Pictures\Antigravity\ledger\src\components\ppt\slides"

slides_data = {}

# Slide 8 - 2x2 Grid instead of timeline
slides_data["Slide08"] = """import React from 'react';
import { motion } from 'framer-motion';
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const anim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
export default function Slide08() {
  const steps = [
    { title: "Planning & Design", body: "We decided to build a PWA for cross-platform support. We planned the UI to be clean, dark, and simple." },
    { title: "Frontend Construction", body: "We built the interface using React and Tailwind CSS. We made sure it feels like a native mobile app." },
    { title: "Local Database", body: "We implemented IndexedDB to handle saving, editing, and deleting transactions instantly." },
    { title: "AI Integration", body: "We connected the Groq API to provide lightning-fast financial coaching based on local data." },
  ];
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={anim} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[20px] text-center">Methodology</motion.h1>
      <motion.h2 variants={anim} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[40px] text-center">How We Built It</motion.h2>
      
      <div className="w-full max-w-[1100px] grid grid-cols-2 gap-[30px] text-left">
        {steps.map((s, i) => (
          <motion.div variants={anim} key={i} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[32px] rounded-[16px]">
            <div className="text-[40px] font-[800] text-[#ff3333] mb-[10px]">0{i+1}</div>
            <h3 className="text-[28px] font-[700] text-[#ffffff] mb-[12px]">{s.title}</h3>
            <p className="text-[20px] text-[#b0b0b0] font-[400] leading-[1.6]">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
"""

# Slides 12-15 - Larger Images
def generate_result_slide(idx, title, subtitle, image_src, desc_head, desc_body):
    return f"""import React from 'react';
import {{ motion }} from 'framer-motion';
const container = {{ hidden: {{ opacity: 0 }}, show: {{ opacity: 1, transition: {{ staggerChildren: 0.1 }} }} }};
const anim = {{ hidden: {{ opacity: 0, y: 30 }}, show: {{ opacity: 1, y: 0, transition: {{ duration: 0.4, ease: "easeOut" }} }} }};
export default function Slide{idx}() {{
  return (
    <motion.div variants={{container}} initial="hidden" animate="show" className="w-full flex flex-col items-center">
      <motion.h1 variants={{anim}} className="text-[80px] md:text-[96px] font-[700] text-[#ffffff] mb-[10px] text-center">{title}</motion.h1>
      <motion.h2 variants={{anim}} className="text-[32px] md:text-[36px] font-[700] text-[#ff3333] mb-[30px] text-center">{subtitle}</motion.h2>
      <div className="w-full max-w-[1200px] flex justify-between items-center text-left">
        <motion.div variants={{anim}} className="w-[50%] flex justify-center bg-transparent">
          <div className="rounded-[32px] overflow-hidden border-[6px] border-[#222222] shadow-[0_30px_80px_rgba(0,0,0,0.6)] w-full max-h-[75vh] flex items-center justify-center bg-[#000000]">
             <img src="{image_src}" alt="Screenshot" className="w-full h-full object-contain" loading="lazy" decoding="async" />
          </div>
        </motion.div>
        <motion.div variants={{anim}} className="w-[45%] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-[32px] rounded-[16px]">
          <h3 className="text-[28px] md:text-[32px] font-[700] text-[#ffffff] mb-[20px]">{desc_head}</h3>
          <p className="text-[18px] md:text-[22px] text-[#b0b0b0] font-[400] leading-[1.6] whitespace-pre-line">{desc_body}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}}
"""

slides_data["Slide12"] = generate_result_slide("12", "Results", "Dashboard View", "/image_1.webp", "The Home Screen", "When you open Ledger, this is the very first thing you see.\\n\\nWe designed it to be dark, minimal, and extremely easy to read. It immediately tells you how much money you have spent today, and how much you have spent this whole month. You don't have to navigate through menus just to check your balance.")
slides_data["Slide13"] = generate_result_slide("13", "Results", "Transaction History", "/image_2.webp", "Your Complete Log", "This screen acts like your personal bank statement.\\n\\nEvery single time you buy a coffee or pay rent, it is logged here. The transactions are neatly sorted by day and date. It uses different colors to separate your income from your expenses, making it very easy to scan.")
slides_data["Slide14"] = generate_result_slide("14", "Results", "Ledger Coach", "/image_3.webp", "The Groq AI Coach", "This is the smartest feature of our application.\\n\\nInstead of just showing numbers, Ledger actually talks to you. You can ask it questions like 'Am I spending too much on food?' and the Groq AI will instantly analyze your local data and give you a helpful, human-like response.")
slides_data["Slide15"] = generate_result_slide("15", "Results", "Spending Insights", "/image_4.webp", "Visualizing Data", "Looking at long lists of numbers can be boring and confusing.\\n\\nThe insights tab takes all your expenses and turns them into beautiful visual charts. You can instantly see exactly which categories are eating up most of your budget, helping you make better financial decisions.")


for slide_name, content in slides_data.items():
    with open(os.path.join(slide_dir, f"{slide_name}.jsx"), "w", encoding="utf-8") as f:
        f.write(content)

print("V10 generation complete.")
