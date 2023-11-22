import style from './header.css';

export default function Header() {
  const header = document.createElement('header');
  header.classList.add(style.header);
  header.textContent = 'Jessie';
  return header;
}
