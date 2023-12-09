type TSliderClass = {
  sliderTrack: HTMLElement;
};
type TSliderDirection = 1 | -1;
export default class SliderHandler {
  sliderTrack: HTMLElement;
  currentPosition: number;
  constructor(sliderParams: TSliderClass) {
    this.sliderTrack = sliderParams.sliderTrack;
  }
  private setCurrentPosition(value: number) {
    this.currentPosition = value;
  }
  setInitailSliderPosition() {
    const children = this.sliderTrack.childElementCount;
    if (children > 1) {
      const sliderShift = this.sliderTrack.parentElement.clientWidth;
      this.sliderTrack.style.transform = `translateX(${sliderShift}px)`;
      this.setCurrentPosition(sliderShift);
    }
  }
  sliderClick(direction: TSliderDirection) {
    const sliderShift = this.sliderTrack.parentElement.clientWidth * direction;
    this.sliderTrack.style.transform = `translateX(${sliderShift + this.currentPosition}px)`;
    this.setCurrentPosition(sliderShift + this.currentPosition);
  }
}
