import { useState, useCallback, useEffect, useRef } from "react";
import DrawerNavbar from "./drawer-navbar";
import PortalDrawer from "./portal-drawer";
import {Link} from "react-scroll";

const HomeContainer = () => {
  const [isDrawerNavbarOpen, setDrawerNavbarOpen] = useState(false);

  const openDrawerNavbar = useCallback(() => {
    setDrawerNavbarOpen(true);
  }, []);

  const closeDrawerNavbar = useCallback(() => {
    setDrawerNavbarOpen(false);
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFullStackDevClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='fullStackDev']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);


  return (
    <>
      <section className="absolute h-[25.05%] w-full top-[0%] right-[0%] bottom-[74.95%] left-[0%] text-left text-48xl text-black font-poppins">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/picsart-240106-211821324-1@2x.png"
        />
        <header className="absolute h-[10.04%] w-[99.14%] top-[0%] right-[0%] bottom-[89.96%] left-[0.86%] flex flex-row items-center justify-between text-left text-39xl-9 text-color-31 font-pacifico">
          <h2 className="m-0 self-stretch relative text-inherit font-normal font-inherit inline-block w-[331px] shrink-0 cursor-none z-[1] hover:text-center hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.5))] hover:animate-[3s_ease_0s_infinite_reverse_none_bounce-top] hover:opacity-[1]">
            Jayesh Singh
          </h2>
          <div className="w-[537px] h-[58px] flex flex-row items-center justify-end gap-[32px] z-[0] md:flex">
            <div className="flex flex-row items-center justify-start gap-[32px] md:hidden">
              <button  className="cursor-pointer [border:none] py-[11.165643692016602px] px-[35.73006057739258px] bg-color-1 rounded-7xl-8 w-[151.9px] flex flex-row items-center justify-center box-border hover:bg-color-3 hover:animate-[1s_ease_0s_1_normal_none_shadow-pop-tr] hover:opacity-[1]">
                <b className="relative text-xl-1 font-poppins text-color-31 text-left [text-shadow:0px_4.5px_4.47px_rgba(0,_0,_0,_0.5)]">
                  <Link to="recentwork" spy={true} offset={40} duration={500} >RecentWork</Link>
                </b>
              </button>
              <button className="cursor-pointer [border:none] py-[11.165643692016602px] px-[35.73006057739258px] bg-color-1 rounded-7xl-8 w-[151.9px] flex flex-row items-center justify-center box-border hover:bg-color-3 hover:animate-[1s_ease_0s_1_normal_none_shadow-pop-tr] hover:opacity-[1]">
                <b className="relative text-xl-1 font-poppins text-color-31 text-left [text-shadow:0px_4.5px_4.47px_rgba(0,_0,_0,_0.5)]">
                <Link to="about" spy={true} offset={140} duration={500} >About</Link>
                </b>
              </button>
              <button className="cursor-pointer [border:none] py-[11.165643692016602px] px-[35.73006057739258px] bg-color-1 rounded-7xl-8 w-[151.9px] flex flex-row items-center justify-center box-border hover:bg-color-3 hover:animate-[1s_ease_0s_1_normal_none_shadow-pop-tr] hover:opacity-[1]">
                <b className="relative text-xl-1 font-poppins text-color-31 text-left [text-shadow:0px_4.5px_4.47px_rgba(0,_0,_0,_0.5)]">
                <Link to="contact" spy={true} offset={50} duration={500}  >Contact</Link>
                </b>
              </button>
            </div>
            <img
              className="relative w-[50px] h-[50px] object-cover hidden cursor-pointer lg:hidden md:flex"
              alt=""
              src="/icons8menu50-1@2x.png"
              onClick={openDrawerNavbar}
            />
          </div>
        </header>
        <div
          className="absolute top-[calc(50%_-_86.15px)] left-[0px] w-[428px] flex flex-col items-start justify-start gap-[43px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] cursor-pointer"
          data-scroll-to="fullStackDev"
          onClick={onFullStackDevClick}
          data-animate-on-scroll
        >
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-center justify-center p-[11.165643692016602px]">
              <h1 className="m-0 self-stretch flex-1 relative text-inherit leading-[108.31px] font-bold font-inherit">
                <span>FullStack</span>
                <span className="text-dominant">{` `}</span>
              </h1>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center p-[11.165643692016602px] text-color-31">
              <b className="self-stretch flex-1 relative leading-[108.31px]">
                DEVELOPER
              </b>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[26.8px]">
            <button className="cursor-pointer [border:none] py-[11.165643692016602px] px-[35.73006057739258px] bg-color-3 rounded-7xl-8 w-[151.9px] flex flex-row items-center justify-center box-border hover:bg-lime-100 hover:animate-[1s_ease_0s_1_normal_none_shadow-pop-tr] hover:opacity-[1]">
              <b className="relative text-xl-1 font-poppins text-color-31 text-left [text-shadow:0px_4.5px_4.47px_rgba(0,_0,_0,_0.5)]">
              <Link to="contact" spy={true} offset={50} duration={500}  >HireMe</Link>
              </b>
            </button>
            <button className="cursor-pointer [border:none] py-0 px-5 bg-darkslategray-200 rounded-[21.25px] [backdrop-filter:blur(3.54px)] w-[197px] h-[52px] flex flex-row flex-wrap items-center justify-between box-border hover:animate-[1s_ease_0s_1_normal_none_shadow-pop-tr] hover:opacity-[1]">
            <b className="relative text-base-9 font-poppins text-color-31 text-left [text-shadow:0px_3.5px_3.54px_rgba(0,_0,_0,_0.5)]">
            <a href="https://drive.google.com/file/d/10ZiFCS3yKd5oC0wrbiBXqcoQKQf3Gasx/view?usp=drivesdk">
              Download CV
            </a>     
            </b>
            <img
              className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/download@2x.png"
            />
            </button>
          </div>
        </div>
      </section>
      {isDrawerNavbarOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeDrawerNavbar}
        >
          <DrawerNavbar onClose={closeDrawerNavbar} />
        </PortalDrawer>
      )}
    </>
  );
};

export default HomeContainer;
