import style from './menu.css';
import Node from '../../helpers/node/node';

export default function Menu() {
  const menu = Node({ tagName: 'div', classList: [style.menu], textContent: 'Menu' });
  return menu;
}
