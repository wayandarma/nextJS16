import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="container grid min-h-[calc(100vh-4rem)] items-center gap-10 pb-8 pt-6 sm:gap-16 md:grid-cols-2 lg:pt-10">
            <div className="relative aspect-square sm:aspect-[4/5] md:aspect-auto md:h-full lg:aspect-square">
                {/* Placeholder for portrait with geometric accent */}
                <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-zinc-100 dark:bg-zinc-800 lg:-left-8 lg:-top-8" />
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-900 shadow-2xl">
                    {/* Replace this div with an actual Image component when asset is available */}
                    <div className="flex h-full w-full items-center justify-center text-zinc-400">
                        <span className="text-sm uppercase tracking-widest">Portrait Placeholder</span>
                    </div>
                    {/* Example Image usage:
            <Image
              src="/your-portrait.jpg"
              alt="Professional Portrait"
              fill
              className="object-cover"
              priority
            />
           */}
                </div>
            </div>

            <div className="flex flex-col items-start gap-4 sm:gap-8">
                <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
                    Crafting Digital Experiences
                </h1>
                <p className="max-w-[42rem] text-lg text-muted-foreground sm:text-xl sm:leading-8">
                    I build accessible, pixel-perfect, and performant web applications.
                    Specializing in Next.js, React, and modern UI engineering.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="h-12 rounded-full px-8 text-base">
                        View My Work
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 rounded-full px-8 text-base group">
                        Let's Talk
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
