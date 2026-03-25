export interface ProductProps {
  id: string;
  name: string;
  description: string[];
  component: 'gsap' | 'three';
}

export const PRODUCTS_DATA: ProductProps[] = [
  {
    id: 'irworobongdo',
    name: '일월오봉도',
    description: ['해와 달, 다섯 봉우리가 어우러진 상징적 풍경', '왕을 중심으로 한 우주의 질서를 표현한 그림', '조선 왕의 어좌 뒤에 놓인 궁중 병풍'],
    component: 'gsap',
  },
  {
    id: 'flower',
    name: '궁중채화',
    description: ['사라지지 않기 위해 만들어진 꽃', '시간을 붙잡듯 한 장씩 쌓아 올린 영원의 형태', '왕실의 공간 속에서 변하지 않는 아름다움'],
    component: 'three',
  },
];
