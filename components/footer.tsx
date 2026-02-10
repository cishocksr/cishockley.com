<<<<<<< HEAD
import { socialLinks } from '@/lib/config/social';

=======
import { socialLinks } from "@/config/site";
>>>>>>> 3201d94 (ref: made sitegofig. removed hardcoded soical and email)
export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container-section py-8">
        <div className="flex justify-center gap-6">
<<<<<<< HEAD
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
=======
          {
            socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })

          }
>>>>>>> 3201d94 (ref: made sitegofig. removed hardcoded soical and email)
        </div>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Chris Shockley. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
