"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

const PopularPosts = () => {
  return (
    <div className="popular-posts mb-8">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000} leftControl=' ' rightControl=' '>
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
            width={100}
            height={100}
          />
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
            width={100}
            height={100}
          />
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
            width={100}
            height={100}
          />
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
            width={100}
            height={100}
          />
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
            width={100}
            height={100}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default PopularPosts;
