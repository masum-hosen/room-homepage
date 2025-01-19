import React, { useState } from "react";
import arrow from "../images/icon-arrow.svg";
import left from "../images/icon-angle-left.svg";
import right from "../images/icon-angle-right.svg";

const data = [
  {
    id: 1,
    title: "Discover innovative ways to decorate",
    desc: "  We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in yourown style with our collection and make your property a reflection of you and what you love.",
    mobile: "./images/mobile-image-hero-1.jpg",
    desktop: "./images/desktop-image-hero-1.jpg",
  },
  {
    id: 2,
    title: "We are available all across the globe",
    desc: "  With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our  store locator. Any questions? Don't hesitate to contact us today.",
    mobile: "./images/mobile-image-hero-2.jpg",
    desktop: "./images/desktop-image-hero-2.jpg",
  },
  {
    id: 3,
    title: "Manufactured with the best materials",
    desc: " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology  to ensure that every product is made as perfect and as consistent as possible. With three decades of  experience in this industry, we understand what customers want for their home and office.",
    mobile: "./images/mobile-image-hero-3.jpg",
    desktop: "./images/desktop-image-hero-3.jpg",
  },
];

export default function Showcase() {
  const [items] = useState(data);
  const [slideIndex, setSlideIndex] = useState(1);

  function nextSlide() {
    if (slideIndex !== items.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === items.length) {
      setSlideIndex(1);
    }
  }

  function previousSlide() {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(items.length);
    }
  }

  return (
    <>
      <section>
        {items.map((item, index) => {
          return (
            <article
              key={item.id}
              className={
                slideIndex === index + 1
                  ? "grid grid-cols-1 lg:grid-cols-2 lg:place-items-center"
                  : "hidden"
              }
            >
              <div className="relative">
                <picture>
                  <source
                    media="(min-width:768px)"
                    srcSet={item.desktop}
                    alt={item.title}
                  />
                  <img src={item.mobile} alt={item.title} className="w-full" />
                </picture>

                <ul className="absolute -bottom-2 right-0 flex">
                  <li>
                    <button
                      onClick={previousSlide}
                      className="bg-black hover:bg-neutral-700 transition-all duration-200"
                    >
                      <img src={left} className="py-4 px-6" alt="left img"/>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={nextSlide}
                      className="bg-black hover:bg-neutral-700 transition-all duration-200"
                    >
                      <img src={right}  className="py-4 px-6" alt="right img"/>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="p-8 lg:p-12">
                <h1
                  className="text-3xl text-slate-900 lg:text-5xl "
                  style={{
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </h1>
                <p className="text-slate-900 opacity-75 my-6">{item.desc}</p>
                <button
                  className="flex items-center gap-4 uppercase hover:opacity-55"
                  style={{
                    letterSpacing: "0.5rem",
                  }}
                >
                  Shop Now
                  <img src={arrow} alt="arrow img"/>
                </button>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
