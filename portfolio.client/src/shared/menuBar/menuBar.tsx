import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import { MenuBarProps } from "../../interface/header";

const menuBar: React.FC<MenuBarProps> = ({ icon, menuItems, isSignedIn, user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div
        className="relative inline-block text-left rounded-full"
        ref={menuRef}
      >
        <Button
          onClick={toggleMenu}
          className=" flex items-center !px-0 !py-0 justify-center w-10 h-10 !rounded-full bg-primary text-primary-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary"
        >
          {icon}
        </Button>
        {isMenuOpen && (
          <div 
            className="absolute right-0 z-10 mt-2 w-fit divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 focus:outline-none"
          >
            {isSignedIn && user ? (
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  {user.name}
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  {user.email}
                </span>
              </div>
            ) : (<></>)}
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}
            >
              {menuItems.map((item, index: number) => (
                <Button
                  key={index}
                  className="w-full py-2 text-sm text-foreground font-bold !justify-start"
                  role="menuitem"
                  tabIndex={-1}
                  onClick={() => {
                    setIsMenuOpen(false);
                    item.onClick();
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default menuBar;
