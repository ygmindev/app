import {
  type _FuzzyModel,
  type _FuzzyParamsModel,
} from '@lib/frontend/search/utils/Fuzzy/_Fuzzy.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { Document, type FieldName } from 'flexsearch';

export class _Fuzzy<TType extends WithIdModel> implements _FuzzyModel<TType> {
  index: Document<TType, false, false>;

  constructor({ keys, options }: _FuzzyParamsModel<TType>) {
    this.index = new Document<TType>({
      document: {
        id: 'id',
        index: keys as Array<FieldName<TType>>,
        store: true,
      },
      tokenize: 'forward',
    });
    options.forEach((v) => this.index.add(v));
  }

  search = async (query: string, { limit }: { limit?: number }): Promise<Array<TType>> => {
    return filterNil(
      (await this.index.searchAsync({ enrich: true, limit, query }))
        ?.map((v) => v.result.map((vv) => vv.doc))
        .flat(),
    );
  };
}
