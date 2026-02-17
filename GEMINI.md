# GEMINI Context: Portfolio Dossier

This file provides instructional context for AI interactions within this project.

## Project Overview
A high-performance personal portfolio website built with **Next.js 16** and **React 19**. The project features a unique aesthetic fusion of **Swiss Typographic Minimalism** and **90s Cyberpunk/Retro-Anime** (specifically inspired by *Neon Genesis Evangelion* and *Ghost in the Shell*). It is designed as a "Technical Terminal Interface."

### Core Technologies
- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (used for glitch effects, boot sequences, and HUD elements)
- **Icons:** Lucide React
- **Email:** Resend API (integrated via `src/app/api/send/route.ts`)
- **Utilities:** `clsx`, `tailwind-merge` (via `src/lib/utils.ts`)

## Architecture & Conventions

### Directory Structure
- `src/app/`: Contains the application routes, layouts, and API endpoints.
    - `layout.tsx`: Root layout with background images, CRT overlays, and font configurations (Inter & JetBrains Mono).
    - `page.tsx`: The main landing page comprising multiple sections (Hero, About, Skills, Experience, Projects, Education, Contact).
    - `api/send/`: Backend route for handling contact form submissions via Resend.
- `src/components/`: Reusable UI components.
    - `TerminalFrame.tsx`: The primary wrapper component that provides the "HUD" (Heads-Up Display) effect, including real-time synchronization with Bogota (COT) time.
    - `ProjectCard.tsx`, `SectionHeader.tsx`, `ContactForm.tsx`: Section-specific components.
- `src/lib/`: Shared utility functions (e.g., `cn` for Tailwind class merging).
- `public/`: Static assets, including themed images in `public/images/`.

### Design System (Tailwind CSS v4)
The project uses custom theme colors defined in the CSS configuration (likely `globals.css` or Tailwind's v4 automatic detection):
- `cyber-purple`: Primary accent (#A855F7)
- `cyber-green`: Success/Secondary accent (#52d053)
- `cyber-alert`: Glitch/Highlight accent (#ff00ff)
- `cyber-border`: HUD/Terminal lines
- `cyber-text`: Terminal-style text

### Development Patterns
- **Client Components:** Extensive use of `"use client"` for Framer Motion animations and state-driven UI (e.g., the boot sequence).
- **Responsive HUD:** The `TerminalFrame` adjusts padding and visibility of HUD elements based on screen size.
- **Performance:** Background images are optimized using `next/image` with specific priority and quality settings to maintain high performance despite the complex visual overlays.

## Building and Running

### Key Commands
- `npm run dev`: Starts the development server at `http://localhost:3000`.
- `npm run build`: Generates a production-ready build.
- `npm run start`: Runs the built application in production mode.
- `npm run lint`: Executes ESLint for code quality checks.

### Environment Configuration
The project requires a `.env.local` file for production features:
- `RESEND_API_KEY`: Required for the contact form functionality.

## Development Checklist for AI
- **Style Consistency:** Maintain the "Technical/Military" naming convention for HUD elements (e.g., `FILE_01_MVP`, `Synchronized_Protocol`).
- **Animations:** When adding new components, consider adding subtle Framer Motion transitions to match the existing "boot-up" and "glitch" feel.
- **Type Safety:** The project uses TypeScript. Ensure all new components and props are strictly typed.
- **Accessibility:** Despite the heavy styling, ensure the main content remains accessible.
