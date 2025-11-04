import { ReactNode } from 'react';

export default function Header({ children }: { children: ReactNode }) {
  return (
    <header className="w-full flex justify-between items-center py-6 px-4 md:px-8 border-b border-gray-800">
      {children}
    </header>
  );
}
