import TextIntro from '../textIntro/TextIntro';
import type { ProductProps } from '../data/Description';
import Product2 from './Product2';

interface GsapSection {
  product: ProductProps;
}
const productWrap = ({ product }: GsapSection) => {
  return (
    <section>
      <TextIntro name={product.name} description={product.description} />
      <Product2 />
    </section>
  );
};

export default productWrap;
