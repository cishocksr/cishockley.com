import { socialLinks } from '@/config/social';

export default function Footer() {
  return (
    <footer className='border-t border-border bg-muted/50'>
      <div className='container-section py-8'>
        <div className='flex justify-center gap-6'>
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={link.label}
                className='text-muted-foreground transition-colors hover:text-foreground'
              >
                <Icon className='h-5 w-5' />
              </a>
            );
          })}
        </div>

        <p className='mt-3 text-center text-xs text-muted-foreground/60'>
          Built with Next.js &amp; Velite
        </p>
        <p className='mt-1 text-center text-sm text-muted-foreground'>
          &copy; {new Date().getFullYear()} Chris Shockley
        </p>
      </div>
    </footer>
  );
}
