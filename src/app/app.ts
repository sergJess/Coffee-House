import style from './app.css';
import Node from '../helpers/node/node';
import Header from '../components/header/header';
import Describe from '../components/descrip/descrip';
export default function App() {
  const root = Node({ tagName: 'div', parent: document.body, classList: [style.root] });
  const content = Node({ tagName: 'div' });
  const describe = Describe();
  content.append(describe);
  root.append(Header(), content);
  return root;
}
