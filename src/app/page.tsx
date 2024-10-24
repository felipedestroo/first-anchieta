import Content from "../components/home";

export default function Home() {
  return (
    <div className="overflow-x-hidden antialiased">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="">
        <Content />
      </div>
    </div>
  );
}
