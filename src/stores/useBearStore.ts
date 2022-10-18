import {
  createSelectorHooks,
  ZustandHookSelectors,
} from 'auto-zustand-selectors-hook';
import create from 'zustand';

import { myMiddlewares } from '@/stores/middlewares';

export type BearState = {
  bears: number;
};

export type BearAction = {
  increase: (by: number) => void;
  decrease: (by: number) => void;
  increment: () => void;
  removeAllBears: () => void;
};

const useBearStoreBase = create<BearState & BearAction>()(
  myMiddlewares<BearState, BearAction>((set) => ({
    bears: 0,
    increase: (by) =>
      set(
        (state) => {
          state.bears += by;
        },
        false,
        { type: 'bear/increase', by }
      ),
    decrease: (by) =>
      set(
        (state) => {
          state.bears -= by;
        },
        false,
        { type: 'bear/decrease', by }
      ),
    increment: () =>
      set(
        (state) => {
          state.bears += 1;
        },
        false,
        'bear/increment'
      ),
    removeAllBears: () =>
      set(
        (state) => {
          state.bears = 0;
        },
        false,
        'bear/removeAllBears'
      ),
  }))
);

export const useBearStore = createSelectorHooks(
  useBearStoreBase
) as typeof useBearStoreBase & ZustandHookSelectors<BearState & BearAction>;

// for learning how to use infer in conditional type
// interface ApiData {
//   'maps:longitude': string;
//   'maps:latitude': string;
//   awesome: boolean;
// }
// mapped object type, index type query, index type access
// type RemoveMapsForObject<T> = {
//   [K in keyof T as RemoveMaps<K>]: T[K];
// };

// type DesignedType = RemoveMapsForObject<ApiData>;
//   ^?
// conditional type
// type RemoveMaps<T> = T extends `maps:${infer U}` ? U : T;
