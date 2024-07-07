"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const Nav = () => {
  const links: {
    name: string;
    href: string;
  }[] = useMemo(() => {
    return [
      { name: "Inicio", href: "/" },
      { name: "Serviços", href: "/services" },
      { name: "Resumo", href: "/resume" },
      { name: "Trabalho", href: "/work" },
      { name: "Contato", href: "/contact" },
    ];
  }, []);
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${
            link.href === pathName && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
