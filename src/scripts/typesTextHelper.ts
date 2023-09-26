import debounce from './config/debounce';

const resizeHandler = (textContainer: HTMLElement) => {
  const { width } = textContainer.getBoundingClientRect();

  textContainer.style.setProperty('--slider-width', `${width}px`);
};

const typesTextHelper = () => {
  const containerArray = document.querySelectorAll<HTMLElement>('.types');

  if (containerArray.length === 0) {
    return;
  }

  containerArray.forEach((container) => {
    const textContainer = container.querySelector<HTMLElement>('.types-slider');
    if (!textContainer) {
      return;
    }
    resizeHandler(textContainer);

    window.addEventListener(
      'resize',
      debounce({
        callback: () => {
          resizeHandler(textContainer);
        }
      })
    );
  });
};

export default typesTextHelper;
