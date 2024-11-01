import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import Link from "next/link";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Component() {
  const socialLinks = [
    {
      name: "Instagram Anchieta",
      icon: Instagram,
      href: "https://www.instagram.com/grupoanchieta/",
      color: "text-pink-600",
    },
    {
      name: "Instagram Megazord",
      icon: Instagram,
      href: "https://www.instagram.com/megazord7563",
      color: "text-pink-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/megazord7563",
      color: "text-blue-600",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/channel/UCTvlMA3FHlJHdyAEECpBAEw",
      color: "text-red-600",
    },
    {
      name: "TikTok",
      icon: TikTokIcon,
      href: "https://www.tiktok.com/@megazord7563",
      color: "text-gray-800",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sesi-senai-megazord-8ba874228/",
      color: "text-blue-800",
    },
  ];

  return (
    <div className="h-[90vh] bg-gradient-to-br from-white via-blue-100 to-blue-200 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <Card className="backdrop-blur-sm bg-white/70 border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-blue-800">
              Connect With Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group flex flex-col items-center p-4 rounded-xl bg-blue-200 hover:bg-blue-300 transition-all duration-300 transform hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon
                    className={`w-12 h-12 mb-2 ${link.color} group-hover:animate-bounce`}
                  />
                  <span className="text-sm font-medium text-blue-900 group-hover:font-bold text-center">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="absolute inset-0 bg-pattern opacity-5 pointer-events-none" />
    </div>
  );
}
