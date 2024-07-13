"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

const MobileNav = () => {
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
    <nav>
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-3xl text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <div className="mt-32 mb-40 text-center text-2xl">
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Victor<span className="text-accent">.</span>
              </h1>
            </Link>
          </div>

          <nav className="flex  flex-col justify-center items-center gap-8">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${
                  link.href === pathName &&
                  "text-accent border-accent border-b-2"
                } text-xl capitalize hover:text-accent-hover transition-all`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
