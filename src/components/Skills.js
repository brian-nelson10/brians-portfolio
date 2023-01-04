import React from 'react';
import Marquee from "react-fast-marquee";
import styled from 'styled-components';
import { skillsData } from '../data/skillsData';
import { skillsImage } from '../utils/skillsImage';
import SectionTitle from './SectionTitle';
import PText from './PText';

const SkillStyles = styled.div`
.skills {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: fit-content;
    padding: 2.5rem 2rem 2rem 2rem;
  }
  
  .skillsContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 3.5rem;
    padding: 0 2rem;
  }
  
  .skill--scroll {
    width: 100%;
    margin: 0 2rem;
  }
  
  .skill--box {
    background: #000000;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.12);
    border-radius: 10px;
    width: 180px;
    height: 200px;
    margin: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    transition: 300ms ease-in-out;
  }
  
  .skill--box:hover {
    transform: scale(1.25);
    filter: none; !important;
  }
  .skill--box {
    filter: grayscale(100%);
  }

  .skill--img {
    height: 140px;
    pointer-events: none;
  }
  .skill--img:hover {
    filter: none;
  }
  .marquee {
    padding: 3rem 0;
  }

  @media (min-width: 992px) and (max-width: 1380px) {
    .skills {
      padding: 2rem 1rem 1rem 1rem;
    }
    .skillsContainer {
      padding: 1.5rem;
      margin-top: 1.5rem;
    }
  }

  .skill--img {
    height: 130px;
    pointer-events: none;
  }
  
  @media screen and (max-width: 992px) {
    .skills {
      padding: 1rem;
      min-height: 100%;
    }
    .skillsContainer {
      padding: 1rem;
      margin: 1rem 0;
    }
    .skillsHeader h2 {
      font-size: 3.2rem;
    }
    .skill--box {
      width: 150px;
      height: 150px;
      margin: 1.2rem;
      padding: 2rem 1rem;
    }
  
    .skill--img {
        height: 130px;
        pointer-events: none;
      }
  
    .skill--box h3 {
      font-size: 20px;
      margin-top: 1rem;
    }
  }
  
  @media screen and (max-width: 800px) {
    .skills {
      padding: 0.5rem;
    }
    .skillsContainer {
      padding: 0.5rem;
    }
    .skillsHeader h2 {
      font-size: 3rem;
    }
    .skill--img {
        height: 130px;
        pointer-events: none;
      }
    .skill--scroll {
      width: 100%;
      margin: 0;
    }
  }
  
  @media screen and (max-width: 600px) {
    .skill--box {
      width: 135px;
      height: 135px;
      margin: 1.2rem;
      padding: 2rem 1rem;git
    }
}
.skill--img {
    height: 140px;
    pointer-events: none;
  }
    .skillsHeader h2 {
      font-size: 2.5rem;
    }
  
    .skill--box h3 {
      font-size: 18px;
      margin-top: 1rem;
    }
  }`

function Skills() {

    return (
        <SkillStyles>
        <div className="skills">
            <div className="container">
            <div data-aos="fade-up">
            <SectionTitle subheading="a lifelong dedication to learning." heading="Skills" />
                </div>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id}>
                                <img className="skill--img" src={skillsImage(skill)} alt={skill} />
                               <PText><h3>
                                    {skill}
                                </h3></PText>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
        </SkillStyles>
    )
}

export default Skills