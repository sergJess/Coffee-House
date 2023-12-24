import commonStyle from '../../style/common.css';
import style from './footer.css';
import Node from '../../helpers/node/node';
import twitter from '../../assets/images/socials/twitter.svg';
import facebook from '../../assets/images/socials/facebook.svg';
import instagram from '../../assets/images/socials/instagram.svg';
import placeMarkerImgSrc from '../../assets/images/contact/place-marker.svg';
import timeImgSrc from '../../assets/images/contact/clock.svg';
import phoneImgSrc from '../../assets/images/contact/phone.svg';

export default function Footer() {
  const socialsImages = [
    { imgSrc: twitter, href: 'https://twitter.com' },
    { imgSrc: instagram, href: 'https://instagram.com' },
    { imgSrc: facebook, href: 'https://facebook.com' },
  ];
  const footer = Node({ tagName: 'div', classList: [style.footer] });
  const footerColumnFirst = Node({ tagName: 'div', classList: [style.column], parent: footer });
  Node({
    tagName: 'p',
    classList: [style.motto],
    parent: footerColumnFirst,
    textContent: 'Sip, Savor, Smile.',
  });
  Node({
    tagName: 'p',
    classList: [style.motto, style.mottoColored],
    parent: footerColumnFirst,
    textContent: 'It’s coffee time!',
  });
  const socialLinks = Node({
    tagName: 'div',
    classList: [style.social],
    parent: footerColumnFirst,
  });
  for (let i = 0, length = socialsImages.length; i < length; i++) {
    const link = Node({ tagName: 'a', classList: [style.socialLink], parent: socialLinks });
    link.setAttribute('href', socialsImages[i].href);
    const img = Node({ tagName: 'img', parent: link });
    img.setAttribute('src', socialsImages[i].imgSrc);
  }
  const footerColumnSecond = Node({ tagName: 'div', classList: [style.column], parent: footer });
  Node({
    tagName: 'h3',
    classList: [style.contactHeading, commonStyle.heading3],
    parent: footerColumnSecond,
    textContent: 'Contact us',
  });
  const placeMarkerBlock = Node({
    tagName: 'div',
    classList: [style.contactBlock],
    parent: footerColumnSecond,
  });
  const placeMarkerImg = Node({ tagName: 'img', parent: placeMarkerBlock });
  placeMarkerImg.setAttribute('src', placeMarkerImgSrc);
  Node({
    tagName: 'span',
    classList: [commonStyle.text, style.contactText],
    parent: placeMarkerBlock,
    textContent: '8558 Green Rd.,  LA',
  });
  const phoneBlock = Node({
    tagName: 'div',
    classList: [style.contactBlock],
    parent: footerColumnSecond,
  });
  const phoneImg = Node({ tagName: 'img', parent: phoneBlock });
  phoneImg.setAttribute('src', phoneImgSrc);
  Node({
    tagName: 'span',
    classList: [commonStyle.text, style.contactText],
    parent: phoneBlock,
    textContent: '+1 (603) 555-0123',
  });
  const clockBlock = Node({
    tagName: 'div',
    classList: [style.contactBlock],
    parent: footerColumnSecond,
  });
  const clockImg = Node({ tagName: 'img', parent: clockBlock });
  clockImg.setAttribute('src', timeImgSrc);
  Node({
    tagName: 'span',
    classList: [commonStyle.text, style.contactText],
    parent: clockBlock,
    textContent: 'Mon-Sat: 9:00 AM – 23:00 PM',
  });
  return footer;
}
