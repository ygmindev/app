import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import {
  type DATA_TYPE,
  type DATA_TYPE_MORE,
  type PROPERTY_TYPE,
} from '@lib/shared/data/data.constants';

export type FormattableTypeModel = PROPERTY_TYPE | DATA_TYPE | DATA_TYPE_MORE;

export type RangeModel<TType> = {
  max?: TType;
  min?: TType;
};

export type FileModel = WithIdModel & {
  name: string;
  size?: number;
  type: string;
  url: string;
};
