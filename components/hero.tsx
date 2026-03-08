import Image from "next/image";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className="flex items-center justify-center pt-[6rem] md:pt-[12rem] md:pb-[14rem] pb-[10rem] relative">
        <div className="flex flex-col justify-center items-center gap-4 z-10">
            <Image
                src={"/images/headshot.png"}
                alt={"Kyle Chin headshot photo"}
                width={100}
                height={100}
                className={"rounded-full shadow-xl"}
            />

            <div className="flex flex-col justify-center items-center">
                <div className="relative">
                    <h1 className="absolute font-bold text-4xl md:text-8xl text-pink-300 font-header">
                        {"Kyle Chin"}
                    </h1>

                    <h2 className="font-bold text-4xl md:text-8xl text-pink-200 font-header pl-0.5 md:pl-2">
                        {"Kyle Chin"}
                    </h2>
                </div>

                <div className="hidden md:flex text-xl md:text-3xl gap-2 pt-3 md:pt-2 pb-2 md:pb-4 font-code">
                    <Typewriter
                        options={{
                            strings: ['Software Developer', 'Retired Intramural Champion', 'Bouldering Enthusiast'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>

                <div className="md:hidden flex text-xl md:text-3xl gap-2 pt-3 md:pt-2 pb-2 md:pb-4 font-code">
                    <Typewriter
                        options={{
                            strings: ['Software Developer', 'Retired Intramural Champ', 'Bouldering Enthusiast'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>

                <p className="w-3/4 md:w-1/2 text-center text-text-body text-sm md:text-xl">
                    {"An enthusiastic programmer that is passionate about full stack development and is looking to further my technical skills."}
                </p>

                <div className="flex flex-row gap-4">
                    <div className="border border-text-body py-1.5 md:py-2.5 font-bold my-5 px-3 md:px-5 rounded-md hover:bg-background-hover text-xs md:text-base items-center flex gap-1 cursor-pointer">
                        <FaRegPaperPlane />
                        <a href="mailto:kkhc99@gmail.com">
                            {"Email"}
                        </a>
                    </div>

                    <div className="border border-text-body py-1.5 md:py-2.5 font-bold my-5 px-3 md:px-5 rounded-md hover:bg-background-hover text-xs md:text-base items-center flex gap-1 cursor-pointer">
                        <FaLinkedin />
                        <a href="https://www.linkedin.com/in/kyle-chin-527959231/" target="_blank" rel="noopener noreferrer">
                            {"LinkedIn"}
                        </a>
                    </div>

                    <div className="border border-text-body py-1.5 md:py-2.5 font-bold my-5 px-3 md:px-5 rounded-md hover:bg-background-hover text-xs md:text-base items-center flex gap-1 cursor-pointer">
                        <IoLogoGithub />
                        <a href="https://github.com/MoleXprof" target="_blank" rel="noopener noreferrer">
                            {"GitHub"}
                        </a>
                    </div>
                </div>

            </div>
        </div>

        <div className="absolute text-text-body text-xs md:text-base left-[2rem] bottom-0 md:left-[3rem] font-written animate-bounce">
            <Link
                href="#about"
                to="about"
                spy={true}
                smooth={true}
                duration={600}
            >
                <p className="rotate-[340deg]">{"Psst...scroll down!"}</p>
                <div className="rotate-90 mt-10">
                    <span aria-hidden="true" className="h-full font-bold"> &rarr;</span>
                </div>
            </Link>
        </div>
  </div>
  );
};

export default Hero;
