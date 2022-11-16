// ! use of extends key word to narrow down the value of Generic value
export const getDeepValue = <
  Obj,
  FirstKey extends keyof Obj,
  SecondKey extends keyof Obj[FirstKey]
>(
  obj: Obj,
  firstKey: FirstKey,
  secondKey: SecondKey
): Obj[FirstKey][SecondKey] => {
  return obj[firstKey][secondKey];
};

const obj = {
  foo: {
    a: true,
    b: 2,
  },
  bar: {
    c: 'cool',
    d: 2,
  },
};

const result = getDeepValue(obj, 'foo', 'b');
// eslint-disable-next-line no-console
console.log('-> result', result);
