import type { Split, UnionToIntersection } from 'type-fest';

const query = `/home?a=foo&b=wow`;
// const obj= {
//   a: 'foo',
//   b: 'wow',
// };
type Query = typeof query;
type SecondQueryPart = Split<Query, '?'>[1];
type QueryElements = Split<SecondQueryPart, '&'>;
type QueryParams = {
  [QueryElement in QueryElements[number]]: {
    [Key in Split<QueryElement, '='>[0]]: Split<QueryElement, '='>[1];
  };
}[QueryElements[number]];

// eslint-disable-next-line unused-imports/no-unused-vars
const queryParams: UnionToIntersection<QueryParams> = {
  a: 'foo',
  b: 'wow',
};
