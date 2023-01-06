import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import HeroImg from '../assets/images/portrait.JPG';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
// import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';


const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2.4rem;
    margin-bottom: -3rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 800px;
    width: 100%;
    height: 750px;
    margin: 0 auto;
    border: 7px solid black;
    img {
      display: inline-block;
      
    }
  }
  .hero__info {
    margin-top: -18rem;
  }
  .HeroText {
    color: white !important;
    max-width: 600px;
    margin: 0 auto;
    font-size: 2.1rem;
    line-height: 1.3em;
    font-weight: 1000;
    span {
      color: white !important;
      background-color: black;
      opacity: .6;
    }
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }

    a:hover {
            transform: scale(2.5);
          }
        
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
    .HeroText {
      font-size: 1.4rem;
    }
  }
`;

const content = (isFirstMount) => ({
    animate: {
      transition: { staggerChildren: 1, delayChildren: isFirstMount ? .8 : .5 },
    },
  });
  const title = {
    initial: { y: -25, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 3.5],
      },
    },
  };
  const log = {
    initial: { x: 30, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: .5,
        ease: [0.6, -0.05, 0.01, 2.5],
      },
    },
  };
  const hero = {
    initial: { y: 30, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 3.5],
      },
    },
  };
  const heroText = {
    initial: { y: 60, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: .7,
        ease: [0.6, -0.05, 0.01, 3.5],
      },
    },
  };

const Hero = ({isFirstMount}) => {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
        <motion.div
          initial="initial"
          animate="animate"
          variants={content(isFirstMount)}
        >
          <motion.h1 variants={title} className="hero__heading">
            <span>Hi, I'm</span>
            <span className="hero__name">Brian Nelson</span>
          </motion.h1>
          
          <motion.div variants={hero} className="hero__img">
            <img src={HeroImg} alt="" />
          </motion.div>
          <motion.div variants={heroText} className="hero__info">
            <p className="HeroText"><span>
              I am currently working as a freelance fullstack web developer and in executive level managment.
              My perfect balance of technical and managerial skills stands me apart from the crowd.
              </span></p>
            <Button btnText="Projects" btnLink="/projects" />
          </motion.div>
          <motion.div variants={log} className="hero__social">
            <div className="hero__social__indicator">
              <p>Social Media</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="http://linkedin.com/in/brian-nelson-6b915b11a"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="a"/>
                  </a>
                </li>
                {/* <li>
                  <a
                    href="http://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook/>
                  </a>
                </li> */}
                <li>
                  <a
                    href="http://instagram.com/b_nel10/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram/>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/brian-nelson10"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub/>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div variants={log} className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </motion.div>
          </motion.div>
        </div>
      </div>
    </HeroStyles>
  );
}

export default Hero;