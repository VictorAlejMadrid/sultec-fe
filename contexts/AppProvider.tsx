'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from './ThemeProvider';

export function AppProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
