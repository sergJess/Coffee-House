import style from './download.css';
import Node from '../../helpers/node/node';
import DownloadButton from '../download-button/download-button';
import downloadScreens from '../../assets/images/dowload/mobile-screens.svg';
import apple from '../../assets/images/dowload/apple.svg';
import google from '../../assets/images/dowload/google.svg';

export default function Download() {
  const dowloadBlock = Node({ tagName: 'div', classList: [style.dowloadBlock] });
  const textBlock = Node({ tagName: 'div', parent: dowloadBlock });
  const textHeading = Node({
    tagName: 'h3',
    parent: textBlock,
    textContent: 'Download',
    classList: [style.textHeading],
  });
  Node({
    tagName: 'span',
    parent: textHeading,
    textContent: ' our apps to start ordering',
    classList: [style.textHeadingColored],
  });
  const textContent = Node({
    tagName: 'p',
    parent: textBlock,
    textContent:
      'Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are',
    classList: [style.textContent],
  });
  const buttonsBlock = Node({ tagName: 'div', parent: textBlock, classList: [style.buttonsBlock] });
  DownloadButton({
    href: '#',
    subtext: 'Available on the',
    mainText: 'App Store',
    imgIcon: apple,
    parent: buttonsBlock,
  });
  DownloadButton({
    href: '#',
    subtext: 'Available on',
    mainText: 'Google Play',
    imgIcon: google,
    parent: buttonsBlock,
  });
  const imgBlock = Node({ tagName: 'div', parent: dowloadBlock });
  const imgDownloadScreens = Node({ tagName: 'img', parent: imgBlock });
  imgDownloadScreens.setAttribute('src', downloadScreens);
  return dowloadBlock;
}
