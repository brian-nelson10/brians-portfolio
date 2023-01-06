import React, { useState, useEffect } from 'react';
import {FaArrowUp} from 'react-icons/fa';
import styled from 'styled-components';

const Scroll = styled.div`
@media only screen and (max-width: 768px) {

  display: none;

}`

const ScrollToTop = () =>{
const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 900){
      setVisible(true)
    } 
    else if (scrolled < 500){
      setVisible(false)
    }
  };
  
useEffect(() => {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}, []);

window.addEventListener('scroll', toggleVisible);

return (
  <Scroll>
  <div className='scroll'>
    <button
      onClick={() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }}
      style={{
        position: 'fixed',
        padding: '1rem 2rem',
        fontSize: '30px',
        bottom: '40px',
        right: '45px',
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
        textAlign: 'center',
        display: visible ? 'inline' : 'none',
        cursor: 'pointer',
        transition: 'ease-in',
      }}
    >
      <FaArrowUp/>
    </button>
  </div>
  </Scroll>
);
}
export default ScrollToTop;