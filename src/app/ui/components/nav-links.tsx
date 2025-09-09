"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Posts", href: "/blog/posts", icon: DocumentDuplicateIcon },
  { name: "About", href: "/blog/about", icon: UserGroupIcon },
  { name: "Contact", href: "/blog/contact", icon: EnvelopeIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200 hover:text-gray-900",
              {
                "bg-purple-100": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
