from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 390, 'height': 844},
            user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)'
        )
        page = context.new_page()
        url = "https://ledger67.vercel.app/"
        
        # 1. Normal Dashboard
        page.goto(url)
        page.wait_for_timeout(2000)
        page.screenshot(path="screenshot_dashboard.png")
        
        # 2. Fill Data and take Dashboard again
        page.evaluate('''() => {
            localStorage.setItem('kuber_userName', 'Harsha');
            const now = new Date();
            const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 15).toISOString();
            const thisMonth = new Date().toISOString();
            const txs = [
                {id: 1, amount: 3200, type: "expense", categoryId: "shopping", note: "Weekly Groceries", date: lastMonth},
                {id: 2, amount: 1450, type: "expense", categoryId: "food", note: "Dinner with friends", date: lastMonth},
                {id: 3, amount: 450, type: "expense", categoryId: "food", note: "Zomato", date: thisMonth},
                {id: 4, amount: 200, type: "expense", categoryId: "transport", note: "Uber", date: thisMonth}
            ];
            localStorage.setItem('kuber_transactions', JSON.stringify(txs));
            // Set budget to trigger warning
            localStorage.setItem('kuber_budgets', JSON.stringify({food: 2000}));
        }''')
        page.reload()
        page.wait_for_timeout(2000)
        page.screenshot(path="screenshot_dashboard_data.png")
        
        # Budget warning (It triggers natively on the home page)
        page.screenshot(path="screenshot_budget_warning.png")
        
        # 3. Insights (Analytics)
        page.click("text=Insights")
        page.wait_for_timeout(1000)
        page.screenshot(path="screenshot_insights.png")
        
        # 4. Settings / Privacy
        page.click("text=Home")
        page.wait_for_timeout(1000)
        # Assuming the settings icon is an SVG we can click
        page.locator("button.p-2.bg-white\\\\/5.rounded-full.hover\\\\:bg-white\\\\/10").click()
        page.wait_for_timeout(1000)
        page.screenshot(path="screenshot_privacy.png")
        
        # 5. Offline simulation
        context.set_offline(True)
        page.reload()
        page.wait_for_timeout(1000)
        page.screenshot(path="screenshot_offline.png")

        browser.close()

run()
