import { SocialLinks } from '@/components/social-links';

export default function Footer() {
  return (
    <footer className='border-t border-border bg-muted/50'>
      <div className='container-section py-8'>
        <SocialLinks iconClassName='h-5 w-5' />

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
