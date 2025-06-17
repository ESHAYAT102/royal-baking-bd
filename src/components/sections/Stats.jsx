import "../../index.css";
import Container from "../Container";
import CountUp from "../ui/CountUp";
import FadeInOnScroll from "../ui/FadeInOnScroll";

export default function Stats() {
  return (
    <Container>
      <div className="grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-10 text-white">
        <FadeInOnScroll direction="left" delay={0.2}>
          <div className="col-span-1 bg-dark-gray p-8 rounded-2xl flex flex-col lg:flex-row gap-3 lg:gap-1 text-center justify-between items-center">
            <p className="text-2xl font-semibold ">Satisfied Customer</p>
            <h1 className="text-5xl font-bold">
              <CountUp
                from={0}
                to={2200}
                separator=","
                direction="up"
                duration={1}
              />
              +
            </h1>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll direction="right" delay={0.4}>
          <div className="col-span-1 bg-dark-gray p-8 rounded-2xl flex flex-col lg:flex-row gap-3 lg:gap-1 text-center justify-between items-center">
            <h1 className="text-5xl font-bold">
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
              />
              %
            </h1>
            <p className="text-2xl font-semibold ">Authentic Recipes</p>
          </div>
        </FadeInOnScroll>
      </div>
    </Container>
  );
}
