import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";

const internalLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
];

const externalLinks = [
  { name: "GitHub", href: "https://github.com/xgraceyan" },
  { name: "LinkedIn", href: "https://linkedin.com/in/grace-yan89" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="flex flex-row justify-between items-center w-full">
      <Link to="/" className="text-primary">
        grace yan
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          {internalLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <NavigationMenuItem key={link.path}>
                <NavigationMenuLink asChild>
                  <Link
                    to={link.path}
                    className={`nav-link ${active ? "nav-link-active" : ""}`}
                  >
                    {link.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}

          {externalLinks.map(({ name, href }) => (
            <NavigationMenuItem key={name}>
              <NavigationMenuLink asChild>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  {name}
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
