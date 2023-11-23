import style from './nav.css';
import Node from '../../helpers/node/node';

export default function Nav() {
  const navigation = Node({ tagName: 'nav', classList: [style.nav] });
  const menuList = ['Favorite coffee', 'About', 'Mobile app', 'Contact us'];
  for (let i = 0, length = menuList.length; i < length; i += 1) {
    const link = Node({
      tagName: 'a',
      classList: [style.navLink],
      parent: navigation,
      textContext: menuList[i],
    });
    link.setAttribute('href', '#');
  }
  return navigation;
}
