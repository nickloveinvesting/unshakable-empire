# Unshakable Empire — Business Accountability App

![Status](https://img.shields.io/badge/status-development-orange)
![Version](https://img.shields.io/badge/version-0.1.0-blue)

The **Unshakable Empire** app is the digital operating system for Dr. Toby Potter's business growth framework. It transforms the "4 Pillars" methodology into an actionable software platform, helping business owners move from accidental growth to intentional scaling through daily protocols, metrics, and accountability systems.

## 🏛️ The 4 Pillars Framework

This application is built around four core pillars essential for scaling a business:

1.  **CEO Command Center (Operating Rhythm)**
    *   *Goal:* Transform the CEO from a firefighter to a strategic leader.
    *   *Mechanism:* Daily scorecards, time audits, and decision filters to ensure the week is predictable.
2.  **Team Architecture (Unshakable Culture)**
    *   *Goal:* Build a team that executes independently without the CEO.
    *   *Mechanism:* Role clarity, performance matrices, and an "Unshakable Culture" where the team solves problems proactively.
3.  **Revenue Pipeline (Predictable Income)**
    *   *Goal:* Turn sales into a predictable, scalable science.
    *   *Mechanism:* Avatar definition, offer ladders, and solution-based sales scripts.
4.  **Conversion Intelligence (Marketing)**
    *   *Goal:* Optimize the buyer journey for maximum ROI.
    *   *Mechanism:* Tracking every stage of the funnel to identify drop-offs and build repeatable closing sequences.

## 🚀 Key Features

*   **Diagnostic Quiz Engine:** A comprehensive 30-question assessment for each pillar to identify gaps and assign a performance band (Critical, Weak, Developing, Strong, Elite).
*   **Scoring & Visualization:** Real-time visual gauges and scorecards (0-100 scale) broken down by sub-categories.
*   **Daily Protocol Dashboard:** A 30-day guided execution plan for each pillar. Users complete daily "Action," "Measure," and "Reflect" tasks.
*   **Progress Tracking:** Visual history of daily streaks and score improvements over time.
*   **User Authentication:** Secure signup and login via Supabase.

## 🛠️ Tech Stack

This project is a modern web application built with:

*   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
*   **State Management:** [Zustand](https://github.com/pmndrs/zustand)
*   **Backend & Auth:** [Supabase](https://supabase.com/)
*   **Visualization:** [Recharts](https://recharts.org/)
*   **Icons:** [Lucide React](https://lucide.dev/)

## 🏁 Getting Started

### Prerequisites

*   Node.js 18+ installed
*   A Supabase project (for Auth/DB)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/nickloveinvesting/unshakable-empire.git
    cd unshakable-empire
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env.local` file in the root directory and add your Supabase credentials:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
.
├── src/                # Application source code
│   ├── app/            # Next.js App Router pages
│   ├── components/     # React components (UI, Dashboard, Quiz)
│   ├── lib/            # Utility functions and Supabase client
│   └── store/          # Zustand state management
├── research/           # Knowledge base & framework documentation
│   ├── four-pillars-app-spec.md  # Technical specification
│   ├── 01-operational-frameworks.md
│   └── ... (Other pillar research files)
├── public/             # Static assets
└── package.json        # Dependencies and scripts
