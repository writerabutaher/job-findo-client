import React from "react";
import Marquee from "react-fast-marquee";

const JobTitleMarquee = () => {
  const jobTitle = [
    "Android Software Engineer",
    "Social Media Manager",
    "Financial Manager",
    "Data Analyst",
    "Android Software Engineer",
    "Social Media Manager",
    "Marketing Coordinator",
    "Android Software Engineer",
    "Android Software Engineer",
    "Social Media Manager",
    "Financial Manager",
    "Data Analyst",
    "Android Software Engineer",
    "Social Media Manager",
    "Marketing Coordinator",
    "Android Software Engineer",
  ];

  return (
    <div className="pb-20">
      <Marquee
        pauseOnHover={true}
        className="flex gap-4 py-5 border-t border-b"
      >
        {jobTitle.map((title, index) => (
          <h1
            className={`${
              index % 2 == 0 ? "text-blue-600" : "text-gray-600"
            } text-xl cursor-pointer hover:text-blue-600`}
          >
            {" "}
            <span className="px-4 text-gray-500">/</span> {title}
          </h1>
        ))}
      </Marquee>
      <Marquee
        pauseOnHover={true}
        direction={"right"}
        className="flex gap-4 py-5 border-b"
      >
        {jobTitle.map((title, index) => (
          <h1
            className={`${
              index % 2 == 0 ? "text-blue-600" : "text-gray-600"
            } text-xl cursor-pointer hover:text-blue-600`}
          >
            {" "}
            <span className="px-4 text-gray-500">/</span> {title}
          </h1>
        ))}
      </Marquee>
    </div>
  );
};

export default JobTitleMarquee;
