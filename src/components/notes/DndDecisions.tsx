import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ProsConsCard } from "@/components/notes/ProsConsCard";

export default function DndDecision() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">✨ What I Used and Why</CardTitle>
      </CardHeader>

      <CardContent className="prose prose-sm dark:prose-invert max-w-none space-y-4">
        <div>
          <h3 className="mt-2">📊 Data Format: Items Track Their Container</h3>
          <p>
            I chose a flat structure where each item contains a{" "}
            <code>containerId</code>. This made it simple to manage item state,
            especially when integrating with APIs, persisting to a backend, or
            debugging.
          </p>

          <ProsConsCard
            pros={[
              "Easy to loop through and update",
              "Ideal for real-time syncing or normalization",
            ]}
            cons={["Slightly more work for sorting logic (but manageable)"]}
          />
        </div>

        <div>
          <h3>🤖 Algorithm: onDragOver + onDragEnd</h3>
          <p>
            I used both <code>onDragOver</code> and <code>onDragEnd</code> for
            complementary behavior.
          </p>
          <ul>
            <li>
              <strong>onDragOver</strong>: handles real-time container
              switching. When an item hovers over a different container (or an
              item in another container), its <code>containerId</code> updates
              immediately. This keeps the UI fluid and responsive.
            </li>
            <li>
              <strong>onDragEnd</strong>: handles final sort order. Once the
              user drops the item, I update the array using{" "}
              <code>arrayMove</code> to reflect the new order within the list.
            </li>
          </ul>
        </div>

        <p>
          ✨ This gave me both interactivity and control over when the final
          state commits. It's beginner-friendly while feeling polished.
        </p>
      </CardContent>
    </Card>
  );
}
