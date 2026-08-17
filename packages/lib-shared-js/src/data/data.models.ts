import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import {
  type FILE_STATUS,
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
  file: File;
  key?: string;
  name: string;
  preview?: string;
  progress?: number;
  src?: string;
  status?: FILE_STATUS;
};
