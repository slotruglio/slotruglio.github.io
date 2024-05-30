import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { i18n, type Locale } from '../../i18n-config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Samuele Lo Truglio - Website',
  description: 'Personal website of Samuele Lo Truglio',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
