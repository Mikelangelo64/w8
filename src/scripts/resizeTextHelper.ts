import debounce from './config/debounce';

export const resizeTextHandler = (textContainer: HTMLElement) => {
  const { width } = textContainer.getBoundingClientRect();
  textContainer.style.setProperty('--slider-width', `${width}px`);
};

const resizeTextHelper = (classNameArray: string[]) => {
  classNameArray.forEach((classnameString) => {
    const containerArray =
      document.querySelectorAll<HTMLElement>(classnameString);

    if (containerArray.length === 0) {
      return;
    }

    containerArray.forEach((container) => {
      const textContainer = container.querySelector<HTMLElement>(
        '.resize-text-container'
      );
      if (!textContainer) {
        return;
      }
      resizeTextHandler(textContainer);

      window.addEventListener(
        'resize',
        debounce({
          callback: () => {
            if (container.classList.contains('popup')) {
              if (container.classList.contains('_opened')) {
                resizeTextHandler(textContainer);
              }
            } else {
              resizeTextHandler(textContainer);
            }
          }
        })
      );
    });
  });
};

export default resizeTextHelper;
