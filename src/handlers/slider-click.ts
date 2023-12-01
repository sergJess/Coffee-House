type TSliderClick = {
  shift: number;
  direction: number;
  sliderTrack: HTMLElement;
};
export default function sliderClick(sliderParams: TSliderClick) {
  if (sliderParams.direction === 1 || sliderParams.direction === -1) {
    const shift = sliderParams.shift * sliderParams.direction;
    sliderParams.sliderTrack.style.left = '-600px';
  }
  return sliderParams.sliderTrack.getBoundingClientRect();
}
