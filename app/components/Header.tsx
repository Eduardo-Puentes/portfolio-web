'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4 sm:w-full w-6/10">
        <Link href="/">
          Eduardo Puentes
        </Link>
        <nav className="flex space-x-4 justify-end">
          <Link href="/#about">About</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
          <Link href="/resume">Resume</Link>
        </nav>
      </div>
    </header>
  );
}