import { useEffect } from "react";
import {Link} from "react-scroll";

const DrawerNavbar = ({ onClose }) => {
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
  return (
    <div
      className="bg-gray1-100 [backdrop-filter:blur(4px)] w-[185px] h-full overflow-hidden flex flex-col items-center justify-start py-0 px-3 box-border gap-[100px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-[90%]"
      data-animate-on-scroll
    >
      <div className="self-stretch h-[103px] flex flex-row items-center justify-end">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[50px] h-[50px] bg-[url('/icons8menu50-11@3x.png')] bg-cover bg-no-repeat bg-[top] lg:hidden md:flex"
          onClick={onClose}
        />
      </div>
      <div className="flex flex-col items-center justify-start py-[66px] px-[18px] gap-[92px] lg:hidden md:flex">
        <button className="cursor-pointer [border:none] py-[11.165643692016602px] px-[35.73006057739258px] bg-color-1 rounded-7xl-8 w-[151.9px] flex flex-row items-center justify-center box-border hover:bg-color-3 hover:animate-[1s_ease_0s_1_normal_none_shadow-pop-tr] hover:opacity-[1]">
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
    </div>
  );
};

export default DrawerNavbar;
