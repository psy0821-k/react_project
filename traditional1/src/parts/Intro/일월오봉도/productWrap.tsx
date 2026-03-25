import TextIntro from '../textIntro/TextIntro';
import Product1 from './Product1';
import type { ProductProps } from '../data/Description';

interface GsapSection {
  product: ProductProps;
}
const productWrap = ({ product }: GsapSection) => {
  return (
    <section>
      <TextIntro name={product.name} description={product.description} />
      <Product1 />
    </section>
  );
};

export default productWrap;
