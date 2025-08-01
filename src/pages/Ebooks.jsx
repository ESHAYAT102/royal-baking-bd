import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import FadeInOnScroll from "../components/ui/FadeInOnScroll";
import Button from "../components/Button";

const Ebooks = () => {
  const [ebooks, setEbooks] = useState([]);

  useEffect(() => {
    fetch("/ebooks.json")
      .then((res) => res.json())
      .then((data) => setEbooks(data.ebooks))
      .catch((error) => console.error("Error loading ebooks:", error));
  }, []);

  return (
    <Container>
      <div>
        <h2 className="text-4xl font-bold text-center mb-12">Our Ebooks</h2>
        {ebooks.length === 0 ? (
          <div className="min-h-[40vh] flex items-center justify-center">
            <p className="text-2xl text-gray-600">
              No ebooks available at the moment.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ebooks.map((ebook) => (
              <FadeInOnScroll key={ebook.id}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-black text-2xl font-semibold mb-3">
                      {ebook.name}
                    </h3>
                    <p className="text-dark-gray mb-4 flex-1">
                      {ebook.description}
                    </p>
                    <div className="mt-4 flex align-middle justify-between items-center">
                      <Button classNames="w-full" link={`/ebooks/${ebook.id}`}>
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Ebooks;
