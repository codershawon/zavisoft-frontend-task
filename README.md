# KICKS - Next.js E-Commerce Storefront
A high-performance, responsive e-commerce frontend that demonstrates modern React architecture, dynamic routing, and advanced UI/UX

**[Live Demo]** `[https://zavisoft-frontend-task-one.vercel.app]`  
**[Repository]** `[https://github.com/codershawon/zavisoft-frontend-task.git]`

## Project Preview

<img width="1920" height="4684" alt="Zavisoft-Frontend-Task-02-23-2026_10_36_PM" src="https://github.com/user-attachments/assets/3adcfd7d-4998-48d8-bf69-a427099e7f9c" />
<img width="1920" height="2629" alt="Zavisoft-Frontend-Task-02-23-2026_10_41_PM" src="https://github.com/user-attachments/assets/f011c3e9-b773-47aa-b989-4e55326a6be2" />

---

## 🎯 Overview

KICKS is a modern e-commerce web application built to showcase production-ready frontend development. The project consumes a RESTful API to render dynamic product catalogs, featuring complex responsive layouts, optimized image handling, and interactive UI components. 

The primary goal of this project was to prioritize **code modularity**, **reusability**, and **performance** while maintaining a pixel-perfect translation from UI design to code.

## 🚀 Core Features

* **Dynamic Product Details Pages (PDP):** Utilizes Next.js App Router (`/products/[id]`) for dynamic, SEO-friendly product pages.
* **Advanced Carousels:** Implements Swiper JS to handle complex responsive behaviors (e.g., seamlessly transitioning from a static 2x2 grid on mobile to a fluid horizontal carousel on desktop).
* **Robust Form Handling:** Newsletter subscription integrated with `react-hook-form` for strict client-side validation and state management.
* **Data-Driven Architecture:** Global layout elements (like the Footer and Navigation) are powered by configuration arrays, making future marketing updates scalable.
* **Interactive UI:** Fully functional size/color selectors with active, default, and out-of-stock UI states.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js (App Router), React 18 |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Components** | Swiper JS, React Icons |
| **Forms** | React Hook Form |
| **Data Fetching** | Native `fetch` / Axios Custom Instances |

---

## 🧠 Engineering Challenges & Solutions

To demonstrate my approach to real-world development roadblocks, here are a few key challenges solved during this build:

### 1. Over-Fetching & Hook Reusability
**Challenge:** Initially, the homepage and the "Related Products" slider shared a single data-fetching hook, leading to unnecessary bandwidth consumption if one component needed 4 items but the other needed 10.
**Solution:** Refactored the data layer to utilize a highly modular custom hook (`useProducts({ limit, offset })`). This allows distinct components to dynamically request exact payload sizes, optimizing network requests and keeping the hook globally reusable.

### 2. Unreliable External API Images
**Challenge:** The external Fake Store API aggregates images from unpredictable domains (e.g., Imgur, Pinterest), causing Next.js Image Optimization to throw `500 Internal Server` and `504 Gateway Timeout` errors on dead links.
**Solution:** Bypassed native Next.js optimization for unknown domains using the `unoptimized={true}` flag and implemented a resilient `onError` fallback state. If an API image is broken, the UI instantly swaps to a branded placeholder without crashing the application.

### 3. Complex Responsive Layout Shifts
**Challenge:** The UI design required a "Related Products" section that rendered as a 2x2 stacked grid on mobile, but a 1-row horizontal slider on desktop. Swiper JS does not allow dynamic grid-to-slider row changes without breaking the DOM.
**Solution:** Rendered two distinct, optimized Swiper instances utilizing Tailwind's responsive display classes (`md:hidden` and `hidden md:block`). This guaranteed perfect layout stability across all breakpoints without writing heavy JavaScript window-resize listeners.

---

## 💻 Getting Started

To run this project locally, follow these steps:

**1. Clone the repository**
```bash
git clone [https://github.com/codershawon/zavisoft-frontend-task.git]
cd zavisoft-frontend-task

2. Install dependencies

Bash
npm install
3. Run the development server

Bash
npm run dev

4. Open the application
Navigate to http://localhost:3000 in your browser.

📁 Folder Structure Highlight
Plaintext
src/
├── app/                  # Next.js App Router pages (Dynamic routes)
├── assets/               # Static images and brand assets
├── components/
│   ├── layout/           # Global Footer, Navbar
│   ├── product/          # Modular PDP components (Gallery, Info, Cards)
│   └── ui/               # Reusable base elements (Loaders, Error States)
├── hooks/                # Custom data fetching logic (useProduct, useProducts)
└── services/             # API configuration and interceptors

👨‍💻 Author
[Shawon Barua]

Frontend Web Developer

LinkedIn: [https://www.linkedin.com/in/dev-shawon/]

Portfolio: [https://shawonbarua.netlify.app]

