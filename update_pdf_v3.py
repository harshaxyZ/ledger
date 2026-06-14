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
        self.cell(0, 10, 'Ledger Presentation Script (Maximum Expansion)', 0, 1, 'C')
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
        # Using 12pt font and generous line height to fill 3/4th of the page elegantly
        pdf.set_font('Arial', '', 12)  
        pdf.multi_cell(0, 7, text)
        pdf.ln(5)

pdf = ScriptPDF()
pdf.set_auto_page_break(auto=False) # Manually handling pages to ensure exactly 6 pages

# Page 1
create_page(pdf, 1, "Slides 1 to 3", [
    ("Slide 1: Title Screen", "Hello everyone, and a very warm welcome to our presentation. Thank you so much for taking the time to be here today. My team and I are incredibly excited to show you a project we have been working very hard on. We call it 'Ledger'. Ledger is an offline, completely private expense tracker built for modern users. Today, we are going to take you on a journey. We will show you exactly why we built this app, what massive real-world problems we are trying to solve, and how we made it all work under the hood without relying on any expensive cloud servers."),
    ("Slide 2: Introduction", "So, let's start by talking about the biggest issue today: the need for true privacy. If you look at your phone right now, almost every single financial app demands full access to your personal life. They track every coffee you buy, every place you eat, and exactly how much money goes into your bank account. The scary part is that all of this highly sensitive data gets uploaded to their remote cloud servers. From there, companies analyze your habits, and sometimes they even sell your information to marketing agencies so they can show you targeted ads. We strongly believe that what you do with your money is your private business, and nobody else's. That is exactly why we created Ledger. Ledger is 100% offline. There is no cloud database tracking you, and there isn't even a login screen. Your data never leaves your device."),
    ("Slide 3: Problem", "We decided to build Ledger because we noticed three massive, undeniable problems with all the current apps on the market. First is the 'Data Privacy Crisis'. If a giant corporate server gets hacked, your entire financial life is instantly exposed to hackers. Second is 'Internet Dependency'. Have you ever tried to log a quick cash expense while riding the subway or sitting on an airplane? Most tracking apps completely freeze or crash if you don't have an active internet connection, making them completely useless when you are offline. Finally, the third problem is 'Too Much Clutter'. Existing apps are packed with annoying pop-up ads, expensive premium subscriptions, and complicated, confusing menus. We realized that people just want a fast, super simple way to log their daily spending without all the headaches.")
])

# Page 2
create_page(pdf, 2, "Slides 4 to 6", [
    ("Slide 4: Objectives", "When we started building Ledger, our goals were very clear right from day one. Number one: Complete Privacy. We made absolutely sure that zero data ever leaves your device. Your data belongs to you. Number two: Offline-First. We wanted the app to be lightning fast. It needs to load instantly without any annoying loading spinners, and it has to work perfectly even if your phone is in airplane mode or if you have zero signal. Number three: Smart AI Coaching. We wanted to give our users personalized, smart financial advice, but we had to do it without invading their privacy or reading their data. To achieve this, we integrated the super-fast Groq API, which allows us to have a smart assistant right inside the app."),
    ("Slide 5: Survey", "Before we wrote a single line of code, we did our research. We surveyed the competition and looked closely at massive popular apps like Mint, YNAB, and Expensify. As we studied them, we noticed a very clear trend: they all rely heavily on cloud servers. Because of this, they all share the exact same major drawbacks. They either sell your data to ad networks, they demand expensive monthly subscription fees just to unlock basic features, or they have serious privacy risks that put the user in danger. Ledger was specifically designed as a Local Progressive Web App, or PWA, to completely avoid all of these traps and give the power back to the user."),
    ("Slide 6: Old Systems", "To really understand why Ledger is so much better, let's quickly look at how current trackers actually work. They use what we call the 'Cloud Model'. When you open a normal tracker on your phone, it immediately connects to a remote server. Every single time you log that you bought a coffee or a sandwich, that data is sent over the internet and saved in a massive company database alongside millions of other users. This is a huge risk. Why? Because your data can be easily stolen in massive server breaches. Furthermore, you simply cannot use the app if you lose your internet connection, and these companies constantly monitor your spending habits to throw targeted ads at you.")
])

# Page 3
create_page(pdf, 3, "Slides 7 to 9", [
    ("Slide 7: Our System", "Ledger completely breaks away from that outdated cloud model. We built it as a Progressive Web App. What this means is that all your financial data is saved instantly inside your device's browser using a highly secure technology called IndexedDB. The flow is incredibly simple and very safe: You type in your expense, and it's saved locally on your phone's memory. When you want financial advice, the Groq LLM analyzes your data, and the results show up right on your dashboard. We only connect to the internet if you explicitly ask the AI a question. Most importantly, we guarantee that your chat is never saved anywhere."),
    ("Slide 8: Methodology", "Our development process was very structured. We followed a straightforward four-step methodology. First was Planning & Design: We decided a Progressive Web App was the best choice because it works flawlessly on any phone, tablet, or laptop without needing an app store. We also chose a dark, minimal UI to make it look modern and easy on the eyes. Second was Frontend Construction: We used React and Tailwind CSS to build an interface that feels exactly like a smooth, native mobile app. Third was the Local Database: We used IndexedDB to handle saving and editing instantly without any lag. Fourth was AI Integration: We linked the Groq API to provide instant financial tips based purely on your local data."),
    ("Slide 9: Architecture", "If you take a look at the technical structure of our app, you will see it is divided into three very clean, distinct layers. At the very top is the User Interface. This includes everything you see and touch: the Dashboard, the visual Charts, and the AI Chat window. In the middle, we have the Logic & Controllers. This middle layer acts as the brain. It handles all the math calculations, the data filtering, and communicating securely with the Groq API. Finally, at the very bottom is the Storage Layer. This relies purely on the browser's IndexedDB and Service Workers to keep everything running safely, smoothly, and completely offline.")
])

# Page 4
create_page(pdf, 4, "Slides 10 to 12", [
    ("Slide 10: Tech Stack", "To make Ledger a reality, we chose an incredibly modern and powerful tech stack. For the frontend, we used React JS. React is fantastic for building fast, interactive user interfaces that never stutter or lag. For styling the app, we used Tailwind CSS, which allowed us to create a beautiful, modern design very quickly without writing thousands of lines of custom code. For our storage, we used IndexedDB, which is the browser's powerful built-in local database. To power our smart coach, we used the Groq API because it is one of the fastest AI engines in the world. We also added Framer Motion to give the app buttery-smooth animations, and we packaged the whole thing using Vite so users can easily install it straight to their home screen."),
    ("Slide 11: Implementation", "Our implementation is broken down into four main sections that the user actually interacts with every day. First is The Main Dashboard, which gives a very quick, top-level snapshot of your daily and monthly spending. Second is The History Log, which is a detailed, scrollable list of all your past transactions. Third is The Charts & Insights module, which provides beautiful visual graphs so you can easily see exactly where your money is going instead of just looking at raw numbers. Finally, we have The AI Coach, a unique chat interface powered by Groq that acts like your personal financial advisor and offers smart tips on how to save money."),
    ("Slide 12: Results - Dashboard", "Let's take a look at the final results, starting with the Dashboard. This is our Home Screen. When you open Ledger, this is the very first thing you see. We intentionally designed it to be dark, minimalistic, and extremely easy to read at a glance. We didn't want to overwhelm the user with too much information. It immediately tells you exactly how much money you have spent today, and your total spending for the entire month. You don't have to click around or navigate through complex, confusing menus just to check your balance. It's right there instantly as soon as the app opens.")
])

# Page 5
create_page(pdf, 5, "Slides 13 to 15", [
    ("Slide 13: Results - History", "Next, we have the Transaction History screen. You can think of this screen as your own personal bank statement. Every single time you buy a coffee, pay your rent, or get your monthly salary, it gets logged right here. The transactions are neatly sorted by the exact day and date so you never lose track of when you spent your money. To make it even easier to read, we use different colors to separate your income from your expenses. For example, money coming in is green, and money going out is red. It makes scanning through your monthly history incredibly fast, painless, and completely stress-free."),
    ("Slide 14: Results - Coach", "Now, here is the Ledger Coach. We are very, very proud of this feature - it is easily the smartest part of our entire application. Instead of just showing you a bunch of boring numbers and making you do the math, Ledger actually talks to you. You can type in natural questions like, 'Am I spending too much money on food this week?' or 'How can I save more money for a vacation?' The Groq AI will instantly analyze your local data in the background and give you a highly helpful, human-like response in a matter of milliseconds. It is like having a financial advisor in your pocket."),
    ("Slide 15: Results - Insights", "Finally, we have the Spending Insights tab. Looking at long lists of numbers can get very confusing and honestly, quite boring. This tab takes all your raw expenses and automatically turns them into beautiful, easy-to-understand visual charts. You can instantly see exactly which categories - like food, transport, or entertainment - are eating up most of your budget. By visualizing your data this way instead of just showing a spreadsheet, it really helps you make much better financial decisions going forward, because you can actually see where the problem areas are.")
])

# Page 6
create_page(pdf, 6, "Slides 16 to 20", [
    ("Slide 16: Key Features", "So, what really makes Ledger special compared to everything else out there? It comes down to two main things: Instant Loading and Private AI Analysis. Because Ledger is a PWA that uses your phone's local storage, there is absolutely zero loading time. Your data doesn't have to travel through space to reach a server; it is just there immediately. Secondly, when you ask the AI Coach a question, it quickly sends only the strictly necessary context to the Groq API. We do absolutely not store your chat history anywhere, ensuring you get incredibly smart answers without ever compromising your privacy."),
    ("Slide 17: Future Plans", "Looking ahead, we have some very exciting future plans for Ledger. We plan to add three major features soon to make the app even better. First, an 'Export to Excel' button, allowing users to safely download their entire transaction history as a CSV file for their own personal records or for taxes. Second, we want to add local Push Notifications to send simple, friendly daily reminders so users don't forget to log their expenses at the end of the day. Lastly, we plan to support Multiple Accounts, so you can easily separate your cash spending from your bank spending or business expenses."),
    ("Slide 18, 19, 20: Conclusion", "To conclude, when we compare Ledger to the rest of the industry, the choice is extremely clear. Our app is completely free, it runs instantly, it works 100% offline, and it stores your sensitive data safely on your device - not in some massive corporate cloud. Ledger successfully proves that powerful, intelligent financial tools do not need to steal your data to be useful. By utilizing modern web technologies, we've created an app that is faster, safer, and much simpler than the biggest corporate competitors in the world. Always remember: It's your money. Your data. Your device. Thank you very much for listening to our presentation today. We would love to answer any questions you might have.")
])

pdf.output('scriptbro.pdf')
print("Maximum Expanded PDF generated successfully")
