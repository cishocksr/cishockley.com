export function getStatusBadge(
  status: 'planning' | 'in-progress' | 'completed'
) {
  switch (status) {
    case 'planning':
      return (
        <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-900 dark:text-gray-200">
          Planning
        </span>
      );
    case 'in-progress':
      return (
        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-900 dark:text-blue-200">
          In Progress
        </span>
      );
    case 'completed':
      return (
        <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs text-green-900 dark:text-green-200">
          Completed
        </span>
      );
  }
}
