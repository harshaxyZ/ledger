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
        self.cell(0, 10, 'Ledger Presentation Script (Expanded)', 0, 1, 'C')
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
    pdf.ln(3)
    
    for slide_title, text in content:
        pdf.set_font('Arial', 'B', 12)
        pdf.cell(0, 8, slide_title, 0, 1)
        pdf.set_font('Arial', '', 11)  # slightly smaller font to fit the expanded text
        pdf.multi_cell(0, 6, text)
        pdf.ln(4)

pdf = ScriptPDF()
pdf.set_auto_page_break(auto=False) # We will manually handle pages to ensure exactly 6 pages

# Page 1
create_page(pdf, 1, "Slides 1 to 3", [
    ("Slide 1: Title Screen", "Hello everyone! Thank you all for being here today. My team and I are very excited to present our project to you. It's called 'Ledger'. Ledger is a totally offline, privacy-first expense tracker. Today, we're going to show you why we built this, the problems we wanted to solve, and exactly how the application works behind the scenes."),
    ("Slide 2: Introduction - The Need for Privacy", "Let's talk about the need for privacy. Right now, almost every financial app on your phone demands access to your personal data. They track what you buy, where you eat, and how much money you earn. Worse, all this sensitive data gets uploaded to their cloud servers. Sometimes it gets analyzed, or even sold to marketing companies. We strongly believe that your money is your private business. That is exactly why we created Ledger. Ledger is 100% offline. There is absolutely no cloud database, and there is no login screen. Everything stays safely on your own device."),
    ("Slide 3: Problem - Why We Built This", "We built Ledger because we noticed three massive problems with current apps. First is the 'Data Privacy Crisis'. If a big corporate server gets hacked, your financial life is exposed. Second is 'Internet Dependency'. Most trackers completely freeze if you don't have internet access, making them useless when you're offline. Finally, there's 'Too Much Clutter'. Existing apps are packed with annoying ads, premium subscriptions, and complicated menus. People just want a fast, simple way to log their daily spending without the headaches.")
])

# Page 2
create_page(pdf, 2, "Slides 4 to 6", [
    ("Slide 4: Objectives - Our Goals For Ledger", "Our goals for Ledger were very clear right from the start. Number one: Complete Privacy. We ensured that zero data ever leaves your device. Number two: Offline-First. We wanted the app to load instantly, without any loading spinners, and work perfectly even if your phone is in airplane mode. Number three: Smart AI Coaching. We wanted to give users personalized financial advice, but without invading their privacy. To do this, we integrated the super-fast Groq API."),
    ("Slide 5: Survey - Looking At Competitors", "Before writing any code, we surveyed the competition. We looked closely at popular apps like Mint, YNAB, and Expensify. We noticed a trend: they all rely heavily on cloud servers. This means they all share the same major drawbacks. They either sell your data to ad networks, demand expensive monthly subscription fees, or have serious privacy risks. Ledger was designed as a Local Progressive Web App (PWA) specifically to avoid all of these traps."),
    ("Slide 6: Old Systems - How Current Trackers Work", "To understand why Ledger is better, let's look at how current trackers work. They use the 'Cloud Model'. When you open a normal tracker, it connects to a server. Every time you log a coffee, that data is sent over the internet and saved in a massive company database. This is a huge risk because your data can be stolen in server breaches. Furthermore, you cannot use the app if you lose connection, and these companies constantly monitor your spending habits to throw targeted ads at you.")
])

# Page 3
create_page(pdf, 3, "Slides 7 to 9", [
    ("Slide 7: Our System - The Local-First Approach", "Ledger completely breaks away from the cloud model. We built it as a Progressive Web App. This means all your financial data is saved instantly inside your device's browser using a technology called IndexedDB. The flow is incredibly simple: You type in your expense, it's saved locally on your phone. When you want advice, the Groq LLM analyzes your data, and the results show up on your dashboard. We only connect to the internet if you explicitly ask the AI a question, and we guarantee your chat is never saved anywhere."),
    ("Slide 8: Methodology - How We Built It", "Our development process followed a straightforward four-step methodology. First was Planning & Design: We decided a PWA was best because it works on any phone or laptop. We also chose a dark, minimal UI to make it easy on the eyes. Second was Frontend Construction: We used React and Tailwind CSS to build an interface that feels exactly like a native mobile app. Third was the Local Database: We used IndexedDB to handle saving and editing instantly. Fourth was AI Integration: We linked the Groq API to provide instant financial tips based on your local data."),
    ("Slide 9: Architecture - How The App Is Structured", "If you look at the structure of our app, it's divided into three clean layers. At the very top is the User Interface. This includes the Dashboard, the Charts, and the AI Chat. In the middle, we have the Logic & Controllers. This layer handles all the calculations, the data filtering, and communicating with the Groq API. At the very bottom is the Storage Layer. This relies purely on the browser's IndexedDB and Service Workers to keep everything running safely offline.")
])

# Page 4
create_page(pdf, 4, "Slides 10 to 12", [
    ("Slide 10: Tech Stack - What We Used", "To make Ledger a reality, we chose a very modern and powerful tech stack. For the frontend, we used React JS because it's fantastic for building fast user interfaces. For styling, we used Tailwind CSS, which allowed us to create a beautiful design very quickly. For storage, we used IndexedDB, the browser's built-in local database. To power our smart coach, we used the Groq API. We also added Framer Motion for buttery-smooth animations, and we packaged the whole thing using Vite so users can easily install it on their phones."),
    ("Slide 11: Implementation - The Four Main Parts", "Our implementation is broken down into four main sections that the user actually interacts with. First is The Main Dashboard, which gives a quick snapshot of your daily and monthly spending. Second is The History Log, which is a detailed list of all your past transactions. Third is The Charts & Insights module, which provides beautiful visual graphs so you can easily see where your money is going. Finally, we have The AI Coach, a unique chat interface powered by Groq that offers smart tips on how to save money."),
    ("Slide 12: Results - Dashboard", "Let's take a look at the final results. This is our Home Screen, or the Dashboard. When you open Ledger, this is the very first thing you see. We intentionally designed it to be dark, minimalistic, and extremely easy to read at a glance. It immediately tells you how much money you have spent today, and your total for the month. You don't have to click around or navigate through complex menus just to check your balance. It's right there instantly.")
])

# Page 5
create_page(pdf, 5, "Slides 13 to 15", [
    ("Slide 13: Results - History", "Next, we have the Transaction History screen. Think of this screen as your personal bank statement. Every single time you buy a coffee, pay rent, or get your salary, it gets logged right here. The transactions are neatly sorted by the exact day and date. To make it even easier to read, we use different colors to separate your income from your expenses. It makes scanning through your monthly history incredibly fast and painless."),
    ("Slide 14: Results - Coach", "Now, here is the Ledger Coach. We are very proud of this - it's the smartest feature of our entire application. Instead of just showing you a bunch of boring numbers, Ledger actually talks to you. You can ask it natural questions like, 'Am I spending too much money on food this week?' or 'How can I save more?' The Groq AI will instantly analyze your local data and give you a helpful, human-like response in milliseconds."),
    ("Slide 15: Results - Insights", "Finally, we have the Spending Insights tab. Looking at long lists of numbers can get confusing and boring. This tab takes all your raw expenses and turns them into beautiful, easy-to-understand visual charts. You can instantly see exactly which categories - like food, transport, or entertainment - are eating up most of your budget. By visualizing your data this way, it helps you make much better financial decisions going forward.")
])

# Page 6
create_page(pdf, 6, "Slides 16 to 20", [
    ("Slide 16: Key Features", "So, what really makes Ledger special compared to everything else? It comes down to two main things: Instant Loading and Private AI Analysis. Because Ledger is a PWA that uses your phone's local storage, there is absolutely zero loading time. Your data is just there. Secondly, when you ask the AI Coach a question, it quickly sends only the necessary context to the Groq API. We do not store your chat history, ensuring you get smart answers without compromising your privacy."),
    ("Slide 17: Future Plans", "Looking ahead, we have exciting future plans for Ledger. We plan to add three major features soon. First, an 'Export to Excel' button, allowing users to download their entire transaction history as a CSV file for their own records. Second, we want to add local Push Notifications to send simple daily reminders so users don't forget to log their expenses. Lastly, we plan to support Multiple Accounts, so you can separate your cash spending from your bank spending easily."),
    ("Slide 18, 19, 20: Conclusion", "To conclude, when we compare Ledger to the rest of the industry, the choice is clear. Our app is completely free, runs instantly, works 100% offline, and stores data safely on your device - not in some corporate cloud. Ledger successfully proves that powerful financial tools do not need to steal your data to be useful. By utilizing modern web technologies, we've created an app that is faster, safer, and much simpler than the biggest corporate competitors. Remember: It's your money. Your data. Your device. Thank you very much for listening. We would love to answer any questions you might have.")
])

pdf.output('scriptbro.pdf')
print("Expanded PDF generated successfully")
