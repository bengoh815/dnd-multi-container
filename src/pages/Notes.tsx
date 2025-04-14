import { ProsConsCard } from "@/components/notes/ProsConsCard";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";

function AlgoSection({
  label,
  pros,
  cons,
}: {
  label: string;
  pros: string[];
  cons: string[];
}) {
  return (
    <section className="space-y-4">
      <Badge className="px-3 py-1 text-xs sm:text-sm font-medium">
        {label}
      </Badge>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="rounded-lg border border-green-300 bg-green-50 dark:bg-green-950 p-4">
          <h4 className="text-green-700 dark:text-green-300 font-semibold mb-2">
            ✅ Pros
          </h4>
          <div className="space-y-1 text-sm text-green-800 dark:text-green-200">
            {pros.map((p, i) => (
              <p key={i}>- {p}</p>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-red-300 bg-red-50 dark:bg-red-950 p-4">
          <h4 className="text-red-700 dark:text-red-300 font-semibold mb-2">
            ❌ Cons
          </h4>
          <div className="space-y-1 text-sm text-red-800 dark:text-red-200">
            {cons.map((c, i) => (
              <p key={i}>- {c}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Notes() {
  return (
    <>
      <Helmet>
        <title>Notes | dnd-kit Drag & Drop Design Patterns</title>
        <meta
          name="description"
          content="A step-by-step walkthrough of how multi-container drag-and-drop works using dnd-kit in React. Learn about data modeling, algorithms, and design decisions."
        />
        <meta
          name="keywords"
          content="dnd-kit notes, react drag and drop, multi container drag and drop, drag-and-drop design, frontend architecture"
        />
        <meta
          property="og:title"
          content="Notes on dnd-kit | React Drag and Drop Guide"
        />
        <meta
          property="og:description"
          content="Detailed notes and decisions behind implementing multi-container drag-and-drop in React with dnd-kit."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <h1 className="text-2xl font-bold mb-4 text-center">
        Notes and Design Decisions for Multi-Container Drag and Drop
      </h1>
      <Accordion
        type="multiple"
        defaultValue={["concepts", "data-formats", "algorithm"]}
        className="max-w-3xl mx-auto space-y-6"
      >
        <AccordionItem value="concepts">
          <AccordionTrigger className="bg-muted hover:bg-muted/50 rounded-md px-4 py-2 transition-colors">
            <h2 className="text-2xl font-bold ">
              📚 Core Concepts Behind the Code{" "}
            </h2>
          </AccordionTrigger>
          <AccordionContent className="text-l space-y-4 mt-2">
            <div>
              <h3 className="font-semibold">🧠 DndContext</h3>
              <p>
                The root provider from <code>@dnd-kit</code> that manages the
                drag-and-drop lifecycle — including <code>onDragStart</code>,{" "}
                <code>onDragOver</code>, <code>onDragEnd</code>, and more. All
                drag-enabled components must be rendered within it.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">📦 SortableContext</h3>
              <p>
                Registers items as sortable within a given list. You define{" "}
                <code>items</code> and a sorting
                <code> strategy</code>. It's scoped per container to allow
                independent sorting logic.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">👻 DragOverlay</h3>
              <p>
                Used to render a ghost preview that follows the cursor while
                dragging. Improves UX by not removing the original item from the
                DOM.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">📦 arrayMove</h3>
              <p>
                Helper from dnd-kit to reorder arrays immutably. You provide the
                old and new indexes, and it returns the new array.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">🎯 useSortable & useDroppable</h3>
              <p>
                <code>useSortable</code> enhances items with drag handles,
                transforms, and listeners.
                <code> useDroppable</code> enables containers to register drop
                targets with the context.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="data-formats">
          <AccordionTrigger className="bg-muted hover:bg-muted/50 rounded-md px-4 py-2 transition-colors">
            <h2 className="text-xl font-bold">📦 Data Format Options</h2>
          </AccordionTrigger>
          <AccordionContent className="space-y-8 pt-4">
            {/* Option 1 */}
            <div>
              <h3 className="font-semibold text-base">
                Option 1: Items Track Container
              </h3>
              <pre className="bg-muted p-2 rounded text-sm overflow-x-auto">{`items = {
  "1": { id: "1", content: "Do this", containerId: "A" },
  "2": { id: "2", content: "Do that", containerId: "B" },
}`}</pre>
              <ProsConsCard
                pros={[
                  "Flat structure, easy to update or scan",
                  "Works well with APIs or databases",
                ]}
                cons={[
                  "Reordering within a container requires filtering and manual sorting logic",
                ]}
              />
            </div>

            {/* Option 2 */}
            <div>
              <h3 className="font-semibold text-base">
                Option 2: Containers Track Item Order
              </h3>
              <pre className="bg-muted p-2 rounded text-sm overflow-x-auto">{`containers = {
  "A": ["1", "3"],
  "B": ["2"]
};

items = {
  "1": { id: "1", content: "Do this" },
  "2": { id: "2", content: "Do that" },
  "3": { id: "3", content: "Maybe this" },
};`}</pre>
              <ProsConsCard
                pros={[
                  "Great for sortable UIs (e.g. Kanban boards)",
                  "Allows direct control over item order",
                ]}
                cons={[
                  "Requires syncing between item and container maps",
                  "Two-step lookup: container → item IDs → item data",
                ]}
              />
            </div>

            {/* Option 3 */}
            <div>
              <h3 className="font-semibold text-base">
                Option 3: Redundant (Both)
              </h3>
              <p className="text-sm">
                Store <code>item.containerId</code> <strong>and</strong>{" "}
                maintain an array of item IDs in each container.
              </p>
              <ProsConsCard
                pros={[
                  "Fast lookups both ways",
                  "Preserves both container order and per-item tracking",
                ]}
                cons={[
                  "Risk of duplicated data and inconsistency",
                  "Must manually keep both in sync",
                ]}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="algorithm">
          <AccordionTrigger className="bg-muted hover:bg-muted/50 rounded-md px-4 py-2 transition-colors">
            <h2 className="text-xl font-bold">⚙️ Algorithm Considerations</h2>
          </AccordionTrigger>
          <AccordionContent className="space-y-10 pt-4">
            <AlgoSection
              label="onDragOver"
              pros={[
                "Real-time UI feedback",
                "See ghost previews or hovering logic",
                'Items "bump" each other during drag',
                "Feels responsive and interactive",
              ]}
              cons={["Frequent state updates, may affect performance"]}
            />
            <AlgoSection
              label="onDragEnd"
              pros={[
                "Simple state commit after drag ends",
                "Prevents intermediate reorders",
                "Better for large datasets",
                "Avoids unnecessary renders",
              ]}
              cons={["UI doesn’t reflect change until drop"]}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="decisions">
          <AccordionTrigger className="bg-muted hover:bg-muted/50 rounded-md px-4 py-2 transition-colors">
            <h2 className="text-xl font-bold">✨ What I Used and Why</h2>
          </AccordionTrigger>
          <AccordionContent className="space-y-8 pt-4">
            {/* Data Format Decision */}
            <div>
              <h3 className="font-semibold text-base">
                📊 Data Format: Items Track Their Container
              </h3>
              <p>
                I chose a flat structure where each item contains a{" "}
                <code>containerId</code>. This made it simple to manage item
                state, especially when integrating with APIs, persisting to a
                backend, or debugging.
              </p>

              <ProsConsCard
                pros={[
                  "Easy to loop through and update",
                  "Ideal for real-time syncing or normalization",
                ]}
                cons={["Slightly more work for sorting logic (but manageable)"]}
              />
            </div>

            {/* Algorithm Strategy Decision */}
            <div>
              <h3 className="font-semibold text-base">
                🤖 Algorithm: onDragOver + onDragEnd
              </h3>
              <p>
                I used both <code>onDragOver</code> and <code>onDragEnd</code>{" "}
                for complementary behavior.
              </p>
              <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                <li>
                  <strong>onDragOver</strong>: handles real-time container
                  switching. When an item hovers over a different container (or
                  an item in another container), its <code>containerId</code>
                  updates immediately. This keeps the UI fluid and responsive.
                </li>
                <li>
                  <strong>onDragEnd</strong>: handles final sort order. Once the
                  user drops the item, I update the array using{" "}
                  <code>arrayMove</code> to reflect the new order within the
                  list.
                </li>
              </ul>
            </div>

            <p className="text-sm">
              ✨ This gave me both interactivity and control over when the final
              state commits. It’s beginner-friendly while feeling polished.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
