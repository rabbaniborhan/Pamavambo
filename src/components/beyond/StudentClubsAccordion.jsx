"use client";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const StudentClubsAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Data structure to handle the large volume of club information
  const clubData = [
    {
      category: "Academic Clubs (Intellectual / Technological / Engineering)",
      clubs: [
        {
          name: "20/20 Design Council",
          desc: "The 20/20 Design Council works closely with Head of School Murray and the architects from the Sasaki Architecture Firm to provide student input on new construction projects on campus.",
        },
        {
          name: "Learning Leadership at Lawrenceville",
          desc: "Learning Leadership at Lawrenceville teaches students how to establish positive leadership roles on campus and effectively create change within our community.",
        },
        {
          name: "3D Design Club",
          desc: "We aim to foster design thinking skills through introducing 3D design and modeling software to those who would like to learn and explore more.",
        },
        {
          name: "Linguistics Club",
          desc: "The Linguistics Club aims to introduce and educate students on the syntaxes and semantics of various languages through hosting entertaining documentary sessions to solving logical problems.",
        },
        {
          name: "Architecture Club",
          desc: "Our goal is to focus on learning the basics of Architecture by studying buildings around campus as well as buildings around the world.",
        },
        {
          name: "Making Philosophy Easy",
          desc: "Our club has one mission: to make philosophy accessible to everybody and to provide new outlooks for our club member's lives.",
        },
      ],
    },
    {
      category: "Athletic and Game Clubs (Sports / Hobbies / General Interest)",
      clubs: [
        {
          name: "Varsity E-Sports",
          desc: "Focuses on competitive gaming and strategy development in a team-based environment.",
        },
        {
          name: "Chess Strategy Group",
          desc: "Dedicated to mastering opening theories and endgame tactics through weekly tournaments.",
        },
      ],
    },
    {
      category: "Creative Clubs (Performance / Visual / Film / Music)",
      clubs: [
        {
          name: "Lawrenceville Film Society",
          desc: "A group dedicated to the appreciation of cinema and the production of student-led short films.",
        },
        {
          name: "The Big Red Zine",
          desc: "A creative writing and visual arts publication highlighting student voices.",
        },
      ],
    },
    {
      category: "Cultural and Religious Clubs",
      clubs: [
        {
          name: "Multicultural Student Union",
          desc: "Promotes awareness and celebration of the diverse backgrounds within our student body.",
        },
        {
          name: "Interfaith Council",
          desc: "A space for students of all spiritual backgrounds to discuss and share their traditions.",
        },
      ],
    },
    {
      category: "Scientific Clubs (Environmental / Agricultural / Science)",
      clubs: [
        {
          name: "Eco-Alliance",
          desc: "Leading sustainability initiatives and environmental advocacy on campus.",
        },
        {
          name: "Robotics Engineering",
          desc: "Hands-on experience building and programming robots for regional competitions.",
        },
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8">
          Student Clubs and Organizations
        </h2>

        <p className="text-gray-600 font-light leading-relaxed mb-12 max-w-4xl">
          Student Clubs and Organizations offer the opportunity for students to
          discover and pursue personal interests — from academic topics to
          performance to community development and service — and to meet and
          learn from like-minded Lawrentians.
        </p>

        {/* Accordion List */}
        <div className="border-t border-gray-200">
          {clubData.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex items-center py-4 px-4 transition-all duration-300 group ${
                  openIndex === index
                    ? "bg-[#9b031f] text-white"
                    : "hover:bg-gray-50"
                }`}
              >
                {/* Icon Wrapper */}
                <div
                  className={`mr-4 flex h-8 w-10 items-center justify-center border-r pr-4 transition-colors ${
                    openIndex === index ? "border-white/30" : "border-gray-300"
                  }`}
                >
                  <ChevronRight
                    className={`h-6 w-6 transition-transform duration-300 ${
                      openIndex === index
                        ? "rotate-90 text-white"
                        : "text-gray-400"
                    }`}
                  />
                </div>

                <span className="text-sm md:text-lg font-medium text-left">
                  {item.category}
                </span>
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? " opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-8 md:p-12 bg-white">
                  {/* Two-column grid for clubs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                    {item.clubs.map((club, i) => (
                      <div key={i} className="flex flex-col space-y-2">
                        <h4 className="font-bold text-gray-900 text-base md:text-lg">
                          {club.name}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed font-light">
                          {club.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentClubsAccordion;
