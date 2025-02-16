import { ModeToggle } from "@/components/theme-toggle";
import { SheetClose } from "@/components/ui/sheet";
import { ENV } from "@/configs/env";
import { page_routes } from "@/lib/routes-config";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import Search from "./search";
import { buttonVariants } from "./ui/button";

export const NAVLINKS = [
	{
		title: "Docs",
		href: `/docs${page_routes[0].href}`,
	},
	{
		title: "Blog",
		href: "/blog",
	},
	{
		title: "Sponsor",
		href: "https://saweria.co/itpohgero",
	},
];

export function Navbar() {
	return (
		<nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
			<div className="sm:container mx-auto w-[95vw] h-full flex items-center justify-between md:gap-2">
				<div className="flex items-center gap-5">
					<SheetLeftbar />
					<div className="flex items-center gap-6">
						<div className="sm:flex hidden">
							<Logo />
						</div>
						<div className="lg:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
							<NavMenu />
						</div>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<div className="flex items-center gap-2">
						<Search />
						<div className="flex ml-2.5 sm:ml-0">
							<Link
								href="https://github.com/any-source/lokio"
								className={buttonVariants({ variant: "ghost", size: "icon" })}
							>
								<Icon icon="akar-icons:github-fill" />
							</Link>
							<ModeToggle />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export function Logo() {
	return (
		<Link href="/" className="flex items-center gap-2.5">
			<Image src="/logo.png" width={20} height={20} alt="Logo" />
			<h2 className="text-md font-bold">{ENV.NAME}</h2>
		</Link>
	);
}

export function NavMenu({ isSheet = false }) {
	return (
		<>
			{NAVLINKS.map((item) => {
				const Comp = (
					<Anchor
						key={item.title + item.href}
						activeClassName="!text-primary dark:font-medium font-semibold"
						absolute
						className="flex items-center gap-1 dark:text-stone-300/85 text-stone-800 font-sans"
						href={item.href}
					>
						{item.title}
					</Anchor>
				);
				return isSheet ? (
					<SheetClose key={item.title + item.href} asChild>
						{Comp}
					</SheetClose>
				) : (
					Comp
				);
			})}
		</>
	);
}
