import style from './slider.css';
import Node from '../../helpers/node/node';
import slideImg1 from '../../assets/images/slider/coffee-slider-1.svg';
import slideImg2 from '../../assets/images/slider/coffee-slider-2.svg';
import slideImg3 from '../../assets/images/slider/coffee-slider-3.svg';
import arrowLeftSvg from '../../assets/images/slider/arrow-left.svg';
import arrowRightSvg from '../../assets/images/slider/arrow-right.svg';
import SliderItem from '../slider-item/slider-item';
import SliderArrow from '../slider-arrow/slider-arrow';
import sliderClick from '../../handlers/slider-click';

export default function Slider() {
  const slides = [
    {
      imgSrc: slideImg1,
      title: 'S’mores Frappuccino',
      text: 'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.',
      price: '$5.50',
    },
    {
      imgSrc: slideImg2,
      title: 'Caramel Macchiato',
      text: 'Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.',
      price: '$5.00',
    },
    {
      imgSrc: slideImg3,
      title: 'Ice coffee',
      text: 'A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.',
      price: '$4.50',
    },
  ];
  const slider = Node({ tagName: 'div', classList: [style.slider] });
  const title = Node({
    tagName: 'h2',
    classList: [style.title],
    textContent: 'Choose your ',
    parent: slider,
  });
  Node({
    tagName: 'span',
    parent: title,
    textContent: 'favorite',
    classList: [style.titleMarked],
  });
  Node({ tagName: 'span', parent: title, textContent: ' coffeex' });
  const sliderBlock = Node({ tagName: 'div', classList: [style.sliderBlock], parent: slider });
  const arrowLeft = SliderArrow({ imgSrc: arrowLeftSvg });
  const arrowRight = SliderArrow({ imgSrc: arrowRightSvg });
  sliderBlock.append(arrowLeft);
  const sliderInner = Node({ tagName: 'div', classList: [style.sliderInner], parent: sliderBlock });
  const sliderTrack = Node({ tagName: 'div', parent: sliderInner, classList: [style.sliderTrack] });
  arrowRight.onclick = () => {
    sliderClick({ direction: 1, sliderTrack: sliderTrack, shift: 500 });
    console.log(sliderClick({ direction: 1, sliderTrack: sliderTrack, shift: 500 }));
  };
  for (let i = 0, length = slides.length; i < length; i++) {
    if (i === 0 && length > 1) {
      sliderTrack.append(
        SliderItem({
          imgSrc: slides[length - 1].imgSrc,
          title: slides[length - 1].title,
          text: slides[length - 1].text,
          price: slides[length - 1].price,
        })
      );
    }
    sliderTrack.append(
      SliderItem({
        imgSrc: slides[i].imgSrc,
        title: slides[i].title,
        text: slides[i].text,
        price: slides[i].price,
      })
    );
    if (i === length - 1 && length > 1) {
      sliderTrack.append(
        SliderItem({
          imgSrc: slides[0].imgSrc,
          title: slides[0].title,
          text: slides[0].text,
          price: slides[0].price,
        })
      );
    }
  }
  sliderBlock.append(arrowRight);

  return slider;
}
