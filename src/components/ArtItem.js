import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ArtImg from '../assets/images/hero.png';

const ArtItemStyles = styled.div`
  .artItem__img {
    width: 100%;
    
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    
  }
  .artItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .artItem__title {
    font-size: 2.2rem;
  }
  .artItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .artItem__img {
      height: 350px;
    }
  }
`;

function ArtItem({
  img = ArtImg,
  title = 'Art Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <ArtItemStyles>
      
      <Link to="/art" className="artItem__img">
        <img src={img} alt="art img" />
      </Link>
      <div className="artItem__info">
        <Link to="#">
          <h3 className="artItem__title">{title}</h3>
        </Link>
        <p className="artItem__desc">{desc}</p>
      </div>
      
    </ArtItemStyles>
  );
}

export default ArtItem;