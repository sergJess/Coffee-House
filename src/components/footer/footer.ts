import style from './footer.css';
import Node from '../../helpers/node/node';
import twitter from '../../assets/images/socials/twitter.svg';
import facebook from '../../assets/images/socials/facebook.svg';
import instagram from '../../assets/images/socials/instagram.svg';

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
  const contactHeading = Node({
    tagName: 'h3',
    classList: [style.contactHeading],
    parent: footerColumnSecond,
    textContent: 'Contact us',
  });
  return footer;
}
