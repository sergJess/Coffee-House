import style from './slider.css';
import Node from '../../helpers/node/node';

export default function Slider() {
  const slider = Node({ tagName: 'div', classList: [style.slider] });
  const title = Node({
    tagName: 'h2',
    classList: [style.title],
    textContent: 'Choose your ',
  });
  const titleSpecialWord = Node({ tagName: 'span', parent: title, textContent: 'favorite' });
  const titleEndWord = Node({ tagName: 'span', parent: title, textContent: 'coffeex' });
  return slider;
}
