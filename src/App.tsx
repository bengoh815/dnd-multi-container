import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useDarkMode } from "@/hooks/useDarkMode";
import DndBasic from "./pages/DndBasic";
import Notes from "./pages/Notes";
import AboutPage from "./pages/About";
import { Github } from "lucide-react";

const GITHUB_URL = "https://github.com/bengoh815/dnd-multi-container";

export default function App() {
  const PATHS = {
    HOME: "/",
    ABOUT: "/about",
    NOTES: "/notes",
  };

  const { isDark, toggle } = useDarkMode();

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground transition-colors">
        <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 border-b bg-muted/50 backdrop-blur supports-[backdrop-filter]:bg-muted/30">
          <nav className="space-x-4 font-medium text-sm">
            <Link to={PATHS.HOME} className="hover:underline">
              Home
            </Link>
            <Link to={PATHS.NOTES} className="hover:underline">
              Notes
            </Link>
            <Link to={PATHS.ABOUT} className="hover:underline">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={toggle}>
              {isDark ? "🌙 Dark" : "☀️ Light"}
            </Button>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:underline text-m font-semibold"
            >
              <Github className="w-4 h-4" />
              Source
            </a>
          </div>
        </header>

        <main className="p-6">
          <Routes>
            <Route path={PATHS.HOME} element={<DndBasic />} />
            <Route path={PATHS.ABOUT} element={<AboutPage />} />
            <Route path={PATHS.NOTES} element={<Notes />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
