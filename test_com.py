import win32com.client
import os

try:
    Application = win32com.client.Dispatch("PowerPoint.Application")
    print("COM initialized successfully!")
    Application.Quit()
except Exception as e:
    print(f"Error: {e}")
