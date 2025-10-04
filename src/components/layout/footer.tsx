import { Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-sm text-primary-foreground/80">
          &copy; {new Date().getFullYear()} DevHive. All rights reserved.
        </p>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:bg-white/10 hover:text-white" asChild>
            <Link href="https://www.facebook.com/profile.php?id=61581797937944" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-5 w-5 transition-transform duration-300 ease-in-out hover:scale-125" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:bg-white/10 hover:text-white" asChild>
            <Link href="https://www.linkedin.com/posts/devhive-tech_devhive-innovation-techsolutions-activity-7380290621997015040-4twI?utm_source=share&utm_medium=member_android&rcm=ACoAAFQsWUQB5r7Q1O-uhhJ6EsLWhELAYUncuJ0" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 transition-transform duration-300 ease-in-out hover:scale-125" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
