# 🌟 Ratan Chaurasiya | Personal Portfolio & Analytics Hub

Welcome to the official repository of my personal portfolio website and analytics hub. I am a **Full Stack Developer & Data Analyst** pursuing a B.Tech in Information Technology. This website is a premium, interactive showcase of my frontend engineering, database architectures, and business intelligence dashboards.

📊 **Live Portals:**
*   **Portfolio Website:** [ratanchaurasiya.github.io](https://ratanchaurasiya.github.io/)
*   **Banking System Demo:** [Banking-System Demo](https://ratanchaurasiya.github.io/Banking-System/)
*   **Attendance Management Demo:** [Attendance Management Demo](https://ratanchaurasiya.github.io/attendance-management-system/)

---

## 🚀 Key Premium Features

*   **⚡ Interactive Particle Network Canvas:** A custom HTML5 canvas rendering in the background that responds dynamically to mouse movement, creating an immersive, fluid grid-like animation.
*   **🌗 LocalStorage-Persistent Theme Toggle:** Toggle seamlessly between dark mode and light mode. The site automatically remembers your preference across reloads using the Local Storage API.
*   **🪄 Glassmorphic Navigation Header:** Transparent blurring effects that transition to smooth, full-glass styles as you scroll down.
*   **📁 Dynamic Modal-Based Case Study System:** Clicking on details for projects and dashboards displays a custom, rich overlay loading case studies dynamically from an in-memory JS database, featuring bulleted key accomplishments, responsive action buttons, and technology badges.
*   **📱 Modular CSS Pattern & Fluid Responsiveness:** Customized stylesheets separated by page views for optimal loading, using high-precision Flexbox and Grid components built mobile-first.
*   **🎭 Scrolling Revelations:** Powered by `ScrollReveal` for subtle, organic fading and positioning transitions, and `Typed.js` for an elegant introduction typewriter effect.
*   **✉️ Secure Serverless Contact Form:** Uses the `Web3Forms` API allowing asynchronous email submissions directly from the UI with real-time dynamic toast and alert messages.

---

## 📂 Project Architecture

The workspace follows a highly structured, clean layout separating page configurations, static assets, and distinct styling contexts:

```text
├── index.html                 # Main entryway (Home page with intro, stats & badges)
├── about.html                 # Bio & chronological professional learning timeline
├── skills.html                # Technical (linear) & professional (radial SVG) skill charts
├── projects.html              # Custom interactive showcase of software projects
├── dashboards.html            # Business intelligence reports with case study detail hooks
├── contact.html               # Web3Forms-integrated communication form page
├── script.js                  # Core javascript bundle (particle engine, modal logic, theme toggles)
│
├── Style.css                  # Core global style token system, grid layout, and base resets
├── home.css                   # Custom layouts and badge styles specifically for Home
├── about.css                  # timeline charts and custom bio flexboxes
├── skills.css                 # Custom keyframes for linear bars and radial SVG strokes
├── portfolio.css              # Grid-filtering columns and case study modal overlays
├── contact.css                # Glassmorphic form sheets and interactive input fields
│
├── picture.jpg                # Portfolio profile image
├── ratan.jpeg                 # Alternate portrait image
├── Attendance.png             # Attendance Management System snapshot
├── banking_dashboard.png      # Banking Simulation Dashboard snapshot
├── bi_dashboard.png           # Blinkit Power BI Dashboard snapshot
├── amazoe_dashboard.png       # Amazon Sales Dashboard snapshot
└── excel_analytics.png        # Excel Business Growth Analysis snapshot
```

---

## 💻 Local Development Setup

To run this project locally without any dependencies:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Ratanchaurasiya/Ratanchaurasiya.github.io-main.git
    cd Ratanchaurasiya.github.io-main
    ```

2.  **Open Directly or Run a Local Server:**
    *   **Option A:** Simply double-click `index.html` to run directly in your browser.
    *   **Option B (Recommended):** Use a light static server (like VS Code Live Server or python's `http.server`) to ensure smooth routing and relative resource loading:
        ```bash
        # Using Python 3
        python -m http.server 8000
        ```
        Then, open your browser and navigate to `http://localhost:8000`.

---

## 📈 Featured Projects & Dashboards

### 💻 Software Projects
1.  **Attendance Management System**
    *   *Core Tech:* `HTML/CSS`, `JavaScript`, `Android OS integration`, `Relational Database (SQL)`.
    *   *Features:* Real-time checks with swipe gestures, auto-generating reports, and WhatsApp API endpoints to forward instant notifications to administrative coordinators.
2.  **Banking Simulation & State Dashboard**
    *   *Core Tech:* `HTML/CSS`, `JavaScript (ES6+)`, `Local Storage API`.
    *   *Features:* Secure user registration, deposit engines, peer-to-peer balance transfer checking, active history tracking, and security parameters like OTP simulation.

### 📊 Business Intelligence & Sales Dashboards
1.  **Blinkit Sales & Inventory Dashboard** *(Power BI)*
    *   *Key metrics:* Store ratings, location tiers, and inventory Restock thresholds. Built using robust DAX measures and Power Query.
2.  **Amazon Sales Insights Dashboard** *(Power BI Desktop)*
    *   *Key metrics:* Revenue analytics, distribution channels (FBA vs FBM), and B2B client transaction percentages.
3.  **Excel Data Analytics Dashboard** *(Microsoft Excel)*
    *   *Key metrics:* Pivot Tables, nested index-matching, and Power Query ETL pipelines for executive-level reporting.

---

## ⚙️ Customization Guide

If you wish to fork this project and use it as your own template:

### 1. Update the Web3Forms API Key
In `contact.html`, locate the form submission block:
```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
```
Replace the value with your unique token obtained for free from [Web3Forms](https://web3forms.com/).

### 2. Modifying Stats & Information
All personal descriptors, graduation parameters, and profile stats are represented as native elements in the HTML files. Check `index.html` and `about.html` respectively to update names, bios, and timeline increments.

### 3. Modifying Case Study Modal Content
To edit details, features, or links for the project modals, edit the `projectDetails` object in `script.js` (around line 311):
```javascript
const projectDetails = {
  your_project_id: {
    title: "Project Name",
    category: "Full Stack / Data",
    image: "image.png",
    liveLink: "https://your-link.com",
    githubLink: "https://github.com/...",
    tech: ["Tech A", "Tech B"],
    description: "Detailed description here...",
    features: [
      "Feature 1",
      "Feature 2"
    ]
  }
};
```

---

## 📬 Connect with Me

*   **📧 Email:** [ratanchaurasiya61@gmail.com](mailto:ratanchaurasiya61@gmail.com)
*   **📞 Phone:** +91 6390035039
*   **📍 Location:** Uttar Pradesh, India
*   **🔗 LinkedIn:** [/in/ratan-chaurasiya](https://www.linkedin.com/in/ratan-chaurasiya-82288733a)
*   **🐙 GitHub:** [@Ratanchaurasiya](https://github.com/Ratanchaurasiya)
*   **📸 Instagram:** [@ratan_chaurasiya61](https://www.instagram.com/ratan_chaurasiya61)

---
*Copyright © 2025 by Ratan Chaurasiya. All Rights Reserved.*
