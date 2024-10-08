import { useRef } from "react";
import SectionCard from "./SectionCard";
import useOnScreen from "../hooks/useOnScreen";
import { IoLocationSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";

export default function About() {
  const borderRef = useRef<HTMLDivElement>(null);

  const isVisible = useOnScreen(borderRef);

  return (
    <SectionCard id="about" className="p-12 md:p-20 2xl:p-32">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <div>
          <div className="flex flex-col justify-center items-center xs:w-fit xs:items-start gap-2 mb-2">
            <img
              src="/images/anas.jpeg"
              alt="profile"
              className="w-40 h-40 rounded-full"
            />
            <p className="text-2xl text-violet-200 my-2 text-center self-center">
              Anas P
            </p>
          </div>
          <p className="">
            <span>
              <FaLaptopCode className="text-violet-400 inline mr-2" />
              MERN stack Intern at{" "}
              <a
                className="text-violet-200 hover:underline hover:text-violet-300"
                href="https://bridgeon.in/">
                BridgeOn
              </a>
            </span>
          </p>
          <p className="flex items-center gap-2">
            <MdMail className="text-violet-400" /> anaspappadan@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <IoLocationSharp className="text-violet-400" /> Manjeri, Kerala
          </p>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div
            ref={borderRef}
            className={`my-2 h-1 bg-violet-800 transition-[width] duration-700 ease-in-out ${
              isVisible ? "w-32" : "w-10"
            }`}></div>
          <p className="mt-4 text-lg">
            Hi, I am Anas!! <br /> I am a web developer with a passion for
            creating beautiful & user-friendly websites and backend services. I
            have experience in building websites using modern technologies like
            React, Next.js, Node.js and Express . I am always eager to learn new
            technologies and improve my skills.
          </p>
        </div>
      </div>
    </SectionCard>
  );
}
