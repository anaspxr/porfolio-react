import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import MobileNavbar from "./MobileNavbar";

const menuItems = [
  { id: "about", name: "About" },
  { id: "experiences", name: "Experiences" },
  { id: "skills", name: "Skills" },
  { id: "works", name: "Works" },
  { id: "contact", name: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Select all sections by their tag or you can use specific class names
    const options = {
      root: null, // Uses the viewport as the root
      threshold: 0.6, // Trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set the active section based on the ID of the visible section
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#mobileNavbar") && !target.closest("#hamburger")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full transition-colors duration-500  bg-opacity-95 md:bg-transparent z-50 ${
        isOpen && "bg-black"
      }`}>
      <div
        className={`flex justify-between items-center lg:px-28 px-4 transition-[padding,background] duration-500  ${
          !isScrolled
            ? "text-white py-6 md:py-10 bg-transparent "
            : "bg-black py-4 md:py-6 bg-opacity-95 text-violet-300"
        }`}>
        <p
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.pushState({}, "", "/");
          }}
          className="text-2xl md:text-3xl font-semibold cursor-pointer">
          ANAS
        </p>
        <ul className="hidden md:flex gap-8 2xl:text-lg  uppercase font-semibold cursor-pointer">
          <li
            className={
              `relative hover:text-violet-400 cursor-pointer transition-all
                ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute 
                before:bg-violet-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] 
                before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 
                after:absolute after:bg-violet-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] 
                after:bottom-0 after:right-[50%]
                ` +
              (activeSection === "home"
                ? "text-violet-300 before:w-[50%] after:w-[50%] "
                : "text-white")
            }
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState({}, "", "/");
            }}>
            Home
          </li>
          {menuItems.map((item) => (
            <li
              className={
                `relative hover:text-violet-400 cursor-pointer transition-all
              ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute 
              before:bg-violet-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] 
              before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 
              after:absolute after:bg-violet-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] 
              after:bottom-0 after:right-[50%]
              ` +
                (activeSection === item.id
                  ? "text-violet-300 before:w-[50%] after:w-[50%] "
                  : "text-white")
              }
              key={item.id}>
              <a href={`#${item.id}`}>{item.name}</a>
            </li>
          ))}
        </ul>
        <Hamburger
          className="md:hidden"
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </div>

      <MobileNavbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeSection={activeSection}
      />
    </div>
  );
}
