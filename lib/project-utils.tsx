export function getStatusBadge(
  status: 'planning' | 'in-progress' | 'completed'
) {
  switch (status) {
    case 'planning':
      return (
        <span className="inline-flex rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
          Planning
        </span>
      );
    case 'in-progress':
      return (
        <span className="inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-600 dark:text-blue-400">
          In Progress
        </span>
      );
    case 'completed':
      return (
        <span className="inline-flex rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-600 dark:text-green-400">
          Completed
        </span>
      );
  }
}
