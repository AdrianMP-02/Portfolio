import GithubProjects from "@/components/GithubProjects";
import { Suspense } from "react";
import { SLIDE } from "@/components/slideClasses";
import HomeClient from "./HomeClient";
import { getDictionary } from "@/lib/dictionaries";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = lang === 'en' ? 'en' : 'es';
  const dict = await getDictionary(validLang);

  return (
    <HomeClient dict={dict} lang={validLang}>
      <Suspense fallback={
        <div className="flex gap-4 overflow-hidden">
          {[1, 2, 3].map(i => (
            <div key={i} className={`h-[260px] panel clip-cut animate-pulse ${SLIDE}`} />
          ))}
        </div>
      }>
        <GithubProjects dict={dict.projects} lang={validLang} />
      </Suspense>
    </HomeClient>
  );
}
