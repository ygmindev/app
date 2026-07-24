import { type FILTER_COMBINATION } from '@lib/model/resource/Filter/Filter.constants';
import { type StringKeyModel } from '@lib/shared/core/core.models';

export type GetOptionsModel<TType> = {
  combination?: FILTER_COMBINATION;

  populate?: Array<StringKeyModel<TType>>;
};
