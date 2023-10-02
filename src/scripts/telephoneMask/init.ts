import IMask, { InputMask } from 'imask/esm/index';

const initTelephoneMask = () => {
  const maskArray: InputMask<{ mask: string }>[] = [];

  const inputTelArray =
    document.querySelectorAll<HTMLInputElement>('input[type="tel"]');

  if (inputTelArray.length === 0) {
    return undefined;
  }

  inputTelArray.forEach((input) => {
    const options = {
      mask: '+{38\\0} (00) 000 00 00'
    };

    const mask = IMask(input, options);
    maskArray.push(mask);
  });

  return maskArray;
};

export default initTelephoneMask;
