import './style/common.css';
import './style/main.css';
import App from './app/app';
import Header from './components/header/header';
import Desribe from './components/descrip/descrip';

const root = App();
root.append(Header(), Desribe());
