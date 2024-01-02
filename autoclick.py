import tkinter as tk
import threading
import pyautogui
import time

class AutoClickerGUI:
    def __init__(self, master):
        self.master = master
        master.title("Auto Clicker")

        self.click_rate_label = tk.Label(master, text="Click Rate (clicks per second):")
        self.click_rate_label.pack()

        self.click_rate_entry = tk.Entry(master)
        self.click_rate_entry.pack()

        self.start_button = tk.Button(master, text="Start", command=self.start_auto_clicker)
        self.start_button.pack()

        self.stop_button = tk.Button(master, text="Stop", command=self.stop_auto_clicker)
        self.stop_button.pack()

        self.is_clicking = False

    def start_auto_clicker(self):
        try:
            click_rate = float(self.click_rate_entry.get())
        except ValueError:
            tk.messagebox.showerror("Error", "Invalid input. Please enter a valid number.")
            return

        self.is_clicking = True
        self.click_thread = threading.Thread(target=self.auto_click, args=(click_rate,))
        self.click_thread.start()

    def stop_auto_clicker(self):
        self.is_clicking = False

    def auto_click(self, click_rate):
        while self.is_clicking:
            pyautogui.click()
            time.sleep(1 / click_rate)

if __name__ == "__main__":
    root = tk.Tk()
    app = AutoClickerGUI(root)
    root.mainloop()
