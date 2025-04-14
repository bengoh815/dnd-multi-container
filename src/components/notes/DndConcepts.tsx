import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DndConcepts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">📘 Core Concepts</CardTitle>
      </CardHeader>
      <CardContent className="prose prose-sm dark:prose-invert max-w-none space-y-6">
        <div>
          <h3>
            🧩 What is <code>useSortable</code>?
          </h3>
          <p>
            <code>useSortable</code> is a hook from <strong>dnd-kit</strong>{" "}
            that handles the drag-and-drop lifecycle for individual items. It:
          </p>
          <ul>
            <li>Attaches event listeners for dragging</li>
            <li>Handles motion (transform, transition)</li>
            <li>Generates accessibility attributes</li>
            <li>Returns `setNodeRef` to bind to the item</li>
          </ul>
        </div>

        <div>
          <h3>
            🏗 Why model items with <code>containerId</code>?
          </h3>
          <p>
            Keeping <code>containerId</code> on each item creates a flat
            structure that is easier to update, normalize, and debug. It
            simplifies:
          </p>
          <ul>
            <li>Reordering logic</li>
            <li>API or database syncs</li>
            <li>Tracking what item belongs where</li>
          </ul>
        </div>

        <div>
          <h3>📦 Flat vs Nested Containers</h3>
          <p>
            A flat model (one item list with containerId references) avoids
            deeply nested state trees and lets you iterate over all items
            easily.
          </p>
        </div>

        <div>
          <h3>🎯 Managing Drag State</h3>
          <p>
            Drag-related state like <code>activeId</code> helps track which item
            is being dragged, render ghost overlays, and enable conditional
            logic during drag.
          </p>
        </div>

        <div>
          <h3>
            ⚙️ When to Use <code>onDragOver</code> vs <code>onDragEnd</code>
          </h3>
          <ul>
            <li>
              <strong>onDragOver</strong>: Best for live feedback and updating
              things mid-drag (e.g., moving items across containers).
            </li>
            <li>
              <strong>onDragEnd</strong>: Use this for finalizing the
              position/order after a drop.
            </li>
          </ul>
          <p>
            Combining both gives you responsive interactions and stable
            end-state updates.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
