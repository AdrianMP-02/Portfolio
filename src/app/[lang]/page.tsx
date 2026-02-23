import GithubProjects from "@/components/GithubProjects";
import { Suspense } from "react";
import HomeClient from "./HomeClient";
import { getDictionary } from "@/lib/dictionaries";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = lang === 'en' ? 'en' : 'es';
  const dict = await getDictionary(validLang);

  return (
    <HomeClient dict={dict}>
      <Suspense fallback={
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-[280px] rounded-3xl glass-morphism animate-pulse" />
          ))}
        </div>
      }>
        <GithubProjects dict={dict.projects} />
      </Suspense>
    </HomeClient>
  );
}
