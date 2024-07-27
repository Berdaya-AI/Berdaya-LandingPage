import Challenge from "@/components/challenge";
import Collaboration from "@/components/collaboration";
import Diagram from "@/components/diagram";
import Hero from "@/components/hero";
import Started from "@/components/started";
import Workflow from "@/components/workflow";

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
