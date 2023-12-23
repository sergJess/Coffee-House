import style from './button.css';
import Node from '../../helpers/node/node';

type TButton = {
  href: string;
  textContent: string;
};

export default function Button(buttonDescription: TButton) {
  const button = Node({
    tagName: 'button',
    textContent: buttonDescription.textContent,
    classList: [style.button],
  });
  button.setAttribute('href', buttonDescription.href);
  return button;
}
