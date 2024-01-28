"use client";

import { Header } from "@/components/header/Header";
import { Scene } from "@/components/scene/Scene";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useExitWarning } from "@/hooks/useExitWarning";
import { cn } from "@/lib/utils";
import { Martian_Mono } from "next/font/google";
import Link from "next/link";

const font = Martian_Mono({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  useExitWarning();
  return (
    <div className="flex h-screen max-h-screen flex-col overflow-hidden">
      <Header />
      <Separator />
      <main className="flex flex-grow gap-4 overflow-auto p-8">
        <div className="absolute bottom-10 left-10 z-10 text-xs">
          <TooltipProvider>
            <Tooltip>
              <Link
                href="https://github.com/BrownCSCI1230/scenes.cs1230.graphics"
                target="_blank"
              >
                <TooltipTrigger
                  className={cn(font.className, "text-foreground/30")}
                >
                  Made with <span className="text-base">❤</span>
                </TooltipTrigger>
              </Link>
              <TooltipContent side="top" collisionPadding={{ left: 40 }}>
                Dylan Hu, Nicholas Vadasz, and Orion Bloomfield
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Scene />
        <Sidebar />
      </main>
    </div>
  );
}
