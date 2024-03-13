import React from "react";

const LearningBegins = () => {
  return (
    <section className="sm:px-20 px-4 py-10 md:flex items-center gap-4 md:h-screen h-auto">
      <div className="md:w-4/12 mx-auto space-y-4">
        <h4>Enroll into Programs</h4>
        <h1 className="text-xl font-bold">Learning Begins</h1>
        <p>
          Gather a string sense of community in our school community and social
          approaches
        </p>
        <div>
          <h3 className="font-bold">Video Confrencing</h3>
          <ul className="text-sm px-8">
            <li className="list-disc"> Available in WPLMS education</li>
            <li className="list-disc">K-12 and Schooling Supported</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Online Examinations</h3>
          <ul className="text-sm px-8">
            <li className="list-disc">Proctored quizzes</li>
            <li className="list-disc">Online time based examination system</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">University and Schools</h3>
          <ul className="text-sm px-8">
            <li className="list-disc">Introductory panels</li>
            <li className="list-disc">Special discounts for new referrals</li>
          </ul>
        </div>
      </div>
      <div className="md:w-8/12 md:block hidden">
        <section className="flex items-center justify-between gap-4 mx-auto">
          <div className="w-1/2">
            <img
              className="h-[80vh] object-cover rounded-xl"
              src="/learn.jpg"
              alt=""
            />
          </div>
          <div className="w-1/2 space-y-4">
            <img
              className="h-[39vh] w-full rounded-xl"
              src="/hero.jpg"
              alt=""
            />
            <img className="h-[39vh] rounded-xl" src="/learn1.jpg" alt="" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default LearningBegins;
