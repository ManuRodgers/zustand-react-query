import { Component, FC } from 'react';

// eslint-disable-next-line unused-imports/no-unused-vars
const MyComponent = (props: { enabled: boolean }) => {
  return null;
};

// class MyOtherComponent extends Component<{ enabled: boolean }> {}
// ! conditional type
type PropsFrom<TComponent> = TComponent extends FC<infer Props>
  ? Props
  : TComponent extends Component<infer Props>
  ? Props
  : never;

// eslint-disable-next-line unused-imports/no-unused-vars
const props: PropsFrom<typeof MyComponent> = { enabled: true };
