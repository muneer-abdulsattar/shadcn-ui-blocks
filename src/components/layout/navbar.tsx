import Link from "next/link";
import { GithubStarButton } from "../github-star-button";
import { Logo } from "../logo";
import { AppNavigationMenu } from "./app-navigation-menu";
import { ThemeToggle } from "../app-sidebar/theme-toggle";
import { NavigationSheet } from "./navigation-sheet";

export const Navbar = () => {
  return (
    <nav className="px-6 lg:px-0">
      <div className="relative z-20 mt-4 max-w-screen-lg mx-auto bg-background px-2 rounded-full text-foreground border">
        <div className="h-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="font-bold" />
              <span className="font-bold">Shadcn UI Blocks</span>
            </Link>
            <div className="ml-2 hidden sm:block">
              <AppNavigationMenu />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <GithubStarButton />
            <ThemeToggle />
            <div className="block sm:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
