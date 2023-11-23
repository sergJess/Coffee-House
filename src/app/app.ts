import style from './app.css';
import Node from '../helpers/node/node';
export default function App() {
  const root = Node({ tagName: 'div', parent: document.body, classList: [style.root] });
  return root;
}
