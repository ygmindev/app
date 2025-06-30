import { type CollectionModel } from '@lib/model/core/Collection/Collection.models';
import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import {
  type PartialModel,
  type PrimitiveModel,
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
        keyof Required<Omit<EntityResourceModel, 'isFixture'>>
      >]?: Required<TType>[TKey] extends EntityResourceModel
        ? Pick<EntityResourceModel, '_id'>
        : Required<TType>[TKey] extends Array<infer TElement>
          ? Array<PartialModel<TElement>>
          : Required<TType>[TKey] extends CollectionModel<infer TElement>
            ? Array<PartialModel<TElement>>
            : Required<TType>[TKey] extends RefFieldModel<EntityResourceModel>
              ? string
              : Required<TType>[TKey];
    };

export type EntityResourcePartialModel<TType> = TType extends PrimitiveModel
  ? TType
  : TType extends Array<infer TElement>
    ? Array<EntityResourcePartialModel<TElement>>
    : TType extends EntityResourceModel
      ? Pick<TType, '_id'> & {
          [TKey in StringKeyModel<Omit<Required<TType>, '_id'>>]?: EntityResourcePartialModel<
            Required<TType>[TKey]
          >;
        }
      : PartialModel<TType>;
