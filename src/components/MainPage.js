'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

function MainPage({ children }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <main className={`${!isHome ? 'pt-[40px]' : ''}`}>
      {children}
    </main>
  );
}

export default MainPage;
