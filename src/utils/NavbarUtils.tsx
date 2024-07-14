import { CiHome } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineAudit } from "react-icons/ai";
import { CgFilm } from "react-icons/cg";

interface NavLogo {
  id: number;
  icon: React.ElementType;
  title: string;
  path: string;
}

export const navLinks: NavLogo[] = [
  { id: 1, path: "/", icon: CiHome, title: "Home" },
  { id: 2, path: "/about", icon: IoPersonOutline, title: "About" },
  { id: 3, path: "/contact", icon: AiOutlineAudit, title: "Contact" },
  { id: 4, path: "/sales", icon: CgFilm, title: "Sales" },
];
