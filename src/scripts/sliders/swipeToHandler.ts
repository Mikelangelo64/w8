import Swiper from 'swiper';
import { ITypesSlider } from './init';

export const swipeToAllHandler = (array: ITypesSlider[]) => {
  array.forEach(({ slider, item: container }) => {
    const paginationContainerArray = container.querySelectorAll<HTMLElement>(
      '.swipe-to-container'
    );

    if (paginationContainerArray.length === 0) {
      return;
    }

    paginationContainerArray.forEach((paginationContainer) => {
      const buttonArray =
        paginationContainer.querySelectorAll<HTMLButtonElement>(
          '.swipe-to-button'
        );

      if (buttonArray.length === 0) {
        return;
      }

      buttonArray.forEach((button, index) => {
        button.addEventListener('click', () => {
          array.forEach(({ slider: sliderCurrent }) => {
            if (sliderCurrent.slides.length < index + 1) {
              sliderCurrent.slideTo(0);
            } else {
              sliderCurrent.slideTo(index);
            }
          });

          buttonArray.forEach((otherButton) => {
            otherButton.classList.remove('active');
          });

          button.classList.add('active');
        });
      });

      slider.on('slideChange', (swiper) => {
        buttonArray.forEach((button, index) => {
          // findActivePicture(slider);

          if (swiper.activeIndex === index) {
            button.classList.add('active');
          } else {
            button.classList.remove('active');
          }
        });
      });
    });
  });
};

const swipeToHandler = (slider: Swiper, container: HTMLElement) => {
  const paginationContainerArray = container.querySelectorAll<HTMLElement>(
    '.swipe-to-container'
  );

  if (paginationContainerArray.length === 0) {
    return;
  }

  paginationContainerArray.forEach((paginationContainer) => {
    const buttonArray =
      paginationContainer.querySelectorAll<HTMLButtonElement>(
        '.swipe-to-button'
      );

    if (buttonArray.length === 0) {
      return;
    }

    buttonArray.forEach((button, index) => {
      button.addEventListener('click', () => {
        if (slider.slides.length < index + 1) {
          slider.slideTo(0);
        } else {
          slider.slideTo(index);
        }

        buttonArray.forEach((otherButton) => {
          otherButton.classList.remove('active');
        });

        button.classList.add('active');
      });
    });

    slider.on('slideChange', (swiper) => {
      buttonArray.forEach((button, index) => {
        // findActivePicture(slider);

        if (swiper.activeIndex === index) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
    });
  });
};

export default swipeToHandler;
