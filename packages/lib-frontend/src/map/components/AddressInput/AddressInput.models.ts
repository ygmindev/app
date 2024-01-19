import { type InputRefModel, type InputPropsModel } from '@lib/frontend/data/data.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type CoordinateModel } from '@lib/shared/map/map.models';

export type AddressInputPropsModel = InputPropsModel<AddressOptionModel>;

export type AddressInputRefModel = InputRefModel<AddressOptionModel>;

export type AddressOptionModel = WithIdModel &
  CoordinateModel & {
    label: string;
  };
