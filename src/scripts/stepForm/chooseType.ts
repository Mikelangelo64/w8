import Swiper from 'swiper';
import Popup from '../popup/popupClass';

interface IResult {
  imageSrc: string;
  text: string;
}

const popupOpenHandler = (
  typeValue: IResult,
  popups: Popup[],
  inputProp: HTMLInputElement
) => {
  const input = inputProp;

  popups.forEach((popup) => {
    if (popup.name !== '_popup-form') {
      return;
    }

    const { parent, openButtons } = popup;

    const popupImage = parent.querySelector<HTMLImageElement>(
      '.action-popup-media__img img'
    );
    const popupText = parent.querySelector<HTMLImageElement>(
      '.action-popup-media__text'
    );

    if (!popupImage || !popupText) {
      return;
    }

    openButtons.forEach((button) => {
      button.addEventListener('click', () => {
        input.value = typeValue.text;

        popupImage.src = typeValue.imageSrc;
        popupText.innerHTML = typeValue.text;
      });
    });
  });
};

const setValueHandler = (slider: Swiper) => {
  const slideArray = slider.el.querySelectorAll<HTMLElement>('.swiper-slide');

  if (slideArray.length === 0) {
    return undefined;
  }

  let result: IResult = {
    imageSrc: '',
    text: ''
  };

  slideArray.forEach((slide, index) => {
    if (slider.activeIndex === index) {
      const image = slide.querySelector<HTMLImageElement>(
        '.types-slider__img img'
      );
      const text = slide.querySelector<HTMLElement>('.types-slider__text');

      if (!image || !text) {
        return;
      }

      result.imageSrc = image.src;
      result.text = text.innerHTML;
    }
  });

  if (result.imageSrc === '' || result.text === '') {
    return undefined;
  }

  return result;
};

const chooseTypeInfo = (form: HTMLElement, slider: Swiper, popups: Popup[]) => {
  const inputType = form.querySelector<HTMLInputElement>('input[name="type"]');

  if (!inputType) {
    return;
  }

  const typeValue = setValueHandler(slider);

  if (!typeValue) {
    return;
  }

  slider.on('slideChange', (swiper) => {
    const newValue = setValueHandler(swiper);

    if (!newValue) {
      return;
    }

    typeValue.imageSrc = newValue.imageSrc;
    typeValue.text = newValue.text;
  });

  popupOpenHandler(typeValue, popups, inputType);
};

export default chooseTypeInfo;
