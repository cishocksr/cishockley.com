export function getStatusBadge(
  status: 'planning' | 'in-progress' | 'completed',
) {
  switch (status) {
    case 'planning':
      return (
        <span className='inline-flex rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground'>
          Planning
        </span>
      );
    case 'in-progress':
      return (
        <span className='inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs text-primary'>
          In Progress
        </span>
      );
    case 'completed':
      return (
        <span className='inline-flex rounded-full bg-[var(--success)] px-3 py-1 text-xs text-[var(--success-foreground)]'>
          Completed
        </span>
      );
  }
}
