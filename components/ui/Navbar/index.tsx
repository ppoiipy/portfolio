import Link from "next/link";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/playground", label: "Playground" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
      <Link href="/" className="text-sm font-medium text-white">
        yourname
      </Link>
      <div className="hidden gap-6 text-sm text-gray-400 sm:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}