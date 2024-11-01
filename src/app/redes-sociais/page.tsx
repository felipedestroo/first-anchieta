import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import Link from "next/link";
import * as motion from "framer-motion/client";

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
      bgColor: "bg-pink-100",
    },
    {
      name: "Instagram Megazord",
      icon: Instagram,
      href: "https://www.instagram.com/megazord7563",
      color: "text-pink-600",
      bgColor: "bg-pink-100",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/megazord7563",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/channel/UCTvlMA3FHlJHdyAEECpBAEw",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      name: "TikTok",
      icon: TikTokIcon,
      href: "https://www.tiktok.com/@megazord7563",
      color: "text-gray-800",
      bgColor: "bg-gray-100",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sesi-senai-megazord-8ba874228/",
      color: "text-blue-800",
      bgColor: "bg-blue-100",
    },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-white via-blue-100 to-blue-200 flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl z-10"
      >
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent my-4 lg:mt-0 lg:mb-8">
          Redes Sociais
        </h1>
        <Card className="backdrop-blur-lg bg-white/90 border-none shadow-2xl">
          <CardHeader></CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    className={`group flex flex-col items-center p-6 rounded-2xl ${link.bgColor} transition-all duration-300 hover:shadow-lg`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 flex items-center justify-center rounded-full ${link.color} bg-white mb-4 shadow-md`}
                    >
                      <link.icon className="w-8 h-8" />
                    </motion.div>
                    <span className="text-sm font-medium text-gray-800 group-hover:font-bold text-center">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
