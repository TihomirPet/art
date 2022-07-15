import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export default function Maincontent() {


  //  let textRef = useRef(null);
  //  let textRef1 = useRef(null);
  //  let textRef2 = useRef(null);
  //  let textRef3 = useRef(null);
  //  let textRef4 = useRef(null);
  //  let boxRef = useRef(null);

  //  useEffect(() => {
  //    gsap.to([textRef, textRef1, textRef2, textRef3, textRef4], {
  //      x: 10,
  //      duration: 2,
  //      ease: 'bounce',
  //      delay: 1,
  //      stagger: 1,
  //      scrollTrigger: {
  //        trigger: '#trigger',
  //        start: 'top 400',
  //        end: 'bottom bottom',
  //        scrub: true,
  //        markers: true,
  //      },
  //    });

  // }, []);





  // useEffect(() => {
   
  //   gsap.fromTo(
  //     [textRef, textRef1, textRef2, textRef3, textRef4, boxRef],
  //     {
  //       opacity: 0,
  //       scale: 1,
  //       x: 0,
  //     },
  //     {
  //       opacity: 1,
  //       x: 10,
  //       scale: 1,
  //       duration: 1,
  //       ease: 'none',
  //       stagger: 0.5,
  //       scrollTrigger: {
  //         trigger: '#trigger',
  //         start: 'top 400',
  //         end: 'bottom bottom',
  //         scrub: true,
  //         markers: true,
  //       },
  //     }
  //   );
  // }, []);





  return (
    <div
      className=' d-flex flex-column justify-content-center'
      id='trigger'>
      {/* <p ref={(el) => (textRef = el)}>Maincontent</p>
      <p ref={(el) => (textRef1 = el)}>Maincontent</p>
      <p ref={(el) => (textRef2 = el)}>Maincontent</p>
      <p ref={(el) => (textRef3 = el)}>Maincontent</p>
      <p ref={(el) => (textRef4 = el)}>Maincontent</p>
          <div
        ref={(el) => (boxRef = el)}
        className='col-1 border border-danger box'></div> */}
  
    </div>
  );
}
