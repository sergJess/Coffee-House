import style from './descrip.css';
import Node from '../../helpers/node/node';
import Button from '../button/button';

export default function Desribe() {
  const container = Node({ tagName: 'div', classList: [style.container] });
  const button = Button({ href: '#', textContent: 'Menu' });
  Node({
    tagName: 'div',
    classList: [style.title],
    parent: container,
    textContent: ' premium coffee at our charming cafe',
  });
  Node({
    tagName: 'p',
    classList: [style.text],
    parent: container,
    textContent:
      'With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee  lovers and those seeking a warm and inviting space to enjoy their favorite beverage.',
  });
  container.append(button);
  return container;
}
