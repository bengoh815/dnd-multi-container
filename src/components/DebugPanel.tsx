export function DebugPanel({ logs }: { logs: string[] }) {
  return (
    <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 text-sm rounded max-h-60 overflow-y-auto font-mono border border-gray-200 dark:border-gray-700">
      <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">
        Debug Console
      </h3>
      {logs.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No logs yet</p>
      ) : (
        [...logs].reverse().map((log, idx) => (
          <div key={idx} className="text-gray-800 dark:text-gray-200">
            - {log}
          </div>
        ))
      )}
    </div>
  );
}
