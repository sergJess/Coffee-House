import style from './download-button.css';
import Node from '../../helpers/node/node';

type TDownloadButton = {
  href: string;
  mainText?: string;
  subtext?: string;
  imgIcon?: string;
  parent?: HTMLElement;
};

export default function DownloadButton(buttonDescription: TDownloadButton) {
  const button = Node({ tagName: 'button', classList: [style.button] });
  const link = Node({ tagName: 'a', parent: button, classList: [style.buttonLink] });
  link.setAttribute('href', buttonDescription.href);
  if (buttonDescription.imgIcon) {
    const imgFrame = Node({ tagName: 'div', parent: link });
    const img = Node({ tagName: 'img', parent: imgFrame });
    img.setAttribute('src', buttonDescription.imgIcon);
  }
  const textBlock = Node({ tagName: 'div', parent: link });
  Node({ tagName: 'p', parent: textBlock, textContent: buttonDescription.subtext });
  Node({ tagName: 'p', parent: textBlock, textContent: buttonDescription.mainText });
  if (buttonDescription.parent) {
    buttonDescription.parent.append(button);
  }
  return button;
}
