import Hero from "@/components/Hero";
import Approach from "@/components/ui/Approach";
import { FloatingNav } from "@/components/ui/Floatingnav";
import Footer from "@/components/ui/Footer";
import Grid from "@/components/ui/Grid";
import RecentProjects from "@/components/ui/RecentProjects";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
