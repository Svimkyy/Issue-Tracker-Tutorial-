"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";
import classnames from "classnames";

const NavBar = () => {
    const currentPath = usePathname();

    const links = [
        { href: "/", label: "Dashboard" },
        { href: "/issues", label: "Issues" },
    ];

    return (
        <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
            <Link href="/">
                <FaBug />
            </Link>
            <ul className="flex space-x-6">
                {links.map((link) => (
                    <Link
                        className={classnames({
                            "text-zinc-900": currentPath === link.href,
                            "text-zinc-500": currentPath !== link.href,
                            "hover:text-zinc-800": true,
                        })}
                        href={link.href}
                        key={link.href}
                    >
                        {link.label}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
