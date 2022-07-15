// import { gsap } from "gsap";
import SplitText from 'gsap';
import { useEffect, useRef, useState } from 'react';
const { gsap } = require('gsap/dist/gsap');
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
/*
SplitText.min.js is a Club GreenSock perk

const { SplitText } = require("gsap/dist/SplitText");

Sign up at https://greensock.com/club or try them for free on CodePen or CodeSandbox
*/




gsap.registerPlugin(SplitText);

export default function Viewport() {














  let splitText = useRef(null);
  let sp = useRef(null);
  let patOne = useRef(null);
  let patTwo = useRef(null);
  let patThree = useRef(null);
  let patVour = useRef(null);
  let patFive = useRef(null);
  let patSix = useRef(null);
  let patSeven = useRef(null);
  let patEight = useRef(null);
  let patNine = useRef(null);
  let patTen = useRef(null);

  let onMouseOverHandler = () => {
    gsap.to([splitText], {
      delay: 0.8,
      ease: 'power3.out',
      y: 5,
    });
  };

  useEffect(()=>{

  // gsap.fromTo(
  // patOne,
  //   { x: 0, scaleX: 1, width: '40vw' },
  //   {
  //     width: '0',
  //     duration: 2,
  //     ease: 'none',
  //     transformOrigin: '0% 100%',
  //     // stagger: 1.2,
  //     scrollTrigger: {
  //       // trigger: '#triggerB2',
  //       start: 'top 400',
  //       end: 'bottom bottom',
  //       scrub: true,
  //       markers: true,
  //     },
  //   }
  // );
  gsap.fromTo(
    [
      patOne,
      patTwo,
      patThree,
      patVour,
      patFive,
      patSix,
      patSeven,
      patEight,
      patNine,
      patTen,
    ],
    { x: 0, scaleX: 1, width: '10%' },
    {
      width: '0%',
      duration: 2,
      ease: 'none',
      transformOrigin: '0% 100%',
      // stagger: 1.2,
      scrollTrigger: {
        trigger: '#vieTrigger',
        start: 'top 0',
          // end: 'bottom bottom',
        scrub: true,
        markers: true,
      },
    }
  );



  // gsap.fromTo(
  //   patTwo,
  //   {x:0, scaleX: 1,  width: '61.1vw' },
  //   {
  //     width: '0',
  //     duration: 2,
  //     ease: 'none',
  //     // transformOrigin: '0% 100%',
  //     // stagger: 1.2,
  //     scrollTrigger: {
  //       // trigger: '#triggerB2',
  //       start: 'top 400',
  //       end: 'bottom bottom',
  //       scrub: true,
  //       markers: true,
  //     },
  //   }
  // );
  // gsap.fromTo(
  //   patThree,
  //   { x: 0, scaleX: 1, width: '32vw' },
  //   {
  //     width: '0',
  //     duration: 2,
  //     ease: 'none',
  //     transformOrigin: '0% 100%',
  //     // stagger: 1.2,
  //     scrollTrigger: {
  //       // trigger: '#triggerB2',
  //       start: 'top 400',
  //       end: 'bottom bottom',
  //       scrub: true,
  //       markers: true,
  //     },
  //   }
  // );
  })

  return (
 
        <div className='viewport d-flex'>
          <div
            className='viewport-overlay  d-flex align-items-center '
            ref={(el) => (patOne = el)}>
            <div className='viewport-left   d-flex flex-column align-items-center '>
              <h1
                className='font-viewport-title  text-center w-75 text-uppercase'
                ref={(el) => (splitText = el)}
                onMouseOver={onMouseOverHandler}>
                Tihomir
              </h1>
              <div className='  w-75 d-flex  justify-content-center'>
                <h1 className='font-viewport-title   text-uppercase'>Petrov</h1>
                <div className='viewport-placeholder  '></div>
              </div>
            </div>
          </div>

          <div className='wrapbox-1' ref={(el) => (patOne = el)}>
            {' '}
            <div className='viewportbox-1'></div>
          </div>
          <div className='wrapbox-2' ref={(el) => (patTwo = el)}>
            {' '}
            <div className='viewportbox-2'></div>
          </div>
          <div className='wrapbox-3' ref={(el) => (patThree = el)}>
            {' '}
            <div className='viewportbox-3'></div>
          </div>
          <div className='wrapbox-4' ref={(el) => (patVour = el)}>
            {' '}
            <div className='viewportbox-4'></div>
          </div>
          <div className='wrapbox-5' ref={(el) => (patFive = el)}>
            {' '}
            <div className='viewportbox-5'></div>
          </div>
          <div className='wrapbox-6' ref={(el) => (patSix = el)}>
            {' '}
            <div className='viewportbox-6'></div>
          </div>
          <div className='wrapbox-7' ref={(el) => (patSeven = el)}>
            {' '}
            <div className='viewportbox-7'></div>
          </div>
          <div className='wrapbox-8' ref={(el) => (patEight = el)}>
            {' '}
            <div className='viewportbox-8'></div>
          </div>
          <div className='wrapbox-9' ref={(el) => (patNine = el)}>
            {' '}
            <div className='viewportbox-9'></div>
          </div>
          <div className='wrapbox-10' ref={(el) => (patTen = el)}>
            {' '}
            <div className='viewportbox-10'></div>
          </div>

          <div className='trigeer' id='vieTrigger'></div>
        </div>
  
  );
}
