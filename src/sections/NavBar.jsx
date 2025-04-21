import React, { useState, useRef, useEffect } from "react";
import NavLink from "../components/NavLink";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function NavBar({ scrollToReviews, scrollToPartners, scrollToContactUs }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);
  const navContainerRef = useRef(null);

  const scrollThreshold = 50;
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > scrollThreshold && !hidden) {
      setHidden(true);
    } else if (latest <= scrollThreshold && hidden) {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (navContainerRef.current) {
        const containerWidth = navContainerRef.current.offsetWidth;
        const titleWidth = navContainerRef.current.querySelector("div").offsetWidth;
        const availableSpace = containerWidth - titleWidth;

        const minSpaceRequired = 650;

        setIsMobile(availableSpace < minSpaceRequired);

        if (availableSpace >= minSpaceRequired) {
          setIsMenuOpen(false);
        }
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = (onClick) => {
    if (onClick) onClick();
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { href: "#", label: "Contact us", onClick: scrollToContactUs },
  ];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="fixed left-0 right-0 z-[1000] mx-[4%] bg-black"
      >
        <div
          ref={navContainerRef}
          className="flex justify-between items-center px-10"
        >
          <div className="flex items-center gap-2.5">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-20 h-20"
            />
            <span className="text-[clamp(1rem,5vw,1.4rem)]">IOLOKIS</span>
          </div>

          <div className="flex items-center gap-10">
            <div
              className={`${
                isMobile ? "hidden" : "flex"
              } gap-10 items-center`}
            >
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  href={item.href}
                  onClick={() => handleNavItemClick(item.onClick)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

export default NavBar;
