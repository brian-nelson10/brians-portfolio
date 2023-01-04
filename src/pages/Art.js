import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import artsData from '../data/artsData';
import ArtItem from '../components/ArtItem';

const ArtStyle = styled.div`
  padding: 10rem 0;
  .arts__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .arts__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .arts__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .arts__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .arts__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .arts__searchBar,
    .arts__searchBar form,
    .arts__searchBar input {
      width: 100%;
    }
  }
`;

function Art() {
  const [searchText, setSearchText] = useState('');
  const [artData, setArtData] = useState(artsData);
  useEffect(() => {
    if (searchText === '') return;
    setArtData(() =>
      artsData.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setArtData(artsData);
    }
  };
  return (
    <>
      <ArtStyle>
        <div className="container">
          <SectionTitle
            heading="arts"
            subheading="my artwork and design work. it all started with a pen and some paper."
          />
          <div className="arts__searchBar">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Art Name"
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>
          <div className="arts__allItems">
            {artData.map((item) => (
              <ArtItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </ArtStyle>
    </>
  );
}

export default Art;