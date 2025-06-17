import Container from "../Container";
import FadeInOnScroll from "../ui/FadeInOnScroll";

export default function About() {
  return (
    <div id="about" className="pt-20">
      <FadeInOnScroll direction="up" delay={0.2}>
        <h1 className="text-5xl font-medium text-center">About</h1>
      </FadeInOnScroll>
      <Container>
        <div className="font-medium">
          <FadeInOnScroll direction="up" delay={0.4}>
            <div>
              <h1 className="text-2xl font-semibold text-center mb-4">
                The Story Behind Royal Baking BD
              </h1>
              <p className="text-center mb-8 font-semibold">
                Welcome to Royal Baking BD - where every cake tells a story and
                every bite brings joy.
              </p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll direction="up" delay={0.6}>
            <div>
              <p className="text-justify">
                Born in the heart of Bangladesh, Royal Baking BD started from a
                small home kitchen with a big dream: to bring happiness to
                people's lives through the warmth of freshly baked goods. What
                began as a personal passion has now grown into a trusted name
                for handcrafted cakes and desserts, loved by families and
                dessert lovers across the country. At Royal Baking BD, we
                believe baking is not just about mixing ingredients, it's about
                blending memories, emotions, and creativity. From
                custom-designed cakes for birthdays and weddings to delightful
                cupcakes, pastries, and cookies — everything we make is infused
                with love, quality, and a personal touch. Our focus has always
                been on maintaining the highest standards of hygiene, taste, and
                aesthetics — because we understand that a cake is not just food,
                it's part of your celebration. But we're more than just a
                bakery. We are a community — a growing circle of baking
                enthusiasts, learners, and dreamers. Through our online and
                offline baking classes, we have empowered hundreds of students
                to learn the art and science of baking — whether as a joyful
                hobby or as a stepping stone to launching their own baking
                businesses. At Royal Baking BD, we take pride in making learning
                fun, simple, and hands-on. What sets us apart is not just our
                taste, but the experience we create. We are committed to
                providing excellent customer service, creative and trendy cake
                designs, and a friendly, warm hearted connection with every
                client and student. Our goal is to make everyone feel special —
                whether they're enjoying a slice of cake or learning how to make
                one themselves. Our vision is to become the most trusted and
                loved homemade baking brand in Bangladesh — a place where
                passion meets perfection, and where dreams are baked into
                reality. So, whether you're here to place your next cake order,
                join a baking class, or just explore the sweet world of Royal
                Baking BD — we welcome you with open arms and an oven full of
                love. Royal Baking BD - Crafted with care. Baked with love.
                Shared with joy.
              </p>
              <p className="font-semibold mt-4 text-right">
                — Sania Akter (Founder Of Royal Baking BD)
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </Container>
    </div>
  );
}
