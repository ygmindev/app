import { type CollectionModel } from '@lib/backend/resource/utils/Collection/Collection.models';
import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import {
  type PartialModel,
  type PrimitiveModel,
  type RequiredModel,
  type StringKeyModel,
} from '@lib/shared/core/core.models';

export type EntityResourceModel = {
  _id: string;
  beforeCreate?(): Promise<void>;
  created: Date;
  isFixture?: boolean;
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
          ? Array<PartialModel<TElement>>
          : RequiredModel<TType>[TKey] extends CollectionModel<infer TElement>
            ? Array<PartialModel<TElement>>
            : RequiredModel<TType>[TKey] extends RefFieldModel<EntityResourceModel>
              ? string
              : RequiredModel<TType>[TKey];
    };
export type EntityResourcePartialModel<TType> = TType extends PrimitiveModel
  ? TType
  : TType extends Array<infer TElement>
    ? Array<EntityResourcePartialModel<TElement>>
    : TType extends EntityResourceModel
      ? Pick<TType, '_id'> & {
          [TKey in StringKeyModel<Omit<RequiredModel<TType>, '_id'>>]?: EntityResourcePartialModel<
            RequiredModel<TType>[TKey]
          >;
        }
      : PartialModel<TType>;
