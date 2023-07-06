import React from "react";

const Paragraph = ({ content }) => (
    <p className="mb-4">{content}</p>
);

const Story = () => {
  return (
    <div className="w-full min-h-screen min-w-fit">
      <div class="flex items-center justify-center bg-white">
        <div className="text-black p-5 text-justify mx-10">
          <h1 className="mb-4 font-bold text-xl" >Introducing Solidity Blocks: My Passion Project as a Rising Blockchain
          Developer
          </h1> 
          <Paragraph content="Hey there! I'm Abubakar, a student at ALX Africa, and I have a
          burning passion for blockchain technology. Over the years, I've
          immersed myself in the world of smart contracts, honing my skills in
          writing Solidity code. But my journey doesn't stop there. As part of
          the ALX curriculum, I set out to create a portfolio project that would
          not only showcase my skills but also empower others to dive into the
          fascinating realm of blockchain development. And that's how Solidity
          Blocks came to life." />

          <Paragraph content="Solidity Blocks is more than just a portfolio
          project for me; it's a labor of love that aims to inspire and educate
          individuals who are curious about Solidity programming. I poured my
          heart and soul into crafting this app, drawing upon my years of
          experience and my unwavering dedication to blockchain technology." /> 
          
          <Paragraph content ="I understand the challenges that newcomers face when entering the world
          of blockchain programming. I've experienced the frustration of
          grappling with complex code and the fear of making mistakes. But I've
          also witnessed the exhilaration of seeing a smart contract come to
          life, the sheer empowerment that comes with creating something that
          can make a real difference in the world." /> 
          
          <Paragraph content ="Through Solidity Blocks, I
          want to share my journey with you, and together, we can embark on an
          exciting adventure of learning and growth. As you explore the app,
          you'll find a user-friendly drag-and-drop interface that allows you to
          assemble Solidity code blocks effortlessly. This visual approach
          demystifies the complexities of Solidity programming and makes it
          accessible to all." />
          
          <Paragraph content =" I've designed Solidity Blocks to be more than just
          a learning tool; it's an emotional experience. It's about the joy of
          creation, the thrill of discovering new possibilities, and the
          satisfaction of overcoming challenges. I want you to feel that same
          passion that I feel every time I write a smart contract." />
          
          <Paragraph content =" As you progress through the app, you'll discover interactive lessons and
          tutorials that guide you step-by-step through the learning process.
          I've included real-world examples and practical exercises to ensure
          that you not only understand the concepts but also gain hands-on
          experience." />
          
          <Paragraph content ="One of the most exciting aspects of Solidity Blocks is the
          real-time feedback feature. As you drag and drop blocks to create
          Solidity code, the app provides immediate feedback, highlighting
          errors and offering suggestions to help you improve. This instant
          feedback mechanism accelerates your learning and allows you to become
          a proficient Solidity programmer." />
          
          <Paragraph content =" But Solidity Blocks is more than
          just an app; it's a community. Join me and fellow learners on this
          journey. Share your projects, collaborate on coding challenges, and
          connect with others who share your passion for blockchain technology.
          Together, we can create something truly remarkable." />
          
          <Paragraph content ="So, are you ready
          to dive into the world of Solidity programming? Let Solidity Blocks be
          your guide. Together, we can unlock the potential of blockchain
          technology and build a future that is shaped by our collective
          imagination. The journey starts now, and I can't wait to see what
          we'll create together. Let's make our mark on the blockchain world
          with Solidity Blocks!" />

          <p className="mb-4"> Check out the other things I am working on <a href="https://github.com/utilitycoder" className="text-green font-bold hover:text-blue">here.</a></p>
        </div>
      </div>
    </div>
  );
};

export default Story;
