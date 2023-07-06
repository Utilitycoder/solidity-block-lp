import React from "react";
import Agric from "../Assets/Agric.png";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

const StoryCard = ({ color, title, icon, subtitle }) => (
  <div className="flex w-1/3 text-black flex-wrap justify-center items-center white-glassmorphism p-3 m-2 mr-5 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col justify-start">
      <h3 className="mt-2 text-lg">{title}</h3>
      <p className="mt-1 text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Home = () => {
  return (
    <>
      <div className="flex w-full justify-center items-center">
        <div className="flex mf:flex-row flex-col items-center justify-around md:p-20 py-12 px-4">
          <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
            <h1 className="text-1xl sm:text-5xl text-white py-1">
            Your Gateway to <br /> Learning Solidity Programming!
            </h1>
            <p className="text-left text-light mt-3 text-white font-light md:w-9/12 w-11/12 text-base">
            Are you ready to unlock the world of blockchain development? Solidity Blocks is here to guide you on your journey to becoming a proficient Solidity programmer. With our innovative platform, you can learn and master Solidity, the programming language that powers smart contracts on the Ethereum blockchain, in a fun and interactive way.
            </p>
            <div className="flex flex-wrap mt-3">
              <FaYoutube size={24} className="text-white"/>
              <span className="ml-3 text-white">See how it works</span>
            </div>
          </div>
          <div>
            <img src={Agric} alt="agric" className="w-96 mr-4" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-around bg-white text-black p-10">
            <StoryCard
              color="bg-[#2952E3]"
              title="Learn Solidity at Your Own Pace"
              icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
              subtitle="Whether you're a beginner or an experienced developer, Solidity Blocks caters to all skill levels. Our platform offers a comprehensive curriculum that starts with the basics and gradually progresses to advanced topics. You can learn at your own pace, replay lessons, and reinforce your understanding through hands-on coding exercises."
            />
            <StoryCard
              color="bg-[#8945F8]"
              title="Interactive Lessons and Tutorials"
              icon={<BiSearchAlt fontSize={21} className="text-white" />}
              subtitle="Solidity Blocks provides interactive lessons and tutorials that guide you through the learning process. Each lesson is designed to provide a step-by-step explanation of Solidity concepts, accompanied by examples and real-world use cases. As you progress, you'll build a solid foundation in Solidity programming and gain practical experience."
            />
            <StoryCard
              color="bg-[#F84550]"
              title="Solidity Code Generation"
              icon={<RiHeart2Fill fontSize={21} className="text-white" />}
              subtitle="Solidity Blocks not only helps you understand the structure and syntax of Solidity code but also generates the actual Solidity code based on the blocks you assemble. This feature allows you to bridge the gap between visual programming and actual code implementation. You can export the generated code for further exploration or use it as a starting point for your own projects."
            />
              <StoryCard
              color="bg-[#F84550]"
              title="Blockly Framework"
              icon={<RiHeart2Fill fontSize={21} className="text-white" />}
              subtitle="Solidity Blocks leverages the power of the Google Blockly framework, making it easy and intuitive for learners to grasp the fundamentals of Solidity programming. Through a drag-and-drop interface, you can assemble blocks that represent different programming concepts, allowing you to visualize and understand the structure of Solidity code."
            />
            </div>
    </>
  );
};

export default Home;
