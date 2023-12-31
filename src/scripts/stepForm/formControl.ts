import Swiper from 'swiper';

const inputRequieredHandler = (
  container: HTMLElement,
  buttonArray: NodeListOf<HTMLElement>
) => {
  const inputArray = container.querySelectorAll<HTMLInputElement>('input');

  if (inputArray.length === 0) {
    return;
  }

  inputArray.forEach((input) => {
    if (input.type === 'radio') {
      return;
    }

    let typingTimer: NodeJS.Timeout;
    let interval = 1000;

    const doneTyping = () => {
      // console.log('done');

      const isAnyInputEmpty = !!Array.from(inputArray).find(
        (item) => item.value === ''
      );

      const isTelInputEmpty = !!Array.from(inputArray).find(
        (item) => item.type === 'tel' && item.value.length < 19
      );

      // console.log(isTelInputEmpty);

      buttonArray.forEach((button) => {
        if (button.dataset.action === 'submit') {
          if (isAnyInputEmpty || isTelInputEmpty) {
            button.classList.add('locked');
          } else {
            button.classList.remove('locked');
          }
        }
      });
    };

    input.addEventListener('keyup', () => {
      clearTimeout(typingTimer);

      typingTimer = setTimeout(doneTyping, interval);
    });

    input.addEventListener('keydown', () => {
      clearTimeout(typingTimer);
    });
  });
};

const buttonActionHandler = (
  button: HTMLElement,
  slider: Swiper,
  slideArray: NodeListOf<HTMLElement>,
  inputFormArray: NodeListOf<HTMLInputElement>
) => {
  const isSumbit = button.dataset.action === 'submit';
  const inputSteps =
    slideArray[slider.activeIndex].querySelectorAll<HTMLInputElement>('input');

  inputSteps.forEach((input) => {
    inputFormArray.forEach((formInputProp) => {
      const formInput = formInputProp;

      if (
        input.type === 'radio' &&
        input.checked &&
        input.name === formInput.name
      ) {
        formInput.value = input.value;
      }

      if (input.type !== 'radio' && input.name === formInput.name) {
        formInput.value = input.value;
      }
    });
  });

  if (isSumbit) {
    setTimeout(() => {
      slider.slideTo(0);

      inputSteps.forEach((inputProp) => {
        const input = inputProp;

        if (input.type !== 'radio') {
          input.value = '';
        }
      });
    }, 400);
  } else {
    slider.slideNext();
  }
};

const initFormControl = (form: HTMLElement, slider: Swiper) => {
  const buttonArray = slider.el.querySelectorAll<HTMLElement>(
    '.action-popup__button'
  );
  const slideArray = slider.el.querySelectorAll<HTMLElement>('.swiper-slide');
  const inputFormArray = form.querySelectorAll('input');

  if (buttonArray.length === 0 || slideArray.length === 0) {
    return;
  }

  inputRequieredHandler(slider.el, buttonArray);

  buttonArray.forEach((button) => {
    button.addEventListener('click', () => {
      buttonActionHandler(button, slider, slideArray, inputFormArray);
    });
  });
};

export default initFormControl;
