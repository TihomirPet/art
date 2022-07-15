import { TweenMax } from 'gsap/dist/gsap';
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

export default function Loader() {
let cardRef = useRef([]);

useEffect(()=>{
  gsap.to(cardRef.current, {
    duration: 3.5,
    ease: 'power3.inOut',
    stagger: { amount: 0.5 },
    // scale:1,
      css: { opacity: 0 },
    z: 10,
  });
})



  return (
    <div className='loader  p-0 d-flex'>
      <div
        className=' loader-wrapper flex-column '
        ref={(el) => (cardRef.current[0] = el)}>
        <div
          className='col loader-top '
          ref={(el) => (cardRef.current[1] = el)}></div>
        <div
          className='col loader-bottom '
          ref={(el) => (cardRef.current[2] = el)}></div>
      </div>

      <div
        className=' loader-right '
        ref={(el) => (cardRef.current[3] = el)}></div>
    </div>
  );
}
