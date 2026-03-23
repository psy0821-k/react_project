import TextIntro from './textIntro/TextIntro';

const IntroSection = () => {
  return (
    <section aria-labelledby="main-title">
      <h2 className="srOnly" id="main-title">
        웹사이트 소개
      </h2>
      <TextIntro />
    </section>
  );
};

export default IntroSection;
