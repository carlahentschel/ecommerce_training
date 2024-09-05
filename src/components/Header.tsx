import Image from "next/image";
import Link from "next/link";
import { HeaderLink } from "./HeaderLink";
import { LocationIcon } from "./icons/LocationIcon";
import { FavoriteIcon } from "./icons/FavoriteIcon";
import { UserIcon } from "./icons/UserIcon";
import { BagIcon } from "./icons/BagIcon";

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
        
            <div className="flex items-center justify-between p-10 bg-slate-200">
                <div className="flex justify-items-center"> 
                    <Image
                    src="/assets/ZZLOGO.png"
                    alt="ZZLogo Logo"
                    className="dark:invert mr-8"
                    width={100}
                    height={24}
                    priority
                    />
                    <div className="ml-4 flex space-x-6">
                        {headerLinks.map((link, index) => (
                            <HeaderLink key={index} href={link.href}>
                                {link.label}
                            </HeaderLink>
                        ))}
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <LocationIcon />
                    <HeaderLink>ATIVE SUA LOCALIZAÇÃO</HeaderLink>
                    <FavoriteIcon />
                    <UserIcon/>
                    <BagIcon />
                </div>
            </div>
    )
}