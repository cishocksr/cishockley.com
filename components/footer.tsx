import { socialLinks } from "@/config/site";
export default function Footer() {
  return (
    <footer className="border-t bg-zinc-950 dark:bg-zinc-950">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center gap-6">
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
        </div>

        <div className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} Chris Shockley. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
