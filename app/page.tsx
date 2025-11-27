import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RecentWork from "./recent-work/page";
const desktopBg = "/images/img.jpg";
const mobileBg = "/images/download.jpg";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero desktopBg={desktopBg} mobileBg={mobileBg} />
      </main>
      <RecentWork/>
    </>
  );
}
