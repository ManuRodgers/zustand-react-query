import { StateCreator, StoreMutatorIdentifier } from 'zustand';

// declare module 'zustand' {
//   interface StoreMutators<S, A> {
//     'zustand/logger': string;
//   }
// }

type Logger = <
  T,
  Mps extends [StoreMutatorIdentifier, unknown][] = [],
  Mcs extends [StoreMutatorIdentifier, unknown][] = []
>(
  initializer: StateCreator<T, [...Mps], Mcs>,
  name?: string
) => StateCreator<T, Mps, Mcs>;

// conditional type
type PopArgument<T extends (...a: never[]) => unknown> = T extends (
  ...a: [...infer A, infer _]
) => infer R
  ? (...a: A) => R
  : never;

type LoggerImpl = <T>(
  f: PopArgument<StateCreator<T, [], []>>,
  name?: string
) => PopArgument<StateCreator<T, [], []>>;

const loggerImpl: LoggerImpl = (f, name) => (set, get, store) => {
  // type T = ReturnType<typeof f>;
  const loggedSet: typeof set = (...a) => {
    set(...a);
    // eslint-disable-next-line no-console
    console.log(...(name ? [`${name}:`] : []), get());
  };
  store.setState = loggedSet;
  return f(loggedSet, get, store);
};

export const logger = loggerImpl as unknown as Logger;
