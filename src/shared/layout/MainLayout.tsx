// src/shared/components/Layout.tsx
import { ReactNode } from "react";
import Navbar from "./Navbar";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-900 text-black  dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="p-4">{children}</main>
    </div>
  );
}
