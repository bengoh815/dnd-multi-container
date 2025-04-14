import { Button } from "@/components/ui/button";
import { useDarkMode } from "@/hooks/useDarkMode";

export function DarkToggle() {
  const { isDark, toggle } = useDarkMode();

  return (
    <Button variant="outline" onClick={toggle}>
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </Button>
  );
}
