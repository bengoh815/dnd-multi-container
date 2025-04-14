type ProsConsCardProps = {
  title?: string;
  pros: string[];
  cons: string[];
};

export function ProsConsCard({ title, pros, cons }: ProsConsCardProps) {
  return (
    <div className="space-y-4">
      {title && <h3 className="text-lg font-bold">{title}</h3>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {/* Pros */}
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

        {/* Cons */}
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
    </div>
  );
}
