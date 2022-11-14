// !Derive a union type from an object
export const fruitCounts = {
  apple: 1,
  pear: 4,
  banana: 26,
};

// type SingleFruitCount =
//   | {
//       apple: number;
//     }
//   | {
//       banana: number;
//     }
//   | {
//       pear: number;
//     };

type NewSingleFruitCount = {
  [K in keyof typeof fruitCounts]: {
    [K2 in K]: number;
  };
}[keyof typeof fruitCounts];

// eslint-disable-next-line unused-imports/no-unused-vars
const singleFruitCount: NewSingleFruitCount = {
  apple: 2,
  pear: 4,
  banana: 26,
};
