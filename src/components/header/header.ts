import style from './header.css';
import Node from '../../helpers/node/node';
import logo from './logo.svg';
import Nav from '../nav/nav';
import Menu from '../menu/menu';

export default function Header() {
  const header = Node({ tagName: 'header', classList: [style.header] });
  const logotype = Node({ tagName: 'div', parent: header });
  const logoImg = Node({ tagName: 'img', parent: logotype });
  logoImg.setAttribute('src', logo);
  const nav = Nav();
  const menu = Menu();
  header.append(nav, menu);
  return header;
}
