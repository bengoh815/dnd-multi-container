# 🧲 Multi-Container Drag and Drop with React, dnd-kit, Tailwind, and shadcn/ui

A modern, minimal example of a **Trello-style Kanban board** built with:

- **React**
- **[dnd-kit](https://github.com/clauderic/dnd-kit)** – lightweight and extensible drag-and-drop toolkit
- **Tailwind CSS**
- **[shadcn/ui](https://ui.shadcn.com/)** – accessible component library for modern UIs

## 🎯 Purpose

Most tutorials on drag-and-drop focus on single lists. This project aims to fill the gap by demonstrating how to:

- Repurpose and simplify the DnD logic for easier learning
- Maintain clean state management using a flat item data model
- Explain design decisions around onDragOver and onDragEnd
- Provide a helpful starting point for devs building interactive boards, task managers, or Trello clones

## 🚀 Live Demo

[Live Demo](https://dnd-multi-container.vercel.app)

## 🧱 Folder Structure

```
src/
├── components/
│   ├── notes/                 # Learning walkthrough components
│   ├── ui/                    # Shadcn-style reusable UI primitives
│   ├── DebugPanel.tsx         # Displays live drag event logs
│   └── DarkToggle.tsx         # Light/dark theme toggle
├── hooks/
│   └── useDarkMode.ts         # Manages theme mode with localStorage
├── pages/
│   ├── DndBasic.tsx           # Main drag-and-drop interface
│   ├── Notes.tsx              # Notes + decisions for learners
│   └── About.tsx              # Project context and purpose
├── lib/
│   └── utils.ts               # Misc helpers
```

## 🛠 Tech Stack

- [React](https://react.dev)
- [dnd-kit](https://dndkit.com/)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Vite](https://vitejs.dev) – for fast dev builds
- TypeScript – strict typing for safety and clarity

## 📦 Getting Started

```bash
# Clone the repo
git clone https://github.com/bengoh815/dnd-multi-container.git
cd dnd-multi-container

# Install dependencies
yarn

# Start the dev server
yarn dev

# Or use npm
npm install
npm run dev
```

## 🧠 What You’ll Learn

- How to structure drag-and-drop items using `containerId`
- When to use `onDragOver` vs `onDragEnd` — and why both matter
- How to organize a clean, reusable component architecture
- How to use `@dnd-kit` effectively in real projects

## ✨ Features (v1)

- ✅ Drag items across containers
- ✅ Sort items within containers
- ✅ Light/dark theme toggle
- ✅ Debug panel for drag event logging
- ✅ Structured and reusable components

## 🤝 Acknowledgements

- Inspired by [Georgegriff’s react-dnd-kit-tailwind-shadcn-ui](https://github.com/Georgegriff/react-dnd-kit-tailwind-shadcn-ui)
- `dnd-kit` by [@clauderic](https://github.com/clauderic)

---

> Contributions, feedback, or stars are appreciated!
