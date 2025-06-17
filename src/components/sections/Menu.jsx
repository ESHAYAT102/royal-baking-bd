import { ButtonFull } from "../Button";
import Container from "../Container";
import FadeInOnScroll from "../ui/FadeInOnScroll";

export default function Menu() {
  return (
    <div id="menu" className="pt-20">
      <FadeInOnScroll direction="up" delay={0.2}>
        <h1 className="text-5xl font-medium text-center">Menu</h1>
      </FadeInOnScroll>
      <Container>
        <div className="grid grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-10">
          <FadeInOnScroll direction="left" delay={0.4}>
            <div className="col-span-1">
              <img
                className="rounded-2xl h-full w-full object-cover"
                src="menu/menu.png"
                alt="Menu Image"
              />
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll direction="right" delay={0.6}>
            <div className="col-span-1">
              <img
                className="rounded-2xl h-full w-full object-cover"
                src="menu/menu.png"
                alt="Menu Image"
              />
            </div>
          </FadeInOnScroll>
        </div>
        <FadeInOnScroll direction="up" delay={0.8}>
          <div className="mt-12 w-full">
            <ButtonFull link="https://www.facebook.com/banasree2021">
              See All
            </ButtonFull>
          </div>
        </FadeInOnScroll>
      </Container>
    </div>
  );
}
