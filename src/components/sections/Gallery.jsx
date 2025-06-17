import { ButtonFull } from "../Button";
import Container from "../Container";
import FadeInOnScroll from "../ui/FadeInOnScroll";

export default function Gallery() {
  return (
    <div id="gallery" className="pt-20">
      <FadeInOnScroll direction="up" delay={0.2}>
        <h1 className="text-5xl font-medium text-center">Gallery</h1>
      </FadeInOnScroll>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-16 gap-10">
          <FadeInOnScroll
            direction="left"
            delay={0.4}
            className="col-span-1 lg:col-span-6"
          >
            <div className="grid grid-rows-2 gap-10">
              <div className="col-span-1">
                <img
                  className="rounded-2xl object-cover h-fit lg:h-56 w-full"
                  src="gallery/image (25).jpg"
                  alt="Gallery Image"
                />
              </div>
              <div className="col-span-1">
                <img
                  className="rounded-2xl object-cover h-fit lg:h-56 w-full"
                  src="gallery/image (7).jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll
            direction="right"
            delay={0.6}
            className="col-span-1 lg:col-span-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="col-span-1">
                <img
                  className="rounded-2xl h-fit lg:h-122 w-full object-cover"
                  src="gallery/image (19).jpg"
                  alt="Gallery Image"
                />
              </div>
              <div className="col-span-1">
                <img
                  className="rounded-2xl h-fit lg:h-122 w-full object-cover"
                  src="gallery/image (16).jpg"
                  alt="Gallery Image"
                />
              </div>
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
