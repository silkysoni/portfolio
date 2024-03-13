import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-6"
    >
      <div className="max-w-screen-lg mx-auto py-3 flex flex-col justify-center w-full h-full p-3">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-[3rem]">
          Hello, I'm Silky, a diligent and ambitious MCA (Master of Computer
          Applications) student on the lookout for a rewarding career in web
          development. My academic journey has been enriched with comprehensive
          coursework covering a broad spectrum of computer science disciplines,
          allowing me to develop a robust foundation. With a specific focus on
          web technologies, I've cultivated expertise in HTML, CSS, and
          JavaScript, and I've had the opportunity to explore popular web
          development frameworks like React.js.
        </p>
        <br />
        <p className="text-xl">
          As I approach the completion of my MCA, I am excited to transition
          from academic to the professional realm and bring my theoretical
          knowledge to life in practical applications. My passion lies in
          creating seamless and visually appealing web experiences, and I am
          eager to contribute my skills to a dynamic and forward-thinking team.
        </p>
        <br />
        <p className="text-xl">
          Throughout my studies, I've demonstrated a commitment to continuous
          learning, adaptability, and a collaborative spirit. I have also
          engaged in personal projects that allowed me to apply classroom
          concepts to real-world scenarios, honing my problem-solving abilities
          and fostering a keen eye for detail. In my pursuit of a full-time
          position in web development, I am not only seeking an opportunity to
          showcase my technical proficiency but also to learn from seasoned
          professionals, contribute meaningfully to projects, and immerse myself
          in the fast-evolving landscape of web technologies. I am confident
          that my blend of academic knowledge, hands-on experience, and
          eagerness to learn will make me a valuable asset to any organization
          looking for a dedicated and resourceful web developer.
        </p>
      </div>
    </div>
  );
}

export default About;
