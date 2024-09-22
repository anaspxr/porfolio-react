const menuItems = [
  { id: "about", name: "About" },
  { id: "experiences", name: "Experiences" },
  { id: "skills", name: "Skills" },
  { id: "works", name: "Works" },
  { id: "contact", name: "Contact" },
];

export default function MobileNavbar({
  isOpen,
  setIsOpen,
  activeSection,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string;
}) {
  return (
    <ul
      className={`md:hidden flex gap-2  px-12 text-xl uppercase flex-col  transition-transform duration-300 transform ${
        isOpen ? "translate-y-0 flex" : "hidden -translate-y-full"
      } pb-4 `}>
      <li
        className={
          `relative hover:text-violet-400 cursor-pointer transition-all w-fit
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
          setIsOpen(false);
          window.scrollTo({ top: 0, behavior: "smooth" });
          window.history.pushState({}, "", "/");
        }}>
        Home
      </li>
      {menuItems.map((item) => (
        <li
          onClick={() => setIsOpen(false)}
          className={
            `relative hover:text-violet-400 cursor-pointer transition-all w-fit
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
  );
}
