"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/feature-card";

const FEATURES = [
  {
    icon: InboxIcon,
    title: "Deep Learning Approach:",
    description:
      "Deep learning models, such as convolutional neural networks (CNNs), have shown excellent performance in image classification tasks, including flower classification.",
  },
  {
    icon: CheckCircleIcon,
    title: "Interpretability and Explainability",
    description:
      "Provide insights into the model's decision-making process to build trust and facilitate further improvements.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Real-world Considerations",
    description: "Explore ways to handle edge cases, such as new or unseen flower species, to improve the model's robustness.",
  },
];

export function OnlineCourse() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src="/image/flower_banner.jpg"
            className="h-full max-h-[500px] w-full object-cover scale-110"
            alt="online course"
          />
        </div>
        <div className="col-span-2 lg:pl-24">
          <Typography variant="h2" color="blue-gray" className="mb-4" {...({} as any)}>
          Explore the solutions
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
            {...({} as any)}
          >
            Unlock the Secrets of the&apos; Flower Kingdom with our AI-Powered Image Classification.
          </Typography>

          <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
            {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineCourse;
