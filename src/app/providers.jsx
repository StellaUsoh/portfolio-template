'use client';

import { createContext, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from 'next-themes';

function usePrevious(value) {
  let ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export const AppContext = createContext({});

export function Providers({ children }) {
  let pathname = usePathname();
  let previousPathname = usePrevious(pathname);

  return (
    <AppContext.Provider value={{ previousPathname }}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
}
