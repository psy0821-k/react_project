import S from './product1.module.css';
import mountian from '../../../assets/mountian.png';
import tree from '../../../assets/tree.png';
import sea from '../../../assets/sea.png';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Product1 = () => {
  const containersRef = useRef<HTMLDivElement | null>(null);
  const moonAndSunRef = useRef<HTMLDivElement | null>(null);
  const treeRef = useRef<HTMLImageElement | null>(null);
  const mountainRef = useRef<HTMLImageElement | null>(null);

  useGSAP(
    () => {
      if (!containersRef.current || !moonAndSunRef.current || !treeRef.current || !mountainRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containersRef.current,
          start: 'top 80%',
          end: 'bottom top',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from(moonAndSunRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
      })
        .from(
          treeRef.current,
          {
            y: 600,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
          },
          '-=0.4'
        )
        .from(
          mountainRef.current,
          {
            y: 600,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
          },
          '-=0.7'
        );
    },
    { scope: containersRef }
  );
  return (
    <div className={S.product1Container} ref={containersRef}>
      <div className={S.sunAndMoon} ref={moonAndSunRef}>
        <div className={S.moon}></div>
        <div className={S.sun}></div>
      </div>
      <img loading="lazy" ref={mountainRef} className={S.mountian} src={mountian} alt="" />
      <img loading="lazy" ref={treeRef} className={`${S.tree} ${S.introItem}`} src={tree} alt="" />
      <img loading="lazy" className={`${S.sea} ${S.introItem}`} src={sea} alt="" />
    </div>
  );
};

export default Product1;
