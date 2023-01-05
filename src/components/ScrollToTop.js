import React, { useState, useEffect } from 'react';
import {FaArrowUp} from 'react-icons/fa';
// import styled from 'styled-components';

// export const Button = styled.div`
// position: fixed;
// width: 100%;
// left: 50%;
// bottom: 40px;
// height: 20px;
// font-size: 3rem;
// z-index: 1;
// cursor: pointer;
// color: green;
// `
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
  // 👇️ scroll to top on page load
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}, []);

window.addEventListener('scroll', toggleVisible);

return (
  <div>
    <button
      onClick={() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }}
      style={{
        position: 'fixed',
        padding: '1rem 2rem',
        fontSize: '20px',
        bottom: '40px',
        right: '45px',
        backgroundColor: 'transparent',
        border: 'none',
        color: '#fff',
        textAlign: 'center',
        display: visible ? 'inline' : 'none',
        cursor: 'pointer',
        transition: 'ease-in',
        duration: '1s',
      }}
    >
      <FaArrowUp/>
    </button>
  </div>
);
}
export default ScrollToTop;