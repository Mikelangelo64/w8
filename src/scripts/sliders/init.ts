import makeSlider from './sliderHandler';
import Swiper from 'swiper';

interface IInitializedSlider {
  name: string;
  slider: Swiper | undefined;
}

const sliderTypesInit = (sliders: Array<IInitializedSlider>) => {
  const containerArray = document.querySelectorAll(
    '.types'
  ) as NodeListOf<HTMLElement>;

  if (containerArray.length === 0) {
    return;
  }

  containerArray.forEach((item, sliderIndex) => {
    const slider = makeSlider({
      container: item,
      className: 'types',
      config: {
        allowTouchMove: true
        // autoplay: {
        //   delay: 6000,
        //   disableOnInteraction: false
        // }
      }
    });

    if (slider) {
      sliders.push({ name: `types-${sliderIndex}`, slider });
    }
  });
};

const sliderFeedbackInit = (sliders: Array<IInitializedSlider>) => {
  const containerArray = document.querySelectorAll(
    '.feedback'
  ) as NodeListOf<HTMLElement>;

  if (containerArray.length === 0) {
    return;
  }

  containerArray.forEach((item, sliderIndex) => {
    const slider = makeSlider({
      container: item,
      className: 'feedback',
      paginationType: 'fraction',
      config: {
        allowTouchMove: true,
        slidesPerView: 'auto'

        // breakpoints: {
        //   650: {
        //     slidesPerView: 2
        //   }
        // }
        // autoplay: {
        //   delay: 6000,
        //   disableOnInteraction: false
        // }
      }
    });

    if (slider) {
      sliders.push({ name: `feedback-${sliderIndex}`, slider });
    }
  });
};

const slidersInit = () => {
  const sliders: Array<IInitializedSlider> = [];

  sliderTypesInit(sliders);
  sliderFeedbackInit(sliders);
  return sliders;
};

export default slidersInit;
