import Sidebar from "@/components/containers/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen w-full">
            <Sidebar />
            {children}
        </div>
    )
}