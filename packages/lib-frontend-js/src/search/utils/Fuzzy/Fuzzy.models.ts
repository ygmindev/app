import {
  type _FuzzyModel,
  type _FuzzyParamsModel as _FuzzyParamsModel,
} from '@lib/frontend/search/utils/Fuzzy/_Fuzzy.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type FuzzyParamsModel<TType extends WithIdModel> = _FuzzyParamsModel<TType>;

export type FuzzyModel<TType extends WithIdModel> = _FuzzyModel<TType>;
