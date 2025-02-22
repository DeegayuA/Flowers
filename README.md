# Mood Cheering Website 🎭

## Introduction
This is a simple one-page mood-cheering website that generates a **random lovely comment** using **GEMINI 2.0 AI**. Users can interact with the website by clicking **"Love it"** or **"Nah"** buttons, influencing the quote engagement metrics. The project started as a fun idea during a lecture and was inspired by [this CodePen snippet](https://codepen.io/mdusmanansari/pen/BamepLe).

## Features ✨
- **Dynamic AI-generated compliments** to boost user mood.
- **Engaging UI** with colorful buttons.
- **Firebase Realtime Database integration** for tracking user interactions.
- **Social Experiment on Data Awareness** – logs user interactions to study how much data can be extracted passively.

## Data Collection & Social Experiment 📊
This project also serves as an experiment to observe how much **passive data** can be collected from users without explicit input. Here are a few insights derived from the collected data:

### **1. User Behavior Analysis**
- Some users **visited multiple times (up to 25 times)**, indicating repeat engagement.
- **Desktop users** showed more prolonged engagement compared to mobile users.
- Interaction with the **"Love it" and "Nah"** buttons varied, suggesting different emotional responses.

### **2. Device & Connectivity Insights**
- **Majority used mobile devices**, primarily Android.
- **Screen sizes** ranged from **385px to 412px** for mobile users, showing diversity in user devices.
- Some users had **high latency connections (400ms RTT)**, indicating slower network speeds.
- **Battery status & charging behavior** varied, revealing different usage environments.

### **3. Location & Language Preferences**
- All users were from **Sri Lanka (LK)**.
- Language settings varied between **en-US, en-GB, and en-LK**, indicating different localization preferences.

## **What Can We Learn From This?** 🤔
- **Data Awareness:** Many users do not realize how much data can be gathered using just their IP address and device info.
- **User Engagement Insights:** Desktop users tend to engage more deeply, whereas mobile users may prefer quick interactions.
- **Performance Optimization:** Considering the high RTT (latency) for some users, optimizing for slow connections can improve accessibility.

## **Tech Stack Used** 🛠️
- **HTML, CSS, JavaScript** – Frontend UI
- **Firebase Realtime Database** – Backend storage
- **GEMINI 2.0 AI** – AI-generated comments

## **How to Run Locally?** 🏃‍♂️
1. Clone the repository:
   ```sh
   git clone https://github.com/DeegayuA/Flowers.git
   ```
2. Open `index.html` in your browser.
3. Enjoy the mood-boosting comments!

## **License** 📝
This project is open-source under the **MIT License**. Feel free to modify and use it as you like.

---
🚀 _"Even a simple website can make someone's day better!"_
