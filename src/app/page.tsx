import { LandingHeader } from '@/components/landing-header';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { HowItWorks } from '@/components/how-it-works';
import { FeatureHighlight } from '@/components/feature-highlight';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Testimonials } from '@/components/testimonials';
import { Cta } from '@/components/cta';
import { Footer } from '@/components/footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="w-full h-1.5 bg-[hsl(175,78%,26%)]" />
      <LandingHeader />
      <main className="flex-1">
        <section className="container py-20 text-center md:py-32">
          <h1 className="text-4xl font-black tracking-tighter text-slate-900 md:text-6xl lg:text-7xl">
            Where freight
            <br />
            meets <span className="text-primary">focus.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            The intelligent loadboard connecting shippers and carriers with live
            tracking, unparalleled cargo security, and a network of verified
            professionals.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/signup">
                Create an account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
        
        <HowItWorks />
        <FeatureHighlight />
        <WhyChooseUs />
        <Testimonials />
        <Cta />

      </main>
      <Footer />
    </div>
  );
}
