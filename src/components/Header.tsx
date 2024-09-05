import Image from "next/image";
import Link from "next/link";
import { HeaderLink } from "./HeaderLink";
import { LocationIcon } from "./icons/LocationIcon";
import { FavoriteIcon } from "./icons/FavoriteIcon";
import { UserIcon } from "./icons/UserIcon";
import { BagIcon } from "./icons/BagIcon";
import { NavigationMenuIcon } from "./icons/NavigationMenuIcon";

const headerLinks = [
    { label: "NOVIDADES", href: "/novidades" },
    { label: "SAPATOS", href: "/sapatos/sandalias" },
    { label: "BOTAS", href: "/botas" },
    { label: "BOLSAS", href: "/bolsas" },
    { label: "ACESSÓRIOS", href: "/acessorios" },
    { label: "PROMOÇÕES", href: "/promocoes" },
    { label: "|", href: "" },
    { label: "BRIZZA", href: "/brizza" }
];

export function Header() {
    return (
        <header className="w-full h-[96px] bg-slate-200 p-4 md:p-10">
            <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0"> 
                    <Image
                    src="/assets/ZZLOGO.png"
                    alt="ZZLogo Logo"
                    className="dark:invert mr-8"
                    width={100}
                    height={24}
                    priority
                    />
                    <nav className="hidden md:flex ml-4 space-x-6">
                        {headerLinks.map((link, index) => (
                            <HeaderLink key={index} href={link.href}>
                                {link.label}
                            </HeaderLink>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <LocationIcon />
                    <HeaderLink>ATIVE SUA LOCALIZAÇÃO</HeaderLink>
                    <FavoriteIcon />
                    <UserIcon/>
                    <BagIcon />
                </div>
                <div className="md:hidden flex items-center">
                    <NavigationMenuIcon/>
                </div>
            </div>
        </header>
        
            
    )
}