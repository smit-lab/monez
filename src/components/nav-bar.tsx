"use client";
import React from "react";

import { usePathname } from "next/navigation";

import { BellDot, WalletCards } from "lucide-react";
import { Card } from "./ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const LINKS = [
  {
    title: "Dashboard",
    href: "/",
  },
  {
    title: "Accounts",
    href: "/accounts",
  },
  {
    title: "Cards",
    href: "/cards",
  },
  {
    title: "Analytics",
    href: "/analytics",
  },
];

const NavBar = () => {
  const pathname = usePathname();
  return (
    <header className="w-full">
      <Card className="px-4 py-6 w-full">
        <nav className="flex justify-between w-full">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-2">
              <WalletCards size={22} />
              <p className="text-lg leading-none tracking-wide">
                m<span className="text-emerald-300">o</span>nez
              </p>
            </div>
            <ul className="hidden xl:flex items-center gap-2">
              {LINKS.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm p-2.5 hover:bg-zinc-700/70 transition-colors duration-100 rounded-lg w-40 inline-block text-center",
                      {
                        "bg-zinc-700/70 hover:bg-zinc-700":
                          pathname === link.href,
                      }
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <Button
                size={"icon"}
                className="bg-zinc-700/70 hover:bg-zinc-700"
              >
                <BellDot size={16} className="text-primary" />
              </Button>
              <Separator
                orientation="vertical"
                className="h-5 bg-zinc-700/60 w-0.5"
              />
              <div className="flex items-center gap-2">
                <Avatar className="rounded-lg">
                  <AvatarImage className="rounded-lg" src="emma-parson.png" />
                  <AvatarFallback className="rounded-lg">SM</AvatarFallback>
                </Avatar>
                <div className="text-xs font-medium">
                  <p className="mb-1">Account</p>
                  <p className="text-zinc-400">Emma Parson</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </Card>
    </header>
  );
};

export default NavBar;
