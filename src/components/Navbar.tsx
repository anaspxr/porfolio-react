import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navHeight = 50; // Adjust this based on your navbar height

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    const handleLinkClick = (event: Event) => {
      const targetId = (event.target as HTMLAnchorElement)
        .getAttribute("href")!
        .slice(1); // Get the ID without '#'
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        event.preventDefault(); // Prevent default anchor behavior
        window.scrollTo({
          top: targetElement.offsetTop - navHeight + 5, // Adjust scroll position
          behavior: "smooth", // Smooth scrolling
        });
      }
    };

    const anchorLinks = document.querySelectorAll(
      'a[href*="#"]:not([href="#"])'
    );
    anchorLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <div
      className={`flex justify-between bg-transparent fixed top-0 w-full py-12 px-28 z-20 ${
        !isScrolled && "text-white"
      }`}>
      <p
        onClick={() => {
          window.scrollX = 0;
          window.history.pushState({}, "", "/");
        }}
        className="text-3xl font-semibold cursor-pointer">
        ANAS
      </p>
      <ul className="flex gap-8 text-lg uppercase font-semibold">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
