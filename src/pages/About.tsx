import { Helmet } from "react-helmet-async";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About This Project | React DnD Kit</title>
        <meta
          name="description"
          content="Learn why this project was built, the problems it solves, and how it helps with multi-container drag-and-drop in React using dnd-kit."
        />
        <meta
          name="keywords"
          content="about react project, dnd-kit, react kanban, multi container design"
        />
        <meta
          property="og:title"
          content="About This Project | React DnD Kit"
        />
        <meta
          property="og:description"
          content="Learn why this project was built and how it helps with multi-container drag-and-drop in React."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-6">About This Project</h1>
        <div className="prose dark:prose-invert">
          <p>
            One of the biggest challenges when learning{" "}
            <strong>@dnd-kit</strong> is finding clean, real-world examples —
            especially for <strong>multi-container drag and drop</strong>. Most
            demos and tutorials focus on single-column lists or basic item
            sorting.
          </p>

          <p>
            This project aims to fill that gap by demonstrating how to build a{" "}
            <strong>Kanban-style interface</strong> where items can be:
          </p>

          <ul>
            <li>🧲 Dragged across multiple containers</li>
            <li>📦 Reordered within each container</li>
            <li>🧠 Tracked using normalized data formats</li>
            <li>
              ⚡ Reactively updated during <code>onDragOver</code> and committed
              in <code>onDragEnd</code>
            </li>
          </ul>

          <p>
            This project acts as a bridge between simple list sorting and
            production-grade Kanban boards. It's structured to be both{" "}
            <strong>educational</strong> and <strong>extensible</strong>, with
            clean separation of state, data modeling, and UI.
          </p>

          <p>
            Whether you're building a productivity app, a project planner, or
            just exploring advanced drag-and-drop patterns — I hope this helps
            make the journey smoother.
          </p>
        </div>
      </main>
    </>
  );
}
