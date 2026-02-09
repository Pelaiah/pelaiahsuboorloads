import { cn } from "@/lib/utils"

export function LandingLogo({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            <div className="relative h-8 w-8">
                 <div className="absolute top-[3px] left-[9px] h-6 w-3 rotate-[25deg] rounded-full bg-primary"></div>
                <div className="absolute top-[5px] right-[9px] h-6 w-3 rotate-[25deg] rounded-full bg-primary"></div>
            </div>
            <span className="text-xl font-bold text-slate-800">Sulboor</span>
        </div>
    )
}
