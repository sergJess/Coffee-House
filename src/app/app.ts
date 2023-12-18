import style from './app.css';
import Node from '../helpers/node/node';
import Header from '../components/header/header';
import Describe from '../components/descrip/descrip';
import Slider from '../components/slider/slider';
import Resource from '../components/resource/resourse';

export default function App() {
  const root = Node({ tagName: 'div', parent: document.body, classList: [style.root] });
  const content = Node({ tagName: 'div' });
  content.append(Describe(), Slider(), Resource());
  root.append(Header(), content);
}
