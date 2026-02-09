import { LandingLogo } from "./landing-logo";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <LandingLogo />
                        <p className="text-sm text-slate-600">The intelligent loadboard for modern logistics.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900">Company</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><Link href="#" className="text-slate-600 hover:text-primary">About Us</Link></li>
                            <li><Link href="#" className="text-slate-600 hover:text-primary">Careers</Link></li>
                            <li><Link href="#" className="text-slate-600 hover:text-primary">Press</Link></li>
                        </ul>
                    </div>
                    <div>
                         <h3 className="font-semibold text-slate-900">Resources</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><Link href="#" className="text-slate-600 hover:text-primary">Blog</Link></li>
                            <li><Link href="#" className="text-slate-600 hover:text-primary">Support</Link></li>
                            <li><Link href="#" className="text-slate-600 hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>
                     <div>
                         <h3 className="font-semibold text-slate-900">Legal</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><Link href="#" className="text-slate-600 hover:text-primary">Terms of Service</Link></li>
                            <li><Link href="#" className="text-slate-600 hover:text-primary">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 flex justify-between items-center">
                     <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Sulboor. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
