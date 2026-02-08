export function getStatusBadge(
  status: 'planning' | 'in-progress' | 'completed'
) {
  switch (status) {
    case 'planning':
      return (
        <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
          Planning
        </span>
      );
    case 'in-progress':
      return (
        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          In Progress
        </span>
      );
    case 'completed':
      return (
        <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/40 dark:text-green-300">
          Completed
        </span>
      );
  }
}
