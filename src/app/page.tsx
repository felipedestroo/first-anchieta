import Navbar from "./components/navbar";
import Content from "./components/home";
import Footer from "./components/footer";

export default function Home() {
  return (
    <><div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]" />
    <div className="container m-auto">
        <Navbar />
        <Content />
        <Footer />
      </div>
    </>  
  );
}
