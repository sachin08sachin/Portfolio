import React from 'react';
import './Home.css';
import { ImLinkedin } from 'react-icons/im';
import {GoMarkGithub} from 'react-icons/go'
// import { Link } from 'react-scroll';
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
                <span style={{ color: 'rgb(40, 171, 248)' }}> Hello,</span> my name is
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
              <a href='./assets/Sachin_Resume.pdf' download='./assets/Sachin_Resume.pdf'><button  >RESUME</button></a>
            </span>
          </div>

          <div className="right-home-container">
            <img src="./assets/Video-Production-bubble.png" alt="" />
            <img src="./assets/Sachin_profilepic-removebg-preview.png" alt="" />
          </div>
        </div>
      {/* </Fade> */}
      <div className='linkedin'>
        <a href={'https://www.linkedin.com/feed/'}>  <ImLinkedin size={'3rem'} color={'  rgb(9, 164, 253)'}/> </a>
        <a href={'https://github.com/sachin08sachin'}>  <GoMarkGithub size={'3rem'} color={'  rgb(9, 164, 253)'}/> </a>
       
      </div>
    </div>
  );
};
