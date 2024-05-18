"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const OTHER_COURSES = [
  {
    img: "/image/flower1.jpg",
    title: "snapdragon",
    desc: "Closeness [the confidence level or probability that the predicted class (the type of flower) is correct]: 95.68%.",
    buttonLabel: "get started",
  },
  {
    img: "/image/flower2.jpg",
    title: "king protea",
    desc: "Closeness [the confidence level or probability that the predicted class (the type of flower) is correct]: 100.0%",
    buttonLabel: "get started",
  },
  {
    img: "/image/flower3.jpg",
    title: "pincushion flower",
    desc: "Closeness [the confidence level or probability that the predicted class (the type of flower) is correct]: 94.58%",
    buttonLabel: "get started",
  },
  {
    img: "/image/flower4.jpg",
    title: "spear thistle",
    desc: "Closeness [the confidence level or probability that the predicted class (the type of flower) is correct]: 99.99%",
    buttonLabel: "get started",
  },
];

export function OtherCourses() {
  return (
    <section className="pb-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Flower Variations
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Looking to detect and classify flowers.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {OTHER_COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default OtherCourses;
