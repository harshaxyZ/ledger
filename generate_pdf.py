import sys
import subprocess

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    from fpdf import FPDF
except ImportError:
    install('fpdf')
    from fpdf import FPDF

class ScriptPDF(FPDF):
    def header(self):
        self.set_font('Arial', 'B', 15)
        self.cell(0, 10, 'Ledger Presentation Script', 0, 1, 'C')
        self.ln(5)
    
    def footer(self):
        self.set_y(-15)
        self.set_font('Arial', 'I', 8)
        self.cell(0, 10, f'Page {self.page_no()}', 0, 0, 'C')

def create_page(pdf, person_num, slide_range, content):
    pdf.add_page()
    pdf.set_font('Arial', 'B', 14)
    pdf.set_text_color(255, 0, 0)
    pdf.cell(0, 10, f'SPEAKER {person_num} ({slide_range})', 0, 1)
    pdf.set_text_color(0, 0, 0)
    pdf.ln(5)
    
    for slide_title, text in content:
        pdf.set_font('Arial', 'B', 12)
        pdf.cell(0, 8, slide_title, 0, 1)
        pdf.set_font('Arial', '', 12)
        pdf.multi_cell(0, 8, text)
        pdf.ln(5)

pdf = ScriptPDF()
pdf.set_auto_page_break(auto=False) # We will manually handle pages to ensure exactly 6 pages

# Page 1
create_page(pdf, 1, "Slides 1 to 3", [
    ("Slide 1: Title Screen", "Hello everyone, and welcome to our presentation. Today we are proud to introduce Ledger - a privacy-first, offline expense tracker. Let's dive into why we built this and how it works."),
    ("Slide 2: Introduction - The Need for Privacy", "Right now, almost every financial app on the market demands your personal data. They want to know what you buy, where you shop, and how much money you make. This data is uploaded to their cloud servers, analyzed, and often sold to advertisers. We believe your money is your private business. That is why we built Ledger. It is a 100% offline, privacy-first web application. There is no cloud. There is no login. Everything stays on your device forever."),
    ("Slide 3: Problem - Why We Built This", "We identified three major problems with current apps. First, the Data Privacy Crisis: if corporate servers get hacked, your financial data gets leaked. Second, Internet Dependency: most trackers are completely useless if you don't have internet. And third, Too Much Clutter: existing apps are filled with annoying ads and complicated features. People just want a simple, fast way to track spending.")
])

# Page 2
create_page(pdf, 2, "Slides 4 to 6", [
    ("Slide 4: Objectives - Our Goals For Ledger", "Our goals for Ledger were very clear. 1. Complete Privacy: Zero data leaves the device. Everything is stored securely in your browser's local storage. 2. Offline-First: The app loads instantly and works perfectly even in airplane mode. 3. Smart AI Coaching: We wanted to provide personalized financial advice without invading your privacy, which we achieved using the Groq API."),
    ("Slide 5: Survey - Looking At Competitors", "When we surveyed the market, we looked at apps like Mint, YNAB, and Expensify. They all rely on cloud architectures, and they all have major drawbacks - whether it's selling data to ad networks, requiring expensive monthly subscriptions, or having massive privacy concerns. Ledger is a Local PWA that solves these issues."),
    ("Slide 6: Old Systems - How Current Trackers Work", "Let's look at the Cloud Model. Most trackers operate centrally. When you open the app, it connects to a server. When you log an expense, it is sent over the internet and saved in a massive company database. This is bad because your data can be stolen in hacks, you can't use the app offline, and companies analyze your spending habits to serve you ads.")
])

# Page 3
create_page(pdf, 3, "Slides 7 to 9", [
    ("Slide 7: Our System - The Local-First Approach", "Ledger completely removes the cloud. We built it as a Progressive Web App, meaning all data is saved instantly inside your device's browser using IndexedDB. The flow is simple: You log an expense, it's saved locally, the Groq LLM analyzes it, and the output is pushed to your dashboard. We only connect to the internet to ask the AI a question, and we never save those chats."),
    ("Slide 8: Methodology - How We Built It", "Our development followed a 4-step methodology: 1. Planning & Design: We decided to build a cross-platform PWA with a clean, dark UI. 2. Frontend Construction: We built the interface using React and Tailwind CSS. 3. Local Database: We implemented IndexedDB to handle saving and editing transactions instantly. 4. AI Integration: We connected the Groq API to provide lightning-fast financial coaching based on local data."),
    ("Slide 9: Architecture - How The App Is Structured", "Our architecture is divided into three layers. At the top, the User Interface, handling the Dashboard, Charts, and Chat. In the middle, the Logic & Controllers, managing state, filtering, and API requests. At the bottom, the Storage Layer, powered by the browser's IndexedDB and Service Workers.")
])

# Page 4
create_page(pdf, 4, "Slides 10 to 12", [
    ("Slide 10: Tech Stack - What We Used", "To build this, we used a modern tech stack. We used React JS and Tailwind CSS for a fast, beautiful frontend. We used IndexedDB for local storage, the Groq API for our AI coach, Framer Motion for smooth animations, and Vite to bundle it all as a Progressive Web App."),
    ("Slide 11: Implementation - The Four Main Parts", "Our implementation is broken down into four main modules: The Main Dashboard for a quick summary of spending. The History Log to see all past transactions. The Charts & Insights for visual graphs to see where your money is going. The AI Coach, a chat interface powered by Groq to give you smart saving tips."),
    ("Slide 12: Results - Dashboard View", "Let's look at the results. This is the Home Screen. When you open Ledger, this is the very first thing you see. We designed it to be dark, minimal, and extremely easy to read. It immediately tells you how much money you have spent today, and how much you have spent this whole month, without needing to navigate through any menus.")
])

# Page 5
create_page(pdf, 5, "Slides 13 to 15", [
    ("Slide 13: Results - Transaction History", "This is the Transaction History. This screen acts like your personal bank statement. Every single time you buy a coffee or pay rent, it is logged here. The transactions are neatly sorted by day and date, and it uses different colors to separate your income from your expenses."),
    ("Slide 14: Results - Ledger Coach", "Here is the Ledger Coach. This is the smartest feature of our application. Instead of just showing numbers, Ledger actually talks to you. You can ask it questions like 'Am I spending too much on food?' and the Groq AI will instantly analyze your local data and give you a helpful, human-like response."),
    ("Slide 15: Results - Spending Insights", "Finally, the Spending Insights. Looking at long lists of numbers can be confusing. This tab takes all your expenses and turns them into beautiful visual charts. You can instantly see exactly which categories are eating up most of your budget, helping you make better financial decisions.")
])

# Page 6
create_page(pdf, 6, "Slides 16 to 20", [
    ("Slide 16: Key Features - What Makes It Special", "So what makes Ledger special? Two things: Instant Loading and Private AI Analysis. Because it's a PWA using local storage, there is zero loading time. And when you ask the AI Coach a question, it quickly sends only the relevant context to the Groq API. We do not store your chat history anywhere."),
    ("Slide 17: Future Plans - What We Will Add Next", "In the future, we plan to add three major features: 1. Export to Excel, allowing users to download their entire history as a CSV file. 2. Push Notifications to send local reminders to log daily expenses. 3. Multiple Accounts to separate cash spending from credit card spending."),
    ("Slide 18, 19 & 20: Conclusion", "When comparing Ledger to the industry, our app is completely free, runs instantly, works 100% offline, and stores data on your device, not the cloud. Ledger successfully proves that powerful financial tools do not need to steal your data. By using modern web technologies, we created an app that is faster, safer, and simpler than the biggest corporate competitors. Your money. Your data. Your device. Thank you very much. Any questions?")
])

pdf.output('scriptbro.pdf')
print("PDF generated successfully")
