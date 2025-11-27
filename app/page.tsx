import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RecentWork from "./recent-work/page";
const desktopImages = [
  "/images/im.jpg",
  "/images/im2.jpg",
  "/images/im3.jpg",
];

const mobileImages = [
  "/images/im.jpg",
  "/images/im2.jpg",
  "/images/im3.jpg",
];

const desktopBg = "/images/img.jpg";
const mobileBg = "/images/download.jpg";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          desktopImages={desktopImages}
          mobileImages={mobileImages}
          desktopBg={desktopBg}
          mobileBg={mobileBg}
        />
       
      </main> 
      <RecentWork/>
    </>
  );
}
