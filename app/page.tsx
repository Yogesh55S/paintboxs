import Hero from "./components/Hero";
import StickyNavbar from "./components/Navbar";
import RecentWork from "./recent-work/page";
import Testimonials from "./components/Testimonials";
const desktopBg = "/images/img.jpg";
const mobileBg = "/images/download.jpg";

export default function Home() {
  return (
    <>
      <StickyNavbar/>
      <main>
        <Hero desktopBg={desktopBg} mobileBg={mobileBg} />
      </main>
      <RecentWork/>
       <Testimonials/>
    </>
  );
}
