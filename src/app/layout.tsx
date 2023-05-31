import { Analytics } from '@vercel/analytics/react';
import { ReactNode } from 'react';

import { Providers as ThemeProvider } from '@/contexts/Theme';

import { poppins } from './fonts';

import '@/styles/globals.css';

export const metadata = {
  title: 'Walter Radduso - Personal Portfolio',
  description: "Walter Radduso's personal portfolio.",
  icons: {
    icon: './favicon.ico',
  },
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html className={poppins.variable} lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
