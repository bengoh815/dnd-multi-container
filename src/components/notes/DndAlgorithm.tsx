import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";

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
    <div>
      <Badge className="px-3 py-1 text-xs sm:text-sm font-medium">
        {label}
      </Badge>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
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
    </div>
  );
}

export default function DndAlgorithm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">⚙️ Algorithm</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
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
      </CardContent>
    </Card>
  );
}
