import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/js.png";
import github from "../assets/github.jpg";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import mongodb from "../assets/mongodb.png";
import angular from "../assets/angular.png";
import node from "../assets/nodejs.png";

function Experience() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: angular,
      title: "ANGULAR",
      style: "shadow-white",
    },
    {
      id: 8,
      src: node,
      title: "NODEJS",
      style: "shadow-green-300",
    },
    {
      id: 9,
      src: mongodb,
      title: "MONGODB",
      style: "shadow-pink-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b to-gray-800 from-black w-full md:h-screen mx-auto py-6 px-4"
    >
      <div className="max-w-screen-lg mx-auto md:p-4 flex flex-col justify-center h-full text-white">
        <div>
          <p className="text-4xl border-b-4 border-gray-500 inline font-bold">
            Experience
          </p>
          <p className="py-5 md:py-3 lg:py-5">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-4 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-1 rounded-lg ${style}`}
            >
              <img src={src} alt={src} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
