export type Entity =
  | {
      type: 'user';
    }
  | {
      type: 'post';
    }
  | {
      type: 'comment';
    };

// type EntityWithId =
//   | {
//       type: 'user';
//       userId: string;
//     }
//   | {
//       type: 'post';
//       postId: string;
//     }
//   | {
//       type: 'comment';
//       commentId: string;
//     };
// We want to turn this object type into an union type with an index operation to the object
// eslint-disable-next-line unused-imports/no-unused-vars
type EntityWithId = {
  [EntityType in Entity['type']]: {
    type: EntityType;
  } & Record<`${EntityType}Id`, string>;
}[Entity['type']];
