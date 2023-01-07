import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/space-dude.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import Resume from '../assets/resume/Brian.Nelson.pdf';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 8px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

const pageVariants = {
    initial: {
      opacity: 0,
      y: "-100vw",
      scale: 0.2
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      y: "100vw",
      scale: 1.2
    }
  };
  
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };

function About() {
  return (
    <>
     <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I'm <span>Brian.</span>
              </p>
              <h2 className="about__heading">A Fullstack Web developer</h2>
              <div className="about__info">
                <PText>
                    I am a FullStack Web Developer and Graphic Designer who lives in Orlando, FL. 
                  I have a passion for creating unique, innovative, and engaging websites and applications 
                  that are both visually appealing and highly functional. I have a strong background in 
                  HTML, CSS, JavaScript, and other web development technologies, as well as a deep 
                  understanding of user experience and interface design. I am also experienced in 
                  graphic design, with a portfolio of logos, illustrations, and other visuals that 
                  have been used in a variety of projects. I am a highly motivated and creative individual 
                  who is always looking for new challenges and opportunities to learn. 
                  <br /> <br />
                  Since my childhood, i have always loved art and design. I quickly noticed the smallest details in 
                  what makes a unique point of view. I started coding since I was in high school and it has become an
                  art form to me. I love it and now I have the opportunity to design hand in hand with coding.
                  <br />
                  <br />
                  My vision is to create a better world for others. Now, nearly everything is becoming vastly advanced and different
                  in a fast, ever developing world. It is the time for us to create in a different way to help, save, change 
                  the world we physically and digitally live in.
                </PText>
              </div>
              <Button btnText="Download Resume" href={Resume} download />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="Boot Camp"
                items={['University of Central Florida, Full Stack Web Developer']}
              />
              <AboutInfoItem
                title="College"
                items={['University of Central Florida, Micro Biology']}
              />
              <AboutInfoItem
                title="High School"
                items={['Lake Brantley High School, Biology']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Developer Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'MongoDB', 'MySql', 'noSql', 'GraphQL', 'Postgres']}
              />
              <AboutInfoItem
                title="Design"
                items={['Photoshop', 'Illustrator', 'Figma']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Work</h1>

              <AboutInfoItem
                title="05/2019-12/2023"
                items={['Executive Chef, Ida Claire']}
              />
              <AboutInfoItem
                title="01/2017-05/2019"
                items={['Executive Chef, Hoptinger 5 Points']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
      </motion.div>
    </>
  );
}

export default About;