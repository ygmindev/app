import {
  type PartialModel,
  type PrimitiveModel,
  type RequiredModel,
} from '@lib/shared/core/core.models';

export type EntityResourceModel = {
  _id: string;
  beforeCreate?(): void;
  created: Date;
};

export type EntityResourceDataModel<TType> = TType extends PrimitiveModel
  ? TType
  : {
      [TKey in keyof Omit<
        TType,
        keyof RequiredModel<EntityResourceModel>
      >]?: RequiredModel<TType>[TKey] extends EntityResourceModel
        ? Pick<EntityResourceModel, '_id'>
        : RequiredModel<TType>[TKey] extends Array<infer TElement>
          ? Array<EntityResourceDataModel<TElement>>
          : RequiredModel<TType>[TKey];
    };

// export type EntityResourceDataModel<TType> = TType extends PrimitiveModel
//   ? TType
//   : {
//       [TKey in Exclude<
//         {
//           [TKey in keyof RequiredModel<TType>]: RequiredModel<TType>[TKey] extends EntityResourceModel
//             ? `_${TKey & string}`
//             : never;
//         }[keyof RequiredModel<TType>],
//         undefined
//       >]?: string;
//     } & {
//       [TKey in keyof Omit<
//         TType,
//         keyof RequiredModel<EntityResourceModel>
//       >]?: RequiredModel<TType>[TKey] extends EntityResourceModel
//         ? Pick<EntityResourceModel, '_id'>
//         : RequiredModel<TType>[TKey] extends Array<infer TElement>
//         ? Array<EntityResourceDataModel<TElement>>
//         : RequiredModel<TType>[TKey];

export type EntityResourcePartialModel<TType> = TType extends PrimitiveModel
  ? TType
  : TType extends Array<infer TElement>
    ? Array<EntityResourcePartialModel<TElement>>
    : (TType extends EntityResourceModel ? { _id: string } : PartialModel<Omit<TType, '_id'>>) & {
        [TKey in keyof Omit<RequiredModel<TType>, '_id'>]?: EntityResourcePartialModel<
          RequiredModel<TType>[TKey]
        >;
      };
