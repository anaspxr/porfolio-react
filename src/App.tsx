import Navbar from "./components/Navbar";

import "./App.css";
import Hero from "./components/Hero";
import SectionCard from "./components/SectionCard";
import { useEffect } from "react";

function App() {
  const navHeight = 50;

  useEffect(() => {
    //? handle anchor link click
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
        window.history.pushState({}, "", `#${targetId}`);
      }
    };

    const anchorLinks = document.querySelectorAll(
      'a[href*="#"]:not([href="#"])'
    );
    anchorLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <SectionCard id="about" className="h-80">
        About
      </SectionCard>
      <SectionCard id="experiences" className="h-80">
        Experiences
      </SectionCard>
      <SectionCard id="skills" className="h-80">
        Skills
      </SectionCard>
      <SectionCard id="works" className="h-80">
        Works
      </SectionCard>
      <SectionCard id="contact" className="h-80">
        Contact
      </SectionCard>
    </div>
  );
}

export default App;
