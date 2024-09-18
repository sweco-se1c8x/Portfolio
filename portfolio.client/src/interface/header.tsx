import { User } from "./user";

export interface MenuItem {
  label: string;
  onClick: () => void;
  icon?:string
}

export interface MenuBarProps {
  icon: React.ReactNode;
  menuItems: MenuItem[];
  isSignedIn:boolean;
  user:User | undefined
}

export interface LanguageSwitcherProps {
  languages: { code: string; name: string, icon:string }[];
}