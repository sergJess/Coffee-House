import style from './slider-item.css';
import Node from '../../helpers/node/node';

type TSliderItem = {
  imgSrc: string;
  title: string;
  text: string;
  price: string;
};

export default function SliderItem(itemparams: TSliderItem) {
  const item = Node({ tagName: 'div', classList: [style.item] });
  const img = Node({ tagName: 'img', parent: item });
  img.setAttribute('src', itemparams.imgSrc);
  Node({ tagName: 'h3', classList: [style.title], textContent: itemparams.title, parent: item });
  Node({ tagName: 'p', classList: [style.text], textContent: itemparams.text, parent: item });
  Node({ tagName: 'p', classList: [style.price], textContent: itemparams.price, parent: item });
  return item;
}
