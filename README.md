---

# Build a Trello Clone App with Next.js & Supabase

<div align="center">
  <br />
  <a href="https://youtu.be/ugxI1o5SyMs" target="_blank">
   <img width="1280" height="720" alt="Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of Copy of 10,000 REACT COMPONENTS" src="https://github.com/user-attachments/assets/819fc9b5-713e-4fbe-b659-dc1067d4bd82" />

  </a>
  <br />
  <div>
    <img src="https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/-Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
    <img src="https://img.shields.io/badge/-Clerk-0072CE?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" />
    <img src="https://img.shields.io/badge/-@dnd--kit-FAB005?style=for-the-badge&logo=react&logoColor=white" alt="dnd-kit" />
    <img src="https://img.shields.io/badge/-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  </div>
  <h3 align="center">Build a Trello‑Style App with Next.js, Supabase, Clerk & dnd‑kit</h3>
  <div align="center">
    Follow the full video tutorial on  
    <a href="https://youtu.be/YOUR_VIDEO_ID" target="_blank"><b>YouTube</b></a>
  </div>
  <br />
</div>

## 📋 Table of Contents

1. [Introduction](#-introduction)
2. [Tech Stack](#-tech-stack)
3. [Features](#-features)
4. [Quick Start](#-quick-start)
5. [Screenshots](#-screenshots)
6. [Deployment](#-deployment)

---

## 🚀 Introduction

In this tutorial, you’ll learn how to build a production‑ready **Trello‑Style App** using **Next.js**, **Supabase**, **Clerk**, **dnd‑kit**, and **TailwindCSS**. You’ll implement **real‑time data**, **authentication & billing**, **drag‑and‑drop**, and **filtering**, all deployed to Vercel.

🎥 Watch the full tutorial: [YouTube](https://youtu.be/ugxI1o5SyMs)

---

## ⚙️ Tech Stack

* **Next.js** – React framework with file‑based routing & server components
* **Supabase** – Hosted Postgres, real‑time subscriptions & Storage
* **Clerk** – Authentication & subscription billing integration
* **@dnd-kit** – Flexible drag‑and‑drop primitives
* **TailwindCSS** – Utility‑first styling
* **TypeScript** – Static typing and developer tooling

---

## ⚡️ Features

* 📋 **Boards & Columns**
  Create multiple boards and define custom columns.

* ➕ **Dynamic Tasks**
  Add, edit and delete tasks with title, description, assignee, priority & due date.

* 🔄 **Drag & Drop**
  Reorder tasks and move them between columns with smooth animations.

* 📡 **Real‑Time Updates**
  Changes sync instantly across clients via Supabase subscriptions.

* 🔍 **Filtering**
  Filter tasks by priority, due date, and search within a board.

* 🔐 **Auth & Billing**
  Sign up / log in with Clerk and upgrade your plan to create unlimited boards.

* 🚀 **One‑Click Deployment**
  Deploy the app on Vercel with environment variables for Supabase & Clerk.

---

## 👌 Quick Start

### Prerequisites

* [Node.js](https://nodejs.org/) (v16+)
* [Supabase CLI](https://supabase.com/docs/guides/cli)
* Supabase project (URL & ANON key)
* Clerk account (Publishable & Secret keys)

### Clone and Run

```bash
git clone https://github.com/yourusername/trello-clone-next-supabase.git
cd trello-clone-next-supabase
npm install
```

1. Copy `.env.example` to `.env.local` and fill in your Supabase & Clerk credentials.
2. Start local Supabase emulation (optional):

   ```bash
   supabase start
   supabase db push
   ```
3. Run the development server:

   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔗 Useful Links

* [Next.js Docs](https://nextjs.org/docs)
* [Supabase Docs](https://supabase.com/docs)
* [Clerk Docs](https://clerk.com/docs)
* [dnd-kit Docs](https://docs.dndkit.com/)
* [Tailwind CSS Docs](https://tailwindcss.com/docs)
* [Vercel](https://vercel.com/)

---
