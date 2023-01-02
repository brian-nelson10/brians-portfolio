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
        <SectionTitle subheading="Lets Work Together" heading="Think. Code. Develop." />
        <div className="collab__allItems">
          <CollabItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="I do ui/ux design for websites that always incoporates a unique style."
          />
          <CollabItem
            icon={<MdCode />}
            title="web dev"
            desc="I also develop the websites. I create high performance websites with blazing fast speed & performance."
          />
          <CollabItem
            icon={<MdPhonelinkSetup />}
            title="app Dev"
            desc="I develop mobile applications. I create unique mobile apps with an eye catching ui. "
          />
        </div>
      </div>
    </CollabStyles>
  );
}

export default Collab;