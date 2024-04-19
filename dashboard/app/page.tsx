import Navbar from '@/components/containers/navbar'
export default function Page() {
    const gridPattern = `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='smallGrid' width='8' height='8' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 8 0 L 0 0 0 8' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='0.5'/%3E%3C/pattern%3E%3Cpattern id='grid' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Crect width='80' height='80' fill='url(%23smallGrid)'/%3E%3Cpath d='M 80 0 L 0 0 0 80' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`;

    return (
        <div className='flex flex-col min-h-screen w-full'>
            <Navbar />
            <div className="relative h-[50rem] w-full flex items-center justify-center text-white overflow-hidden bg-black">
                {/* Grid pattern is applied via inline style because Tailwind does not have a utility for custom SVG backgrounds */}
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: gridPattern }}></div>

                {/* This is the text which will be placed on top of the grid pattern */}
                <p className="relative z-10 text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-300 to-gray-600 py-8">
                    Backgrounds
                </p>
            </div>
        </div>
    );
}

