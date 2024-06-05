import React, { useEffect, useState } from "react";
import image1 from "../../src/assest/banner/boat.webp";
import image2 from "../assest/banner/boat2.webp";
import image3 from "../assest/banner/boat_watch.webp";
import image4 from "../assest/banner/realme.webp";

import image1Mobile from "../assest/banner/boat_mobile.webp";
import image2Mobile from "../assest/banner/boat2_mobile.webp";
import image3Mobile from "../assest/banner/boat_watch_mobile.webp";
import image4Mobile from "../assest/banner/realme_mobile.webp";

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const BannerProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const desktopImages = [image1, image2, image3, image4];
  const mobileImages = [image1Mobile, image2Mobile, image3Mobile, image4Mobile];

  const nextImage = () => {
    if (desktopImages.length - 1 > currentImage) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentImage !== 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (desktopImages.length - 1 > currentImage) {
        nextImage();
      } else {
        setCurrentImage(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="container px-1 rounded">
      <div className="h-[70vh] w-[100vw] bg-slate-200 relative object-contain cursor-pointer">
        <div className="absolute z-10 h-full w-full md:flex items-center hidden">
          <div className="flex justify-between w-full mx-7 text-2xl text-white">
            <button
              onClick={prevImage}
              className="bg-black  shadow-md rounded-full p-1 -ms-2"
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={nextImage}
              className="bg-black shadow-md rounded-full p-1 "
            >
              <FaAngleRight />
            </button>
          </div>
        </div>

        {/**desktop and tablet version */}
        <div className="hidden md:flex h-full w-full overflow-hidden">
          {desktopImages.map((imageURL, index) => (
            <div
              className="w-full h-full min-w-full min-h-full transition-all"
              key={imageURL}
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <img src={imageURL} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/**mobile version */}
        <div className="flex h-full w-full overflow-hidden md:hidden">
          {mobileImages.map((imageURL, index) => (
            <div
              className="w-full h-full min-w-full min-h-full transition-all"
              key={imageURL}
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <img src={imageURL} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
