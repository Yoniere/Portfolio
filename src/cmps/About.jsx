import React from "react";

export function About() {
  return (
    <section className="about-app container">
      <h2 className="name">Yonatan Erez</h2>
      <hr></hr>

      <p className="my-story">
        I graduated with a degree in B.Sc. in Industrial Engineering and
        Management specializing in Information Systems in 2016. From 2017 till
        2022 I have been working at LG Electronics as a Retail Product Manager.
        During this time, I was awarded for 2 consecutive years 2019 - Best
        Employee of the Year for significant increase of revenue and profit,
        2020 Middle East & Africa Employee of the Year for achieving sales
        target of strategic product. By the end of 2021 I decided to take a big
        step and change my current field to my real passion - development. At
        the beginning of 2022 my new career journey began and I joint a 4 months
        Web Development bootcamp program at Coding Academy. I am proud to
        introduce my final project with 2 other teammates: Airyny - marketplace
        for landlords and accommodation seekers, inspired by Airbnb.com:
        https://protected-reaches-97996.herokuapp.com/#/ So, here I am looking
        for my next challenge as Fullstack | Frontend | Web developer rule.
        About me, I consider myself as either team player and individual. I am a
        self learner and highly motivated, love facing challenges and enriching
        my knowledge. What I love the best in development is the satisfaction of
        solving a problem after facing it for some time. My specialties include
        responsive design principles, single page applications, Model View
        Controller (MVC) methods of organizing code. So far I have Vue.js, Vuex,
        React.js, Redux Frameworks and APIs and REST with Node.js, MongoDB,
        JavaScript(ES6), TypeScript, HTML5, CSS3, SASS, jQuery, Bootstrap,
        Git/GitHub under my belt.
      </p>

      <h3 className="skills-header">My Skills</h3>

      <p className="skills">Vue(v3).js * Vuex * Single-Page-Applications</p>

      <a href="../../Yonatan Erez CV.pdf" download="Yonatan Erez CV">
        <button className="resume-download">
          <i className="fa fa-download"></i>
          Download Resume
        </button>
      </a>
    </section>
  );
}
