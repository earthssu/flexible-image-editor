export const getNumber = (value: string) => Number(value.replace('px', ''));

export const resizeElement = (
  element: any,
  percentage: number,
  props = [],
  values = [],
) => {
  props.forEach((key, idx) => {
    // eslint-disable-next-line no-param-reassign
    element.style[key] = `${values[idx] * percentage}px`;
  });
};
