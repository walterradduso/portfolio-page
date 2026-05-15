import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/icons';
import { profile, socialLinks } from '@/data/profile';

const iconMap = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  twitter: TwitterIcon,
} as const;

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border bg-background mt-24 border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-muted-foreground text-sm">
          © {year} {profile.name}.
        </p>

        <ul className="flex items-center gap-1" role="list">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];

            return (
              <li key={link.label}>
                <a
                  aria-label={link.label}
                  className="text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:ring-ring focus-visible:ring-offset-background inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
