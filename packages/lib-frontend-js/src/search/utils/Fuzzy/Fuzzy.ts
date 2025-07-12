import { _Fuzzy } from '@lib/frontend/search/utils/Fuzzy/_Fuzzy';
import {
  type FuzzyModel,
  type FuzzyParamsModel,
} from '@lib/frontend/search/utils/Fuzzy/Fuzzy.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export class Fuzzy<TType extends WithIdModel> extends _Fuzzy<TType> implements FuzzyModel<TType> {
  constructor(params: FuzzyParamsModel<TType>) {
    super(params);
  }
}
