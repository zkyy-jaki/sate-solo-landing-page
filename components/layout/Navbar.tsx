"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    label: "Beranda",
    href: "#home",
  },
  {
    label: "Tentang",
    href: "#about",
  },
  {
    label: "Menu",
    href: "#menu",
  },
  {
    label: "Galeri",
    href: "#gallery",
  },
  {
    label: "Lokasi",
    href: "#location",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((previousState) => !previousState);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <Container>
        <nav
          className="flex h-20 items-center justify-between"
          aria-label="Navigasi utama"
        >
          <Link
            href="#home"
            className="font-heading text-2xl font-semibold text-primary"
            onClick={closeMenu}
          >
            Warung Sate Solo
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-8">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Button>
              Pesan Sekarang
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-text transition-colors hover:bg-primary/10 hover:text-primary lg:hidden"
            aria-label={
              isMenuOpen
                ? "Tutup menu navigasi"
                : "Buka menu navigasi"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" size={24} />
            ) : (
              <Menu aria-hidden="true" size={24} />
            )}
          </button>
        </nav>

        <div
          id="mobile-navigation"
          className={cn(
            "overflow-hidden transition-all duration-300 lg:hidden",
            isMenuOpen
              ? "max-h-96 border-t border-border py-5 opacity-100"
              : "max-h-0 opacity-0"
          )}
        >
          <ul className="flex flex-col gap-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-4 py-3 font-medium text-text-secondary transition-colors hover:bg-primary/10 hover:text-primary"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button className="mt-4 w-full">
            Pesan Sekarang
          </Button>
        </div>
      </Container>
    </header>
  );
}