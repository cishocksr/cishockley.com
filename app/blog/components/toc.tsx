"use client";

import { Menu } from "lucide-react";

import { useState } from "react";
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

const renderTOCItems = (items: TOCItem[]) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.url}>
          <a href={item.url}>{item.title}</a>
          {item.items.length > 0 && renderTOCItems(item.items)}
        </li>
      ))}
    </ul>
  );
};

export default function TableOfContents({ toc }: TOCProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop: always visible sidebar */}
      <nav className="hidden lg:block sticky top-4 h-fit">
        <h2>Table of Contents</h2>
        <ScrollArea className="h-[calc(100vh - 8rem)]">
          {renderTOCItems(toc)}
        </ScrollArea>
      </nav>

      {/* Mobile: button + drawer */}
      <div className="lg:hidden fixed bottom-4 right-4">
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <Button>
              <Menu className="h-4 w-4" />
              Table of Contents
            </Button>
          </DrawerTrigger>

          <DrawerContent>
            <DrawerTitle>Table of Contents</DrawerTitle>
            <ScrollArea className="h-[400px] p-4">
              {renderTOCItems(toc)}
            </ScrollArea>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
