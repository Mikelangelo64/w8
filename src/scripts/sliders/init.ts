import makeSlider from './sliderHandler';
import Swiper from 'swiper';
import { swipeToAllHandler } from './swipeToHandler';

export interface ITypesSlider {
  item: HTMLElement;
  slider: Swiper;
}

export interface IInitializedSlider {
  name: string;
  slider: Swiper | undefined;
}

const sliderActionFormInit = (sliders: Array<IInitializedSlider>) => {
  const containerArray = document.querySelectorAll(
    '.action-popup'
  ) as NodeListOf<HTMLElement>;

  if (containerArray.length === 0) {
    return;
  }

  containerArray.forEach((item, sliderIndex) => {
    const slider = makeSlider({
      container: item,
      className: 'action-popup',
      config: {
        effect: 'fade',
        allowTouchMove: false
        // autoplay: {
        //   delay: 6000,
        //   disableOnInteraction: false
        // }
      }
    });

    if (!slider) {
      return;
    }

    sliders.push({ name: `action-popup-${sliderIndex}`, slider });
  });
};

const sliderTypesInit = (sliders: Array<IInitializedSlider>) => {
  const containerArray = document.querySelectorAll(
    '.types'
  ) as NodeListOf<HTMLElement>;

  if (containerArray.length === 0) {
    return;
  }

  const typeSliders: ITypesSlider[] = [];

  containerArray.forEach((item, sliderIndex) => {
    const slider = makeSlider({
      container: item,
      className: 'types',
      config: {
        effect: 'fade',
        allowTouchMove: false
        // autoplay: {
        //   delay: 2000,
        //   disableOnInteraction: false
        // }
      }
    });

    if (!slider) {
      return;
    }

    // swipeToHandler(slider, item);
    typeSliders.push({ slider, item });
    sliders.push({ name: `types-${sliderIndex}`, slider });
  });

  // console.log(typeSliders);
  swipeToAllHandler(typeSliders);
  // swipeToHandler(typeSliders, item);
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
        slidesPerView: 'auto',

        // breakpoints: {
        //   650: {
        //     slidesPerView: 2
        //   }
        // }
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      }
    });

    if (slider) {
      sliders.push({ name: `feedback-${sliderIndex}`, slider });
    }
  });
};

const sliderOfferInit = (sliders: Array<IInitializedSlider>) => {
  const containerArray = document.querySelectorAll(
    '.offer'
  ) as NodeListOf<HTMLElement>;

  if (containerArray.length === 0) {
    return;
  }

  containerArray.forEach((item, sliderIndex) => {
    const slider = makeSlider({
      container: item,
      className: 'offer',
      config: {
        effect: 'fade',
        allowTouchMove: false,
        spaceBetween: 10,
        loop: true,

        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      }
    });

    if (slider) {
      sliders.push({ name: `offer-${sliderIndex}`, slider });
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
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
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
  sliderActionFormInit(sliders);
  sliderOfferInit(sliders);
  return sliders;
};

export default slidersInit;
