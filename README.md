# CS — Ticket System

A modern, responsive **customer support ticket management dashboard** built with React.  
Users can view incoming customer tickets, start working on them (move to In-Progress), mark them as resolved, and track real-time task status with beautiful visual cards and toast notifications.

![Dashboard Overview](support-ticket-screenshort.png)  

## 🚀 Live Demo
- **[Netlify](https://customer-support-zone-one.netlify.app/)**
- **[CloudFlare](https://customer-support-zone-one.pages.dev/)**

## Technologies Used
- React (v19) — Component-based UI & state management
- Vite — Lightning-fast build tool & dev server
- Tailwind CSS + DaisyUI — Utility-first styling & beautiful components
- React Toastify — User-friendly toast notifications
- JSON Fetch — Async data loading with Suspense + fallback loading spinner
- Modern JavaScript (ES6+), Hooks (`useState`, Suspense, etc.)

## Core Features
- View list of open customer support tickets with full details (title, description, priority, status, customer, created date)
- Click a ticket to move it to **In-Progress** status
- Mark in-progress tasks as **Complete** → moves to Resolved section
- Real-time visual counters: In-Progress & Resolved ticket counts with gradient cards
- Color-coded priority & status badges (High / Medium / Low, Open / In-Progress / Resolved)
- Loading state with animated spinner using React Suspense
- Fully responsive design (mobile, tablet, desktop)
- Clean navbar + professional footer with social links
- Toast notifications for every status change
- Sample ticket data loaded from `Customer_Ticket.json`

## Dependencies
Main runtime dependencies (see `package.json` for full list):
- react & react-dom
- tailwindcss + daisyui
- react-toastify
- vite (build & dev tool)

Pure frontend project — no backend required.

## ⚡ How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/RazulBR/REACT_ASSIGNMENT_B12A07.git
   cd REACT_ASSIGNMENT_B12A07
```
---
### 2. Install dependencies

```bash
npm install
```
---

### 3. Start the project

```bash
npm run dev
```
---

### 4. Open in browser

```bash
Go to http://localhost:5173 (or the port shown in your terminal)
```
---

## 🧑‍💻 Author

**MD REAZUL HASAN**

[GitHub Profile](https://github.com/Reazul87)

---

## 📜 License

This project is licensed under the **MIT License** — free to use and modify.

---
