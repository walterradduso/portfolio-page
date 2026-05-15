import { Archivo } from 'next/font/google';

export const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-archivo',
});
