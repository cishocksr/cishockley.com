import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="border-t bg-zinc-950 dark:bg-zinc-950">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/cishocksr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/christopherishockley"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:cishocksr@cishockley.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <FaEnvelope className="h-5 w-5" />
          </a>
        </div>

        <div className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} Chris Shockley. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
