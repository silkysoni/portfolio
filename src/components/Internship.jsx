import React from "react";

function Internship() {
  return (
    <div
      name="internship"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Internship
          </p>
        </div>

        <p className="text-xl mt-10">
          During my internship at Fealty Technologies, I had the opportunity to
          delve into the dynamic world of MEAN (MongoDB, Express.js, Angular,
          Node.js) stack development. This hands-on experience allowed me to
          gain valuable insights into the entire software development lifecycle,
          from designing and implementing robust backend solutions with Node.js
          and Express.js to seamlessly connecting them with the NoSQL database
          MongoDB. Working on the frontend using Angular, I honed my skills in
          creating responsive and user-friendly interfaces, while also
          integrating these components into a cohesive, full-stack application.
          The collaborative environment at Fealty Technologies fostered my
          ability to troubleshoot, problem-solve, and work efficiently within a
          team. Through this internship, I not only refined my technical prowess
          in MEAN stack development but also gained practical experience that
          significantly contributed to my overall growth as a software
          developer.
        </p>
      </div>
    </div>
  );
}

export default Internship;
