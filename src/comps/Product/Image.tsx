import previous from "/icon-previous.svg";
import next from "/icon-next.svg";
import { useState } from "react";

interface ImageProps {
  img: {
    one: string;
    two: string;
    three: string;
    four: string;
  };
}

export default function Image({ img }: ImageProps) {
  const [slide, setSlide] = useState(0);
  const images = Object.values(img);
  const shownImage = images[slide];
  let id = 0;
  const newImages = images.map((item) => ({ url: item, id: id++ }));

  function handleSlides(side: "previous" | "next") {
    if (side === "previous") {
      if (slide === 0) {
        setSlide(Object.keys(img).length - 1);
      }
      setSlide((pS) => pS - 1);
    }

    if (side === "next") {
      if (slide === Object.keys(img).length - 1) {
        setSlide(0);
      }
      setSlide((pS) => pS + 1);
    }
  }

  return (
    <div className="lg: relative">
      <div className="flex flex-col gap-5">
        <div className="lg:h-110 lg:w-110 lg:overflow-hidden lg:rounded-md">
          <img src={shownImage} alt="Product Image" />
        </div>
        <div className="hidden justify-between lg:flex">
          {newImages.map((item) => (
            <button
              key={item.id}
              className={`cursor-pointer overflow-hidden rounded-md ${slide === item.id ? "border-my-orange border-2" : null}`}
              onClick={() => {
                setSlide(item.id);
              }}
            >
              <div className="h-20 w-20">
                <img
                  src={item.url}
                  alt=""
                  className={`${slide === item.id ? "opacity-30" : null}`}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={() => {
          handleSlides("previous");
        }}
        className="absolute top-1/2 left-5 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-[50%] bg-white lg:hidden"
      >
        <span className="flex w-4 items-center justify-center">
          <img src={previous} alt="Go previous image button" />
        </span>
      </button>
      <button
        onClick={() => {
          handleSlides("next");
        }}
        className="absolute top-1/2 right-5 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-[50%] bg-white lg:hidden"
      >
        <span className="flex w-4 items-center justify-center">
          <img src={next} alt="Go previous image button" />
        </span>
      </button>
    </div>
  );
}
