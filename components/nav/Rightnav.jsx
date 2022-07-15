import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';


export default function Rightnav({ open }) {
  let menu = useRef([]);

  // let revielMenuLink = useRef({});
  let menuLink = useRef([]);


  useEffect(() => {
    if (open === false) {
      // console.log(false);
      gsap.to([menu.current, menuLink.current], {
        duration: 1.5,
        ease: 'power3.inOut',
        stagger: { amount: 2.5 },

        x: 3000,
      });
      gsap.to([menuLink.current], {
        duration: 1,
       
        scale:0,
          // css: { display: 'block' },
        stagger: { amount: 0.5 },
        ease: 'power1.inOut',
         x: 30,
      });

     
    } else if (open === true) {
      console.log(true);
      gsap.to([menu.current, menuLink.current], {
        duration: 0.6,
        //  css: { display: 'block' },
        stagger: { amount: 2 },
        ease: 'Power1. easeOut',
        opacity: 1,
        scale: 1,
        x: 0,
      });
    
    }
  });

  return (
    <div
      ref={(el) => (menu.current[0] = el)}
      className={`${
        open
          ? 'nav-holder d-flex flex-column justify-content-center'
          : 'nav-holder d-flex flex-column justify-content-center'
      }`}>
      <div
        ref={(el) => (menu.current[1] = el)}
        className={`${
          open
            ? 'nav-container border border-warning d-flex flex-column justify-content-center'
            : 'nav-container-close d-flex flex-column justify-content-center'
        }`}>
        <ul
          className='internal-nav-links list-unstyled  d-flex flex-column justify-content-around ps-5 border'
          ref={(el) => (menu.current[2] = el)}>
          <li className='box' ref={(el) => (menuLink.current[0] = el)}>
            <img src='images/Frame_Hover.jpg' width={400} />
            <Link href='/about'>
              <a>Start</a>
            </Link>
          </li>
          <li className='box' ref={(el) => (menuLink.current[1] = el)}>
            <img src='images/Frame_Hover.jpg' width={400} />
            <Link href='/about'>
              <a>Bilder</a>
            </Link>
          </li>
          <li className='box' ref={(el) => (menuLink.current[2] = el)}>
            <img src='images/Frame_Hover.jpg' width={400} />
            <Link href='/about'>
              <a>News</a>
            </Link>
          </li>
          <li className='box' ref={(el) => (menuLink.current[3] = el)}>
            <img src='images/Frame_Hover.jpg' width={400} />
            <Link href='/about'>
              <a>Standorte</a>
            </Link>
          </li>

          {/* {internalLinks.map((links, index) => (
            <li
              key={links.id}
              className='mt-5 box'
              ref={(el) => (revielMenuLink.current[index] = el)}>
              <a className='text-uppercase'>{links.component}</a>

              <img src={links.image} />
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}
