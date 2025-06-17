import { useEffect, useState } from "react";
import Container from "../Container";
import FadeInOnScroll from "../ui/FadeInOnScroll";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  return (
    <div id="reviews" className="pt-20">
      <FadeInOnScroll direction="up" delay={0.2}>
        <h1 className="text-5xl font-medium text-center">Reviews</h1>
      </FadeInOnScroll>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <FadeInOnScroll
              key={review.id}
              direction="up"
              delay={0.4 + index * 0.1}
            >
              <div className="bg-dark-gray p-6 rounded-xl shadow-md text-white">
                <p className="text-xl font-semibold mb-2">{review.name}</p>
                <p className="text-gray-300">{review.text}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </Container>
    </div>
  );
}
