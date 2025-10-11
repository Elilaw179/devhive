
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const textLines = ["Building ideas", "into reality."];

export function Hero() {
  const [displayText, setDisplayText] = useState({ line1: '', line2: '' });
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const type = () => {
      setDisplayText({ line1: '', line2: '' });
      let line1 = '';
      let line2 = '';
      let i = 0;
      let j = 0;

      const typeLine1 = () => {
        if (i < textLines[0].length) {
          line1 += textLines[0].charAt(i);
          setDisplayText({ line1: line1, line2: '' });
          i++;
          setTimeout(typeLine1, 100);
        } else {
          // Finished typing line 1, start typing line 2
          setTimeout(typeLine2, 50);
        }
      };
      
      const typeLine2 = () => {
        if (j < textLines[1].length) {
          line2 += textLines[1].charAt(j);
          setDisplayText({ line1: line1, line2: line2 });
          j++;
          setTimeout(typeLine2, 100);
        }
      };
      
      typeLine1();
    };

    type(); // Initial animation
    const intervalId = setInterval(type, 5000); // Repeat every 5 seconds

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(intervalId);
      clearInterval(cursorInterval);
    };
  }, []);

  const isLine1Done = displayText.line1.length === textLines[0].length;
  const isLine2Done = displayText.line2.length === textLines[1].length;
  const showLine1Cursor = !isLine1Done;
  const showLine2Cursor = isLine1Done && !isLine2Done;

  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-grid-yellow-500/[0.2] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)] dark:bg-grid-yellow-400/[0.2]"></div>
      </div>
      <div className="container relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="animate-in fade-in slide-in-from-top-8 duration-1000 ease-in-out">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl min-h-[150px] sm:min-h-[190px] md:min-h-[240px] lg:min-h-[280px]">
            <span>
              {displayText.line1}
              {showLine1Cursor && showCursor && <span className="text-primary">|</span>}
            </span>
            <br />
            <span className="text-primary">
              {displayText.line2}
              {showLine2Cursor && showCursor && <span>|</span>}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            DevHive is your partner in building powerful, scalable, and beautiful applications that solve real-world problems and drive business success.
          </p>
        </div>
        <div className="mt-10 flex justify-center gap-4 animate-in fade-in slide-in-from-top-10 duration-1000 ease-in-out">
          <Button asChild size="lg">
            <Link href="/contact">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
