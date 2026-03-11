import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { ReactNode } from 'react';

import { Providers as ThemeProvider } from '@/contexts/Theme';

import { poppins } from './fonts';

import '@/styles/globals.css';

const siteUrl = 'https://walterradduso.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Walter Radduso - Frontend Engineer | Personal Portfolio',
  description:
    'Frontend Engineer specializing in React, Next.js, and TypeScript. Explore my projects, skills, and professional experience in web development.',
  keywords: ['Frontend Engineer', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Web Developer', 'Walter Radduso', 'Portfolio'],
  authors: [{ name: 'Walter Radduso', url: siteUrl }],
  creator: 'Walter Radduso',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Walter Radduso - Portfolio',
    title: 'Walter Radduso - Frontend Engineer',
    description:
      'Frontend Engineer specializing in React, Next.js, and TypeScript. Explore my projects, skills, and professional experience.',
    images: [
      {
        url: '/images/walPic.jpeg',
        width: 400,
        height: 400,
        alt: 'Walter Radduso',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Walter Radduso - Frontend Engineer',
    description: 'Frontend Engineer specializing in React, Next.js, and TypeScript.',
    creator: '@walterradduso',
    images: ['/images/walPic.jpeg'],
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

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning className={poppins.variable} lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
