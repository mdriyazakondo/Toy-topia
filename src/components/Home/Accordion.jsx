import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Accordion() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      className="w-full max-w-3xl mx-auto mt-10 space-y-6"
      data-aos="fade-up"
    >
      <h3
        className="text-4xl font-bold text-center text-purple-700 mb-6"
        data-aos="zoom-in"
      >
        Fun FAQ for Kids
      </h3>

      <div
        className="collapse collapse-arrow bg-purple-50 border-2 border-purple-200 rounded-xl hover:bg-purple-100 transition-all duration-300"
        data-aos="fade-right"
      >
        <input type="radio" name="kids-accordion" defaultChecked />
        <div className="collapse-title text-lg font-semibold text-purple-700">
          How do I make my first toy collection?
        </div>
        <div className="collapse-content text-purple-800 text-sm">
          Start by choosing your favorite toys at home. Arrange them in a
          special box or shelf. Make sure each toy has its little name tag or
          label to keep everything organized.
        </div>
      </div>

      <div
        className="collapse collapse-arrow bg-purple-50 border-2 border-purple-200 rounded-xl hover:bg-purple-100 transition-all duration-300"
        data-aos="fade-left"
      >
        <input type="radio" name="kids-accordion" />
        <div className="collapse-title text-lg font-semibold text-purple-700">
          How can I play safely with toys?
        </div>
        <div className="collapse-content text-purple-800 text-sm">
          Always play with toys on a soft surface like a carpet or play mat.
          Avoid running around with small toys. Make sure tiny pieces don’t go
          in your mouth for safety.
        </div>
      </div>

      <div
        className="collapse collapse-arrow bg-purple-50 border-2 border-purple-200 rounded-xl hover:bg-purple-100 transition-all duration-300"
        data-aos="fade-right"
      >
        <input type="radio" name="kids-accordion" />
        <div className="collapse-title text-lg font-semibold text-purple-700">
          How do I keep my toys clean and neat?
        </div>
        <div className="collapse-content text-purple-800 text-sm">
          Wipe your toys with a soft cloth regularly. Store them in boxes or
          baskets after playing. Organizing your toys helps you find them easily
          and keeps them in great shape.
        </div>
      </div>

      <div
        className="collapse collapse-arrow bg-purple-50 border-2 border-purple-200 rounded-xl hover:bg-purple-100 transition-all duration-300"
        data-aos="fade-left"
      >
        <input type="radio" name="kids-accordion" />
        <div className="collapse-title text-lg font-semibold text-purple-700">
          Can I share my toys with friends?
        </div>
        <div className="collapse-content text-purple-800 text-sm">
          Yes! Sharing your toys is fun and helps make new friends. Always ask
          politely and take turns. Remember to return toys to their original
          place when you’re done playing together.
        </div>
      </div>

      <div
        className="collapse collapse-arrow bg-purple-50 border-2 border-purple-200 rounded-xl hover:bg-purple-100 transition-all duration-300"
        data-aos="fade-up"
      >
        <input type="radio" name="kids-accordion" />
        <div className="collapse-title text-lg font-semibold text-purple-700">
          How do I create my own toy game?
        </div>
        <div className="collapse-content text-purple-800 text-sm">
          Think of a fun story or adventure for your toys. Set rules and roles
          for each toy character. Invite friends or siblings to join and make it
          even more exciting. Use your imagination!
        </div>
      </div>
    </div>
  );
}

export default Accordion;
