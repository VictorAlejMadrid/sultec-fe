import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { AppProvider } from '@/contexts/AppProvider';
import Header from '@/components/Header';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Sultec',
  description: 'Create by Victor Madrid',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center w-screen h-screen `}
      >
        <AppProvider>
          <Header />
          <main className="flex flex-1 h-[70%] w-[650px]">{children}</main>
        </AppProvider>
      </body>
    </html>
  );
}
