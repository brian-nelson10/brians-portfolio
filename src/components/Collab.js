import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import CollabItem from './CollabItem';

const CollabStyles = styled.div`
  padding: 10rem 0;
  .collab__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .collab__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

function Collab() {
  return (
    <CollabStyles>
      <div className="container">
        <div data-aos="fade-up">
        <SectionTitle subheading="let's work together" heading="Think. Code. Develop." />
        </div>
        <div data-aos="flip-down" data-aos-delay="900" className="collab__allItems">
          <CollabItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="UI/UX design incorporating a unique, clean and professional style."
          />
          <CollabItem
            icon={<MdCode />}
            title="web dev"
            desc="From the backend to the frontend lets builed beautiful websites inside and out. I can develop websites with blazing fast speed & performance."
          />
          <CollabItem
            icon={<MdPhonelinkSetup />}
            title="app Dev"
            desc="I love to create and develop mobile first, responsive applications with an eye catching user interface. "
          />
        </div>
      </div>
    </CollabStyles>
  );
}

export default Collab;