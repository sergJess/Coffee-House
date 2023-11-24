import style from './descrip.css';
import Node from '../../helpers/node/node';

export default function Desribe() {
  const container = Node({ tagName: 'div', classList: [style.container] });
  return container;
}
