import style from './slider-arrow.css';
import Node from '../../helpers/node/node';

type TSliderArrow = {
  imgSrc: string;
};
export default function SliderArrow(src: TSliderArrow) {
  const arrow = Node({ tagName: 'div', classList: [style.sliderArrow] });
  const img = Node({ tagName: 'img', parent: arrow });
  img.setAttribute('src', src.imgSrc);
  return arrow;
}
