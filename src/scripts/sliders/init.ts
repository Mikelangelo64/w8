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

const sliderCatalogInit = (sliders: Array<IInitializedSlider>) => {
  const containerArray = document.querySelectorAll(
    '.catalog'
  ) as NodeListOf<HTMLElement>;

  if (containerArray.length === 0) {
    return;
  }

  containerArray.forEach((item, sliderIndex) => {
    const slider = makeSlider({
      container: item,
      className: 'catalog',
      paginationType: 'fraction',
      config: {
        allowTouchMove: true,
        slidesPerView: 'auto',
        spaceBetween: 10,

        breakpoints: {
          899: {
            spaceBetween: 24
          }
        }
        // autoplay: {
        //   delay: 6000,
        //   disableOnInteraction: false
        // }
      }
    });

    if (slider) {
      sliders.push({ name: `catalog-${sliderIndex}`, slider });
    }
  });
};

const slidersInit = () => {
  const sliders: Array<IInitializedSlider> = [];

  sliderTypesInit(sliders);
  sliderFeedbackInit(sliders);
  sliderCatalogInit(sliders);
  return sliders;
};

export default slidersInit;
