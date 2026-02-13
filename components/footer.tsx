import { socialLinks } from '@/lib/config/social';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container-section py-8">
        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                href={link.url}
                key={link.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Chris Shockley. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
