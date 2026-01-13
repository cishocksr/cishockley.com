"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";

type TOCItem = {
  title: string;
  url: string;
  items: TOCItem[];
};

type TOCProps = {
  toc: TOCItem[];
};

const renderTOCItems = (
  items: TOCItem[],
  activeId: string,
  isFirstLevel = true
) => {
  return (
    <ul
      className={`space-y-2 pl-4 ${
        isFirstLevel ? "border-l border-border" : ""
      }`}
    >
      {items.map((item) => {
        const headingId = item.url.replace("#", "");
        const isActive = activeId === headingId;

        return (
          <li key={item.url}>
            <a
              href={item.url}
              className={`text-sm transition-colors block py-1 ${
                isActive
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.title}
            </a>
            {item.items.length > 0 &&
              renderTOCItems(item.items, activeId, false)}
          </li>
        );
      })}
    </ul>
  );
};

export default function TableOfContents({ toc }: TOCProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headings = document.querySelectorAll(
      "article h1, article h2, article h3, article h4, article h5, article h6"
    );
    console.log("Found headings: ", headings.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Active Heading ID: ", entry.target.id);
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -66%",
        threshold: 1.0,
      }
    );

    headings.forEach((heading) => {
      observer.observe(heading);
    });
    return () => {
      headings.forEach((heading) => {
        observer.unobserve(heading);
      });
    };
  }, []);

  return (
    <>
      {/* Desktop: always visible sidebar */}
      <nav className="hidden lg:block sticky top-20 h-fit w-64">
        <h2 className="text-sm font-semibold mb-4">Table Of Contents</h2>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          {renderTOCItems(toc, activeId)}
        </ScrollArea>
      </nav>

      {/* Mobile: button + drawer */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <Button>
              <Menu className="h-4 w-4 mr-2" />
              TOC
            </Button>
          </DrawerTrigger>

          <DrawerContent>
            <DrawerTitle>Table of Contents</DrawerTitle>
            <ScrollArea className="h-100 p-4">
              {renderTOCItems(toc, activeId)}
            </ScrollArea>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
