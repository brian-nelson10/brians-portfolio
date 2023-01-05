import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/castle-min.jpg';
import Resume from "../assets/resume/Brian.Nelson.pdf";

const AboutStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  .aboutImg {
    border-radius: 15px
  }
  .resume {
    cursor: pointer;
    margin-top: 2rem;
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gray-1)' : 'black')};
  }
  .resume:hover {
    background-color: var(--deep-bg);
    color: var(--gray-1);
  }
  .learn {
    cursor: pointer;
    margin-top: 2rem;
    font-size: 2.2rem;
    color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    background-color: var(--gray-bg);
  }
  .learn:hover {
    background-color: var(--gray-1) !important;
    color: var(--gray-2) !important;
  }
  @media only screen and (max-width: 768px) {
    .resume {
      font-size: 1.8rem;
    }
  }

  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

function About() {
  return (
    <AboutStyles>
      <div className="container">
        <div className="aboutSection__left">
          <div data-aos="fade-right">
          <SectionTitle
            subheading="let me introduce myself"
            heading="About Me"
          />
          </div>
          <div data-aos="fade-right">
          <PText>
            I am a freelance Web Developer, Graphic Designer, and Executive Chef
            from Orlando, Florida. I love art in all forms and strive to provide 
            unique views through my design. Lets create beautiful Websites inside & out ❤️
          </PText>
          </div>
          <div data-aos="fade-up" className="aboutSection__buttons">
            
              <a href={Resume} download><button className="resume">Resume</button></a>
            <button className="learn" >Learn More</button>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="800" className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutStyles>
  );
}

export default About;