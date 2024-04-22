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
import ModeToggle from "../providers/theme/theme-toggle"
import AvatarMenu from "./avatar-menu"



const MENU_ITEMS = [
    {
        icon: Home,
        label: "Home",
        href: "/dashboard",
    },
    {
        icon: ShoppingCart,
        label: "Orders",
        href: "/dashboard/orders",
    },
    {
        icon: Package,
        label: "Products",
        href: "/dashboard/products",
    },
    {
        icon: Users2,
        label: "Customers",
        href: "/dashboard/customers",
    },
    {
        icon: LineChart,
        label: "Analytics",
        href: "/dashboard/analytics",
    },
    {
        icon: Settings,
        label: "Settings",
        href: "/dashboard/settings",
    },
]

export default function Sidebar() {
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
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
            <nav className="mt-auto flex flex-col items-center gap-4  sm:py-5">
                <ModeToggle />
            </nav>
        </aside>
    )
}
