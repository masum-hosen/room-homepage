import React from "react";
import aboutDark from "../images/image-about-dark.jpg";
import aboutLight from "../images/image-about-light.jpg";
export default function SectionB() {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-3 items-center">
        <article>
          <img src={aboutDark} alt="" className="w-full" />
        </article>
        <article className="px-6 lg:px-8 ">
          <h2
            className="font-medium text-1xl lg:text-3xl uppercase"
            style={{
              letterSpacing: "0.1rem",
              fontWeight: 500,
            }}
          >
            About our furniture
          </h2>
          <p className="text-slate-900 opacity-75  ">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </article>
        <article>
          <img src={aboutLight} alt="" className="w-full" />
        </article>
      </section>
    </>
  );
}
