import style from './app.css';
import Node from '../helpers/node/node';
import Header from '../components/header/header';
import Describe from '../components/descrip/descrip';
import Slider from '../components/slider/slider';
import Resource from '../components/resource/resourse';
import Download from '../components/download/download';
import Footer from '../components/footer/footer';

export default function App() {
  const root = Node({ tagName: 'div', parent: document.body, classList: [style.root] });
  const content = Node({ tagName: 'div' });
  content.append(Describe(), Slider(), Resource(), Download());
  root.append(Header(), content, Footer());
}
