import Link from "next/link";

interface IHeaderLinkProps {
    href?: string;
    children: React.ReactNode;
}

export function HeaderLink({href, children}: IHeaderLinkProps) {
    const content = <h3 className="text-[12px] font-normal leading-[16px] uppercase cursor-pointer">{children}</h3>

    return href ? (
        <Link href={href}>
            {content}
        </Link>
    ) : (
        content
    )
}