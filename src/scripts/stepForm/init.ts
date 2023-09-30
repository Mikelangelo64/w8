import initFormControl from './formControl';
import { IInitializedSlider } from '../sliders/init';
import chooseTypeInfo from './chooseType';
import Popup from '../popup/popupClass';

const initStepForm = (sliders: IInitializedSlider[], popups: Popup[]) => {
  const formArray = document.querySelectorAll<HTMLFormElement>(
    '.action-popup__form.form'
  );

  if (formArray.length === 0 || sliders.length === 0) {
    return;
  }

  formArray.forEach((form, index) => {
    sliders.forEach(({ name, slider }) => {
      if (name === `types-${index}` && slider) {
        // if (name.includes('types') && slider) {
        chooseTypeInfo(form, slider, popups);
      }

      if (name === `action-popup-${index}` && slider) {
        initFormControl(form, slider);
      }
    });
  });
};

export default initStepForm;
