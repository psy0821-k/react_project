import king from '../../assets/king.png';
import downArrow from '../../assets/downArrow.svg';
import S from './HeroStyle.module.css';

const Herosection = () => {
  return (
    <section id={S.HeroSection}>
      <div className={S.heroBackground}>
        <img className={S.king} src={king} alt="" />

        <div className={S.heroText}>
          <h1>왕실 유물 아카이브</h1>
          <a className={S.linkButton} href="#">
            <div className={S.waveEffect}></div>
            <span>검색하러 바로가기</span>
          </a>
          <p className={S.scrollText}>스크롤을 내려보세요</p>
          <div className={S.downArrowBox}>
            <img className={S.downArrow} src={downArrow} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
