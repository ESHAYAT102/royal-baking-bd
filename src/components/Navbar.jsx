import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Button from "./Button";
import Animate from "./ui/Animate";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handler = (e) => {
      if (
        !isMenuOpen ||
        (buttonRef.current && buttonRef.current.contains(e.target))
      ) {
        return;
      }

      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isMenuOpen]);

  // Helper to scroll to section by id
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Handles nav link clicks
  function handleNavClick(e, id) {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // Wait for navigation, then scroll
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
    setIsMenuOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <Animate
        distance={150}
        direction="vertical"
        reverse={true}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <div className="flex justify-between items-center font-semibold bg-gray backdrop-blur-sm w-full px-4 lg:px-32 py-4">
          <div>
            <a href="/" className="text-2xl">
              Royal Baking BD.
            </a>
          </div>

          <button
            ref={buttonRef}
            className="lg:hidden p-2"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <svg
              className="w-6 h-6 transform transition-all duration-300 ease-in-out"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                  className="transition-all duration-300 ease-in-out"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  className="transition-all duration-300 ease-in-out"
                />
              )}
            </svg>
          </button>

          <div className="hidden lg:flex gap-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                setIsMenuOpen(false);
              }}
            >
              Home
            </a>
            <a href="#menu" onClick={(e) => handleNavClick(e, "menu")}>
              Menu
            </a>
            <a href="#gallery" onClick={(e) => handleNavClick(e, "gallery")}>
              Gallery
            </a>
            <a href="#reviews" onClick={(e) => handleNavClick(e, "reviews")}>
              Reviews
            </a>
            <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
              About
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, "about")}>
              Contact
            </a>
            <a href="/blog">Blog</a>
          </div>

          <div className="hidden lg:flex items-center">
            <SignedOut>
              <Button>
                <SignInButton />
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>

        <div
          ref={menuRef}
          className={`lg:hidden bg-gray backdrop-blur-sm w-full px-4 py-2 overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col justify-end gap-4 text-right w-full">
            <div>
              <a
                href="#"
                className="py-2"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                  setIsMenuOpen(false);
                }}
              >
                Home
              </a>
            </div>
            <div>
              <a
                href="#menu"
                className="py-2"
                onClick={(e) => handleNavClick(e, "menu")}
              >
                Menu
              </a>
            </div>
            <div>
              <a
                href="#gallery"
                className="py-2"
                onClick={(e) => handleNavClick(e, "gallery")}
              >
                Gallery
              </a>
            </div>
            <div>
              <a
                href="#reviews"
                className="py-2"
                onClick={(e) => handleNavClick(e, "reviews")}
              >
                Reviews
              </a>
            </div>
            <div>
              <a
                href="#about"
                className="py-2"
                onClick={(e) => handleNavClick(e, "about")}
              >
                About
              </a>
            </div>
            <div>
              <a href="/blog" className="py-2">
                Blog
              </a>
            </div>
            <div>
              <a
                href="#contact"
                className="py-2"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </Animate>
    </nav>
  );
}
