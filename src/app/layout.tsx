import { ReactNode } from 'react';

import { Providers as ThemeProvider } from '@/contexts/Theme';

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
    <html lang="en">
      <body className="bg-gray-500">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
