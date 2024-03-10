import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router-dom";
import Logo from "/logo.svg";

export default function Header(): JSX.Element {
  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="flex items-center gap-6 md:gap-10">
            <Link to="/" className="flex items-center space-x-2">
              <img src={Logo} alt="" className="w-6 h-6" />
              <span className="inline-block font-bold text-2xl">spito</span>
            </Link>
            <nav className="flex items-center gap-6 font-poppins font-extralight text-sm h-fit">
              <a
                title="Documentation"
                target="_blank"
                href="https://avorty.github.io/spito"
                className="text-foreground/60 hover:text-foreground/80 transition-colors"
              >
                Docs
              </a>
              <NavLink
                to="/marketplace"
                className={({ isActive }) =>
                  cn(
                    "text-foreground/60 hover:text-foreground/80 transition-colors sm:block hidden",
                    isActive && "text-foreground hover:text-foreground"
                  )
                }
              >
                Marketplace
              </NavLink>
              <NavLink
                to="/download"
                className={({ isActive }) =>
                  cn(
                    "text-foreground/60 hover:text-foreground/80 transition-colors sm:block hidden",
                    isActive && "text-foreground hover:text-foreground"
                  )
                }
              >
                Download
              </NavLink>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <ModeToggle />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
