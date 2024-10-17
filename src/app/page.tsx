import Navbar from "./components/navbar";
import Content from "./components/home";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden antialiased">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto">
      <Navbar />
      <Content />
      <Footer />
      </div>
      
    </div>
  );
}
