import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import S from './textIntro.module.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TextIntro = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>('.intro-item');

      gsap.from(items, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'center 90%',
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <article aria-labelledby="intro" className={S.textIntroContainer} ref={containerRef}>
      <h2 id="intro" className="srOnly">
        웹페이지 소개
      </h2>
      <p className="intro-item">안녕하세요</p>
      <p className="intro-item">한국 왕실의 유물을 검색 가능한 사이트입니다</p>
      <p className="intro-item">검색 페이지는 별도로 준비되어있습니다</p>
      <p className="intro-item">상단의 메뉴링크를 이용해주세요</p>
      <p className="intro-item">아래에는 두가지의 유물을 인터렉티브하게 만들어 보았습니다</p>
    </article>
  );
};

export default TextIntro;
