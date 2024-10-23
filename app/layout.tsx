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
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center`}
      >
        <AppProvider>
          <Header />
          <main className="mt-[20px] flex flex-1 max-h-[calc(100vh-100px)] min-h-96 w-[650px] m-4">
            {children}
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
