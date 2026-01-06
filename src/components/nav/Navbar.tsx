import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";

interface NavLinks {
  name: string;
  path: string;
}

export default function Navbar() {
  const links: NavLinks[] = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const location = useLocation();

  return (
    <div className="flex flex-row justify-between items-center w-full">
      <Link to="/" className="text-primary">
        grace yan
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          {links.map((link) => {
            const active = location.pathname === link.path;

            return (
              <NavigationMenuItem>
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
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
