import {
  createSelectorHooks,
  ZustandHookSelectors,
} from 'auto-zustand-selectors-hook';
import create, { Mutate, StoreApi as Store } from 'zustand';

// This is a reference
class CounterStore {
  constructor(
    private readonly set: Store<CounterStore>['setState'],
    private readonly get: Store<CounterStore>['getState'],
    private readonly store: Mutate<
      Store<CounterStore>,
      [/* add middleware mutators here */]
    >
  ) {}

  counter = 0;

  add = (x: number) => {
    this.set((state) => ({ counter: state.counter + x }));
  };

  increment = () => {
    this.add(1);
  };

  decrement = () => {
    this.add(-1);
  };
}

const useCounterStoreBase = create<CounterStore>()(
  (set, get, store) => new CounterStore(set, get, store)
);

export const useCounterStore = createSelectorHooks(
  useCounterStoreBase
) as typeof useCounterStoreBase & ZustandHookSelectors<CounterStore>;
