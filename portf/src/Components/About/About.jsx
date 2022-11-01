import React from 'react';
import './About.css';
export const About = () => {



  return (
    <div>
      <div className="about-container" id="about">
        <div className="about-left">
          <h1>
            AB
            <span>O</span>
            UT ME
          </h1>
          <div className="about-left-inside">
            <ul>
              <li>
                {' '}
                Hello! My name is Sachin SG and I enjoy creating things that
                live on the internet.
              </li>
              <li>
                {' '}
                I'm a passionate Developer, with strong administrative and
                communication skills, good attention to detail and the ability
                to write efficient code using HTML, CSS, JS, Reactjs.
              </li>
              <li>
                {' '}
                My interest in web development started back last year when I was
                trying to edit things on the web, that taught me a lot about
                HTML & CSS.
              </li>
              <li>
                {' '}
                As I grow and flourish as a Developer, one thing which keeps me
                going is my inquisitiveness for discovering new things every
                day.
              </li>
              <li>
                {' '}
                Fast Forwarding to today, I built a number of web applications
                and 4 major projects. Learned a great deal about teamwork,
                leadership, and communication. After months of rigorous
                training, here I am looking for an opportunity as a Frontend developer.
              </li>
            </ul>
          </div>
        </div>

        <div className="about-right">
          <img
            src="https://camo.githubusercontent.com/cc4cabd748b4efe4d9a6f9de688f8114c754e8ff0440ef5982e1096f8c5d6ed2/68747470733a2f2f632e74656e6f722e636f6d2f427162496854344d62376341414141642f70726f6772616d6d65722d726f756e6465642d65646765732e676966"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
