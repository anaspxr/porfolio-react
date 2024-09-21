import { useEffect, useState } from "react";

const menuItems = [
  { id: "about", name: "About" },
  { id: "experiences", name: "Experiences" },
  { id: "skills", name: "Skills" },
  { id: "works", name: "Works" },
  { id: "contact", name: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollY);
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

  return (
    <div
      className={`flex justify-between bg-transparent fixed top-0 w-full  px-28 z-20 transition-[padding,background] duration-500  ${
        !isScrolled ? "text-white py-10" : "bg-black py-6 bg-opacity-95"
      }`}>
      <p
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          window.history.pushState({}, "", "/");
        }}
        className="text-3xl font-semibold cursor-pointer">
        ANAS
      </p>
      <ul className="flex gap-8 text-lg uppercase font-semibold cursor-pointer">
        <li
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.pushState({}, "", "/");
          }}>
          Home
        </li>
        {menuItems.map((item) => (
          <li
            className={`relative hover:text-gray-400 cursor-pointer transition-all
              ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute 
              before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] 
              before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 
              after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] 
              after:bottom-0 after:right-[50%]
              `}
            key={item.id}>
            <a href={`#${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
