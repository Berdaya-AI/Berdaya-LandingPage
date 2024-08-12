import Collaboration from "@/app/_section/collaboration";
import Diagram from "@/app/_section/diagram";
import Workflow from "@/app/_section/workflow";
import Hero from "./_section/hero";
import Challenge from "./_section/challenge";
import Started from "./_section/started";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black-100 text-white">
      <section className="max-w-full w-full">
        <Hero />
        <Workflow />
        <Challenge />
        <Collaboration />
        <Diagram />
        <Started />
      </section>
    </main>
  );
}
