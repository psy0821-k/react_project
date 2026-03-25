import GsapSection from './일월오봉도/productWrap';
import { PRODUCTS_DATA } from './data/Description';
import ThreeWrap from './궁중채화/ThreeWrap';

const IntroSection = () => {
  return (
    <section aria-labelledby="main-title">
      <h2 className="srOnly" id="main-title">
        웹사이트 소개
      </h2>

      {PRODUCTS_DATA.map(product => {
        if (product.component === 'three') {
          return <ThreeWrap key={product.id} product={product} />;
        }

        return <GsapSection key={product.id} product={product} />;
      })}
    </section>
  );
};

export default IntroSection;
