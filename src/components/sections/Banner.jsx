import "../../index.css";
import Button from "../Button";
import Animate from "../ui/Animate";
import ShinyText from "../ui/ShinyText";
import { useEffect, useRef, useState } from "react";

export default function Banner() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);
  const blob4Ref = useRef(null);
  const blob5Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translateY(${rate * 0.8}px)`;
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translateY(${rate * 1.2}px)`;
      }
      if (blob3Ref.current) {
        blob3Ref.current.style.transform = `translateY(${rate * 0.6}px)`;
      }
      if (blob4Ref.current) {
        blob4Ref.current.style.transform = `translateY(${rate * 1.0}px)`;
      }
      if (blob5Ref.current) {
        blob5Ref.current.style.transform = `translateY(${rate * 0.9}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-center h-[85vh] flex flex-col gap-10 items-center justify-center">
      <div>
        <Animate
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <div className="mb-8 flex items-center justify-center align-middle text-center">
            <div
              className="relative"
              onMouseEnter={() => setIsTooltipVisible(true)}
              onMouseLeave={() => setIsTooltipVisible(false)}
              onClick={() => setIsTooltipVisible(!isTooltipVisible)}
            >
              <div className="text-center bg-dark-gray px-4 py-1 rounded-full cursor-pointer">
                <ShinyText text="Beta" disabled={false} speed={3} />
              </div>
              {isTooltipVisible && (
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-dark-gray text-white text-xs rounded-md whitespace-nowrap z-10">
                  Website is under development
                </div>
              )}
            </div>
          </div>
          <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-semibold">
            Providing The <span className="bg-gray px-4 rounded-xl">Best</span>{" "}
            Products.
          </h1>
          <div className="flex gap-4 justify-center font-semibold text-xl mt-10">
            <Button target="blank" link="https://www.facebook.com/banasree2021">
              Facebook
            </Button>
            <Button target="blank" link="https://wa.me/8801739782358">
              WhatsApp
            </Button>
          </div>
        </Animate>
      </div>
      <div className="block w-[40vw] lg:w-[28vw] absolute top-[78vh] lg:top-[44vh] left-[-8vw] lg:left-[-8vw] sm:left-[-10vw]">
        <Animate
          distance={150}
          direction="horizontal"
          reverse={true}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <img
            ref={blob1Ref}
            draggable="false"
            className="select-none"
            src="banner/blob1.png"
          />
        </Animate>
      </div>
      <div className="block w-[32vw] lg:w-[28vw] absolute top-[16vh] right-[2vw] lg:right-[-10vw] sm:right-[2vw]">
        <Animate
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <img
            ref={blob2Ref}
            draggable="false"
            className="select-none"
            src="banner/blob2.png"
          />
        </Animate>
      </div>
      <div className="hidden lg:block w-[8vw] lg:w-[8vw] absolute top-[58vh] right-[20vw] lg:right-[20vw] sm:right-[15vw]">
        <Animate
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <img
            ref={blob3Ref}
            draggable="false"
            className="select-none"
            src="banner/blob3.png"
          />
        </Animate>
      </div>
      <div className="block w-[16vw] lg:w-[8vw] absolute top-[20vh] lg:top-[24vh] left-[12vw]">
        <Animate
          distance={150}
          direction="horizontal"
          reverse={true}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <img
            ref={blob4Ref}
            draggable="false"
            className="select-none"
            src="banner/blob4.png"
          />
        </Animate>
      </div>
      <div className="hidden lg:block w-[6vw] absolute top-[72vh] right-[11vw]">
        <Animate
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <img
            ref={blob5Ref}
            draggable="false"
            className="select-none"
            src="banner/blob5.png"
          />
        </Animate>
      </div>
    </div>
  );
}
