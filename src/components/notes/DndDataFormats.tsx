import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function ProsConsCard({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
      <div className="rounded-lg border border-green-300 bg-green-50 dark:bg-green-950 p-4">
        <h4 className="text-green-700 dark:text-green-300 font-semibold mb-2">
          ✅ Pros
        </h4>
        <div className="space-y-1 text-sm text-green-800 dark:text-green-200">
          {pros.map((text, idx) => (
            <p key={idx}>- {text}</p>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-red-300 bg-red-50 dark:bg-red-950 p-4">
        <h4 className="text-red-700 dark:text-red-300 font-semibold mb-2">
          ❌ Cons
        </h4>
        <div className="space-y-1 text-sm text-red-800 dark:text-red-200">
          {cons.map((text, idx) => (
            <p key={idx}>- {text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DndDataFormats() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>📦 Data Format Options</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
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

          <div>
            <h4 className="font-semibold text-base">
              Option 2: Containers Track Item Order
            </h4>
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

          <div>
            <h4 className="font-semibold text-base">
              Option 3: Redundant (Both)
            </h4>
            <p className="text-sm">
              Store <code>item.containerId</code> <strong>and</strong> maintain
              an array of item IDs in each container.
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
        </CardContent>
      </Card>
    </div>
  );
}
