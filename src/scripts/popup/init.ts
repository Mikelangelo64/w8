import Popup from './popupClass';

const initPopups = (): Popup[] => {
  const popupDomArr = document.querySelectorAll('.popup');

  if (popupDomArr.length === 0) {
    return [];
  }

  const popupArr: Popup[] = [];

  popupDomArr.forEach((element) => {
    const popup = new Popup(element as HTMLElement);
    popupArr.push(popup);
  });

  popupArr.forEach((popup) => {
    popup.initOpen(popupArr);
  });

  popupArr.forEach((popup) => {
    if (popup.name === '_popup-form') {
      const formPopup = popup;
      setTimeout(() => {
        formPopup.parent.style.display = 'none';
        formPopup.parent.style.opacity = '0';
      }, 0);
    }
  });

  return popupArr;
};

export default initPopups;
