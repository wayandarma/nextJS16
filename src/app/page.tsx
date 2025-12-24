import LogoLoop from '@/components/ui/LogoLoop';
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiDrizzle, SiSqlite } from 'react-icons/si';

const techLogos = [
  { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-black dark:text-white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiDrizzle className="text-[#C5F74F]" />, title: "Drizzle ORM", href: "https://orm.drizzle.team" },
  { node: <SiSqlite className="text-[#003B57]" />, title: "SQLite", href: "https://www.sqlite.org" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main className="flex flex-col items-center justify-between p-4">
        <Hero />

        <div className="w-full max-w-5xl mx-auto px-6 py-12 border-t border-border/40">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">Powered By</p>
          <div className="w-full relative h-20 overflow-hidden">
            <LogoLoop
              logos={techLogos}
              speed={50}
              direction="left"
              logoHeight={40}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="var(--background)"
              ariaLabel="Technology stack"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
