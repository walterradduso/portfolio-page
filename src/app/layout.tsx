import { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';

import { profile } from '@/data/profile';
import { Providers as ThemeProvider } from '@/contexts/Theme';

import { archivo, spaceGrotesk } from './fonts';

import '@/styles/globals.css';

const siteUrl = profile.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description:
    'Senior Frontend Engineer & Tech Lead with 9+ years building production React apps for fintechs and marketplaces (Nullplatform, Deel, Mercado Libre). React · Next.js · TypeScript.',
  applicationName: `${profile.name} — Portfolio`,
  keywords: [
    'Senior Frontend Engineer',
    'Frontend Tech Lead',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Web Developer',
    'Micro-frontends',
    'Walter Radduso',
    'Frontend Architect',
    'Portfolio',
    'Hire frontend engineer',
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — ${profile.role}`,
    description:
      '9+ years shipping production React apps for fintechs and marketplaces. React · Next.js · TypeScript. Open to senior roles.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.role}`,
    description: '9+ years shipping production React apps for fintechs and marketplaces. React · Next.js · TypeScript.',
    creator: '@walterradduso',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning className={`${archivo.variable} ${spaceGrotesk.variable}`} lang="en">
      <body className="bg-background text-foreground min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
