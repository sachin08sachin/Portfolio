import React from 'react';
import './Home.css';
// import Fade from 'react-reveal/Fade';
export const Home = () => {
  return (
    <div>
      {/* <Fade top> */}
        <div className="home-container" id="home">
          <div className="left-home-container">
            <span>
              <h2>
                {' '}
                <span style={{ color: 'rgb(113, 194, 241)' }}> Hello,</span> my name is
              </h2>
            </span>
            <span>
              <h1>Sachin SG</h1>
            </span>
            <span>
              <div className="wrapper">
                <div className="static-txt">I'm a</div>
                <ul className="dynamic-txt">
                  <li>
                    {' '}
                    <span>UI Developer</span>
                  </li>
                </ul>
              </div>
            </span>
            <br />

            <span>
              <button>RESUME</button>
            </span>
          </div>

          <div className="right-home-container">
            <img src="./assets/Video-Production-bubble.png" alt="" />
            <img src="./assets/Sachin_profilepic-removebg-preview.png" alt="" />
          </div>
        </div>
      {/* </Fade> */}
    </div>
  );
};
