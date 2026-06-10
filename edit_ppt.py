import win32com.client
import os

ppt_path = os.path.abspath("ppt template.pptx")
out_path = os.path.abspath("LEDGER_Product_Presentation.pptx")

screenshots = {
    "dashboard": os.path.abspath("screenshot_dashboard_data.png"),
    "warning": os.path.abspath("screenshot_budget_warning.png"),
    "insights": os.path.abspath("screenshot_insights.png"),
    "privacy": os.path.abspath("screenshot_privacy.png"),
    "offline": os.path.abspath("screenshot_offline.png")
}

Application = win32com.client.Dispatch("PowerPoint.Application")
try:
    Presentation = Application.Presentations.Open(ppt_path, WithWindow=False)
    
    while Presentation.Slides.Count < 23:
        Presentation.Slides(13).Duplicate()
        
    slides_content = [
        [],
        ["LEDGER", "Team Details", "Project Details", "Department of CSE", "Guide Details"],
        ["Your Money.", "Your Rules.", "Offline. Private. Smart.", "", ""],
        ["Why Ledger Exists", "The privacy problem", "Data harvesting", "Offline tracking fails", ""],
        ["The Problem", "Third-party servers", "Cluttered interfaces", "High latency syncs", ""],
        ["Objectives", "100% Offline Capable", "Zero-latency logging", "Privacy by design", ""],
        ["Literature Survey", "Splitwise - Server reliant", "Mint - Data harvesting", "Wallet - Paid features", ""],
        ["Existing vs Ledger", "Cloud vs Local", "Ads vs Ad-Free", "Accounts vs Anonymous", ""],
        ["What Makes Us Different", "Sub-second logging", "Local AI Coaching", "Zero databases", ""],
        ["How Ledger Works", "1. Open app", "2. Log instantly", "3. Data stays on device", ""],
        ["Architecture", "React Frontend", "-> Custom Hooks", "-> LocalStorage", "-> UI Updates"],
        ["Technology Stack", "React 19", "Vite PWA", "Tailwind CSS v4", "LocalStorage API"],
        ["Core Features", "Categorized Logging", "Streaks Gamification", "Groq AI Advisor", ""],
        ["Budget Warnings", "Dynamic limits", "Real-time updates", "Visual alerts", ""],
        ["Analytics & Insights", "Top categories", "Monthly trends", "Visual progress", ""],
        ["Privacy First", "No backend", "No trackers", "Total data ownership", ""],
        ["Offline First", "Service Workers", "Instant booting", "Works completely off-grid", ""],
        ["Implementation", "Transaction Engine", "Budget System", "AI Coach", ""],
        ["Results", "0ms Latency", "Native App Feel", "100% Private tracking", ""],
        ["Future Scope", "Custom Categories", "Recurring Logs", "Biometric Lock", ""],
        ["Conclusion", "Fast. Secure. Private.", "Ready to scale locally.", "", ""],
        ["References", "React Documentation", "MDN PWA Specs", "Tailwind CSS Guides", ""],
        ["Thank You", "LEDGER", "Questions?", "", ""]
    ]
    
    for i, texts in enumerate(slides_content):
        slide = Presentation.Slides(i+1)
        text_shapes = [shape for shape in slide.Shapes if shape.HasTextFrame]
        for j, t in enumerate(texts):
            if j < len(text_shapes):
                text_shapes[j].TextFrame.TextRange.Text = t
                
    def add_image(slide_idx, img_path):
        if os.path.exists(img_path):
            slide = Presentation.Slides(slide_idx)
            slide.Shapes.AddPicture(img_path, LinkToFile=False, SaveWithDocument=True, Left=550, Top=100, Width=200, Height=400)
            
    add_image(3, screenshots["dashboard"])
    add_image(14, screenshots["warning"])
    add_image(15, screenshots["insights"])
    add_image(16, screenshots["privacy"])
    add_image(17, screenshots["offline"])
    
    Presentation.SaveAs(out_path)
    Presentation.Close()
    print("Done editing PPT.")
except Exception as e:
    print(f"Error: {e}")
finally:
    Application.Quit()
