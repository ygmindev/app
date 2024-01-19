import { type FieldPropsModel, type FieldRefModel } from '@lib/frontend/data/data.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type CoordinateModel } from '@lib/shared/map/map.models';

export type AddressFieldPropsModel = FieldPropsModel<AddressOptionModel>;

export type AddressFieldRefModel = FieldRefModel<AddressOptionModel>;

export type AddressOptionModel = WithIdModel &
  CoordinateModel & {
    label: string;
  };
