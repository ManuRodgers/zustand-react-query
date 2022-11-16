export const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

const objectKeys = <Obj extends Record<string, unknown>>(
  obj: Obj
): (keyof Obj)[] => {
  return Object.keys(obj) as (keyof Obj)[];
};

objectKeys(myObject).forEach((key) => {
  // eslint-disable-next-line no-console
  console.log(key, myObject[key]);
});
