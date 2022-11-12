const str = (val: string | number, postfix: string) =>
  `${val.toString()}${postfix}`;

export const px = (val: string | number): string => str(val, "px");
export const pc = (val: string | number): string => str(val, "%");
