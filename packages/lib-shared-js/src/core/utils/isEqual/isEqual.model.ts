import { type InferModel, type StringKeyModel } from '@lib/shared/core/core.models';
import {
  type _IsEqualModel,
  type _IsEqualParamsModel,
} from '@lib/shared/core/utils/isEqual/_isEqual.models';

export type IsEqualParamsModel<TType = unknown> = _IsEqualParamsModel<TType>;

export type IsEqualModel = _IsEqualModel;

export type IsEqualOptionsModel<TType = unknown> = {
  exclude?: Array<StringKeyModel<InferModel<TType>>>;
  include?: Array<StringKeyModel<InferModel<TType>>>;
  isVerbose?: boolean;
};
