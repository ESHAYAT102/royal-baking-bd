import { useNavigate, useLocation } from "react-router-dom";
import { useCallback } from "react";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to scroll to section by id
  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Handles nav link clicks
  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  }, [location.pathname, navigate, scrollToSection]);

  return (
    <footer className="font-semibold bg-gray backdrop-blur-sm flex flex-col gap-6 justify-between items-center w-full px-4 sm:px-8 md:px-16 lg:px-32 py-10">
      <div>
        <a href="/" className="text-2xl lg:text-4xl w-full text-center">
          Royal Baking BD.
        </a>
      </div>
      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="#menu" onClick={e => handleNavClick(e, "menu")}>Menu</a>
        <a href="#gallery" onClick={e => handleNavClick(e, "gallery")}>Gallery</a>
        <a href="#reviews" onClick={e => handleNavClick(e, "reviews")}>Reviews</a>
        <a href="#about" onClick={e => handleNavClick(e, "about")}>About</a>
        <a href="/blog">Blog</a>
      </div>
      <div className="mt-4 text-center">
        <p>
          &copy; All Rights Reserved. Designed And Developed By{" "}
          <a className="underline" target="blank" href="https://eshayat.com">
            Eshayat
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
