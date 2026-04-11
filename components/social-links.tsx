import { cn } from '@/lib/utils';
import { socialLinks, type SocialLink } from '@/config/social';

export function isMailtoUrl(url: string) {
  return url.trimStart().toLowerCase().startsWith('mailto:');
}

type SocialIconLinkProps = {
  link: SocialLink;
  className?: string;
  iconClassName?: string;
};

export function SocialIconLink({
  link,
  className,
  iconClassName = 'h-5 w-5',
}: SocialIconLinkProps) {
  const Icon = link.icon;
  const external = !isMailtoUrl(link.url);

  return (
    <a
      href={link.url}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={link.label}
      className={className}
    >
      <Icon className={iconClassName} />
    </a>
  );
}

const defaultLinkClassName =
  'rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
  linkClassName?: string;
};

export function SocialLinks({
  className,
  iconClassName,
  linkClassName = defaultLinkClassName,
}: SocialLinksProps) {
  return (
    <div className={cn('flex justify-center gap-6', className)}>
      {socialLinks.map((link) => (
        <SocialIconLink
          key={link.name}
          link={link}
          iconClassName={iconClassName}
          className={linkClassName}
        />
      ))}
    </div>
  );
}
