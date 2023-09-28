import { Timeline } from 'vevet';

const itemHandler = (container: HTMLElement) => {
  const elements = container.querySelectorAll<HTMLElement>('.accordion__item');

  if (elements.length === 0) {
    return;
  }

  elements.forEach((element) => {
    const arrow = element.querySelector<HTMLButtonElement>(
      '.accordion__summary'
    );
    const body = element.querySelector<HTMLElement>('.accordion__details');

    if (!arrow || !body) {
      return;
    }

    const bodyInner = body.querySelector<HTMLElement>(
      '.accordion__description'
    );
    if (!bodyInner) {
      return;
    }

    const timeline = new Timeline({ duration: 400 });
    timeline.addCallback('progress', ({ easing, progress }) => {
      const height =
        progress === 1 ? 'auto' : `${bodyInner.clientHeight * easing}px`;

      body.style.height = height;
      body.style.opacity = `${easing}`;
    });

    arrow.addEventListener('click', () => {
      element.classList.toggle('_active');

      if (timeline.progress > 0) {
        timeline.reverse();
      } else {
        timeline.play();
      }
    });
  });
};

const accordionInit = () => {
  const containerArray = document.querySelectorAll<HTMLElement>('.accordion');

  if (containerArray.length === 0) {
    return;
  }

  containerArray.forEach((container) => {
    itemHandler(container);
  });
};

export default accordionInit;
