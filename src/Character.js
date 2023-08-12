import React from 'react'

const Character = ({ img, title, intro }) => {
 // attribute, eventHandler
 // onClick, onMouseOver
 const clickHandler = (e) => {
  console.log(e);
  console.log(e.target);
  alert('hello world');
 };
 const complexExample = (intro) => {
  console.log(intro);
 };
 return (
  <article
   className='character'
   onMouseOver={() => {
    console.log(title);
   }}
  >
   <img src={img} alt=''/>
   <h1 onClick={() => console.log(title)}>{title}</h1>
   <h4>{intro}</h4>
   <button type='button' onClick={clickHandler}>
    reference example
      </button>
   <button type='button' onClick={() => complexExample(intro)}>
    more complex example
      </button>
  </article>
 );
};

export default Character