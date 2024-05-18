"use client";

import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/flower_bg.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography
            variant="h1"
            color="white"
            className="md:max-w-full lg:max-w-3xl"
          >
            Flower Classification Using Deep Learning
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
          >
            Introducing the ultimate tool for flower enthusiasts, botanists, and nature lovers. Our advanced image classification model, trained on the renowned Oxford Flower Dataset, can effortlessly identify a wide array of floral species with unparalleled accuracy.
          </Typography>
          <div>
            
            <Button variant="gradient" color="white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
