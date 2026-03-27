import { useId, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import S from './textIntro.module.css';

interface TextIntroProps {
  name: string;
  description: string[];
}

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TextIntro = ({ name, description }: TextIntroProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleId = useId();
  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>('.intro-item');

      gsap.from(items, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'center 90%',
          end: 'bottom top',

          toggleActions: 'play none none reverse',
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div aria-labelledby={titleId} className={S.textIntroContainer} ref={containerRef}>
      <h2 id={titleId}>{name}</h2>

      {description.map((desc, index) => (
        <p className="intro-item" key={index}>
          {desc}
        </p>
      ))}
    </div>
  );
};

export default TextIntro;
