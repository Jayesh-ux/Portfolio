import { useEffect } from "react";
import RecentWorksContainer from "../components/recent-works-container";
import FormCard from "../components/form-card";
import HomeContainer from "../components/home-container";
import About from "../components/about";

const FinalDesign = () => {
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
    <div className="relative w-full h-[3610px]">
      <About/>
      <RecentWorksContainer />
      <FormCard />
      <HomeContainer />
    </div>
  );
};

export default FinalDesign;
