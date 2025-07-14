import Link from 'next/link';
import { Code, Github, Linkedin } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/pavelray', icon: <Github className="h-5 w-5" /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/pavelray/', icon: <Linkedin className="h-5 w-5" /> },
  ];
  return (
    <footer className="bg-secondary">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <div className="flex items-center">
          <Code className="h-6 w-6 text-primary" />
          <span className="ml-2 text-sm font-semibold">Pavel Ray</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Pavel Ray. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <span className="sr-only">{link.name}</span>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
