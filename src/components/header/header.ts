import style from './header.css';
import Node from '../../helpers/node/node';

export default function Header() {
  const head = Node({ tagName: 'header', classList: [style.header], textContext: 'Jess' });
  return head;
}
