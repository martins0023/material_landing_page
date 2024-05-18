"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  ChartPieIcon,
  CloudArrowDownIcon,
  CloudIcon,
  Cog6ToothIcon,
  KeyIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

import BackgroundCard from "@/components/background-card";

interface OptionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

function Option({ icon: Icon, title, children }: OptionProps) {
  return (
    <div className="flex gap-4">
      <div className="mb-4">
        <Icon className="text-gray-900 h-6 w-6" />
      </div>
      <div>
        <Typography variant="h5" color="blue-gray" className="mb-2" {...({} as any)}>
          {title}
        </Typography>
        <Typography className="mb-2 md:w-10/12 font-normal !text-gray-500" {...({} as any)}>
          {children}
        </Typography>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h2" className="text-center mb-2" color="blue-gray" {...({} as any)}>
      Results and Impact
      </Typography>
      <Typography
        variant="lead"
        className="mb-16 w-full text-center font-normal !text-gray-500 lg:w-10/12"
        {...({} as any)}
      >
        Our project aims to push the boundaries of flower classification, contributing to 
        advancements in computer vision and deep learning. Accurate flower classification 
        has numerous applications, including:
      </Typography>
      <div className="mt-8">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <BackgroundCard title="Explore Research Impact">
            Deep learning-based flower classification Trained on the Oxford Flower Dataset with 102 categories Handles variations in scale, pose, and lighting conditions
          </BackgroundCard>
          <div className="space-y-8">
            <div className="my-4">
              <Option icon={CloudIcon} title="Agriculture">
                Supporting farmers in monitoring crop health and identifying plant diseases.
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={ChartPieIcon} title="Environmental Conservation">
              Aiding in the study and preservation of plant biodiversity.
              </Option>
            </div>
            <Option icon={Cog6ToothIcon} title="Botanical Research">
              Assisting botanists in identifying and categorizing plant species.
            </Option>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-8">
            <div className="my-4">
              <Option icon={KeyIcon} title="Transfer Learning">
                Applying pre-trained models to leverage existing knowledge and accelerate training.
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={UsersIcon} title="Data Augmentation">
              Enhancing the dataset with various transformations to improve the model’s robustness.
              </Option>
            </div>
            <Option icon={CloudArrowDownIcon} title="Convolutional Neural Networks (CNNs)">
              Utilizing CNNs for their proven efficacy in image recognition tasks.
            </Option>
          </div>
          <BackgroundCard title="Our Approach">
            Using state-of-the-art deep learning algorithms, we train our model to 
            understand and classify these intricate variations effectively. Our 
            methodology includes
          </BackgroundCard>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
