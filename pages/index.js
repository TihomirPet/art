import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Footer from '../components/footer/Footer';
// import Gallery from '../components/gallery/Gallery';

import Viewport from '../components/header/Viewport';
import Layout from '../components/Layout';
import Loader from '../components/loader/Loader';
import Maincontent from '../components/maincontent/Maincontent';
import gsap from 'gsap';

import 'bootstrap/dist/css/bootstrap.min.css';

// export async function getStaticProps() {
//   const response = await fetch('http://localhost:4001/art/');

//   const data = await response.json();

//   return {
//     props: { content: data },
//   };
// }

export default function Home() {
  let cardRefHolder = useRef(null);
  let cardReflayout = useRef(null);

  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(3);

  let id = useRef(null);

  let clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer(timer - 1);
    }, 2000);

    // return () => window.clearInterval(id.current);
  }, [timer]);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  // useEffect(() => {
  //   gsap.to(cardRefHolder, {
  //     // duration: 2.5,
  //     ease: 'Circ. easeOut',
  //     // stagger: { amount: 0.5 },
  //     // scale:1,
  //     css: { opacity: 0 },
  //     z: 10,
  //   });

  //   gsap.fromTo(
  //     cardReflayout,
  //     { opacity: 0, z: 0, scale: 0 },
  //     {
  //       opacity: 1,

  //       scale: 1,
  //       duration: 5,
  //       ease: '  Circ. easeOut',
  //       // stagger: 1.1,
  //       // ease: 'Power1. easeOut',
  //     }
  //   );
  // });

  // console.log(content);

  return (
    <>
      {preloader ? (
        <Loader
        // ref={(el) => (cardRefHolder = el)}
        ></Loader>
      ) : (
        <Layout title={'test nav'}>
          <Viewport
          //  ref={(el) => (cardReflayout = el)}
          ></Viewport>
          <Maincontent />

          <Footer />

          {/* <Gallery
       
           /> */}
        </Layout>
      )}
    </>
  );
}
