import Link from "next/link"
import {
    Home,
    LineChart,
    Package,
    Package2,
    Settings,
    ShoppingCart,
    Users2,
} from "lucide-react"

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip"
import ModeToggle from "../theme/theme-toggle"



const MENU_ITEMS = [
    {
        icon: Home,
        label: "Dashboard",
        href: "/dashboard",
    },
    {
        icon: ShoppingCart,
        label: "Orders",
        href: "#",
    },
    {
        icon: Package,
        label: "Products",
        href: "/dashboard/products",
    },
    {
        icon: Users2,
        label: "Customers",
        href: "#",
    },
    {
        icon: LineChart,
        label: "Analytics",
        href: "#",
    },
    {
        icon: Settings,
        label: "Settings",
        href: "#",
    },
]

export default function Sidebar() {
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link
                    href="#"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <TooltipProvider>
                    {MENU_ITEMS.map((item, index) => (
                        <Tooltip key={index}>
                            <TooltipTrigger asChild>
                                <Link
                                    href={item.href}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <item.icon className="h-5 w-5" />
                                    <span className="sr-only">{item.label}</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">{item.label}</TooltipContent>
                        </Tooltip>
                    ))}
                </TooltipProvider>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <ModeToggle />
            </nav>
        </aside>
    )
}
