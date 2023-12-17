import style from './slider.css';

type TSliderClass = {
  sliderTrack: HTMLElement;
};

type TSliderDirection = 1 | -1;
export default class SliderHandler {
  sliderTrack: HTMLElement;
  currentPosition: number;
  currentSlide: number;
  totalSlides: number;
  isAbleToClick: boolean;

  constructor(sliderParams: TSliderClass) {
    this.sliderTrack = sliderParams.sliderTrack;
    this.setAbilityToClick(true);
  }

  private setCurrentPosition(value: number) {
    this.currentPosition = value;
  }

  private setCurrentSlide(value: number) {
    this.currentSlide = value;
  }

  private setTotalSlides(value: number) {
    this.totalSlides = value;
  }

  setAbilityToClick(value: boolean) {
    this.isAbleToClick = value;
  }

  setToFirstSlide() {
    if (this.currentSlide > this.totalSlides) {
      this.sliderTrack.classList.remove(style.sliderTrackTransition);
      const sliderShift = this.sliderTrack.parentElement.clientWidth;
      this.sliderTrack.style.transform = `translateX(${sliderShift}px)`;
      this.setCurrentPosition(sliderShift);
      this.setCurrentSlide(1);
    }
  }

  setToLastSlide() {
    if (this.currentSlide == 0) {
      this.sliderTrack.classList.remove(style.sliderTrackTransition);
      const sliderShift = -1 * this.sliderTrack.parentElement.clientWidth;
      this.sliderTrack.style.transform = `translateX(${sliderShift}px)`;
      this.setCurrentPosition(sliderShift);
      this.setCurrentSlide(this.totalSlides);
    }
  }

  setInitailSliderPosition() {
    const children = this.sliderTrack.childElementCount;
    const copyedSlides = 2;
    if (children > 1) {
      const sliderShift = this.sliderTrack.parentElement.clientWidth;
      this.sliderTrack.style.transform = `translateX(${sliderShift}px)`;
      this.setCurrentPosition(sliderShift);
      this.setCurrentSlide(1);
      this.setTotalSlides(children - copyedSlides);
    }
  }

  sliderClick(direction: TSliderDirection) {
    if (this.isAbleToClick) {
      this.sliderTrack.classList.add(style.sliderTrackTransition);
      const sliderShift = this.sliderTrack.parentElement.clientWidth * direction;
      this.sliderTrack.style.transform = `translateX(${sliderShift + this.currentPosition}px)`;
      this.setCurrentPosition(sliderShift + this.currentPosition);
      this.setCurrentSlide(this.currentSlide - direction);
      this.setAbilityToClick(false);
    }
  }
}
