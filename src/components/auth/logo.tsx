import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
    return (
        <div className={cn("flex flex-col items-center gap-4", className)}>
            <div className="relative h-14 w-14">
                <div className="absolute -top-1 left-3 h-10 w-5 rotate-[25deg] rounded-full bg-primary"></div>
                <div className="absolute top-1 right-3 h-10 w-5 rotate-[25deg] rounded-full bg-primary"></div>
            </div>
            <span className="text-3xl font-bold tracking-widest text-white">SULBOOR</span>
        </div>
    )
}
