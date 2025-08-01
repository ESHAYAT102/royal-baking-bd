import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import FadeInOnScroll from "../components/ui/FadeInOnScroll";
import Button from "../components/Button";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data.courses))
      .catch((error) => console.error("Error loading courses:", error));
  }, []);

  return (
    <Container>
      <div>
        <h2 className="text-4xl font-bold text-center mb-12">Our Courses</h2>
        {courses.length === 0 ? (
          <div className="min-h-[40vh] flex items-center justify-center">
            <p className="text-2xl text-gray-600">
              No courses available at the moment.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <FadeInOnScroll key={course.id}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
                  <div className="aspect-video flex-shrink-0">
                    <iframe
                      src={course.intro}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-black text-2xl font-semibold mb-3">
                      {course.name}
                    </h3>
                    <p className="text-dark-gray mb-4 flex-1">
                      {course.description}
                    </p>
                    <Button classNames="mt-4" link={`/courses/${course.id}`}>
                      More Details
                    </Button>
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

export default Courses;
