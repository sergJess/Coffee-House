import style from './resource.css';
import Node from '../../helpers/node/node';
import img1 from '../../assets/images/resource/img-1.svg';
import img2 from '../../assets/images/resource/img-2.svg';
import img3 from '../../assets/images/resource/img-3.svg';
import img4 from '../../assets/images/resource/img-4.svg';

export default function Resource() {
  const images = [img1, img2, img3, img4];
  const resource = Node({ tagName: 'div' });
  const text = Node({
    tagName: 'p',
    parent: resource,
    classList: [style.resourceText],
    textContent: 'Resource is the ',
  });

  Node({
    tagName: 'span',
    parent: text,
    classList: [style.resourceTextColored],
    textContent: 'perfect and cozy place ',
  });

  Node({
    tagName: 'span',
    parent: text,
    textContent:
      'where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.',
  });

  const grid = Node({
    tagName: 'div',
    parent: resource,
    classList: [style.resourceGrid],
  });
  for (let i = 0, length = images.length; i < length; i++) {
    const gridFrame = Node({
      tagName: 'div',
      parent: grid,
    });
    const img = Node({
      tagName: 'img',
      parent: gridFrame,
      classList: [style.resourceGridFrame],
    });
    img.setAttribute('src', images[i]);
  }
  return resource;
}
