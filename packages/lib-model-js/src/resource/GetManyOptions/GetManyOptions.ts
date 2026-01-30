import { ResourceClassModel } from '@lib/backend/resource/resource.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { ENTITY_SCHEMA_TYPE } from '@lib/backend/resource/utils/withEntity/withEntity.constants';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { FILTER_COMBINATION } from '@lib/model/resource/Filter/Filter.constants';
import { type GetManyOptionsModel } from '@lib/model/resource/GetManyOptions/GetManyOptions.models';
import { SortBy } from '@lib/model/resource/SortBy/SortBy';
import { SortByModel } from '@lib/model/resource/SortBy/SortBy.models';
import { StringKeyModel } from '@lib/shared/core/core.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ name: 'GetManyOptions', schemaType: ENTITY_SCHEMA_TYPE.INPUT })
export class GetManyOptions<TType> implements GetManyOptionsModel<TType> {
  @withField({ isOptional: true })
  combination?: FILTER_COMBINATION;

  @withField({ isOptional: true, type: DATA_TYPE.JSON })
  cursor?: Partial<TType>;

  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  limit?: number;

  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  page?: number;

  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  pageSize?: number;

  @withField({ isArray: true, isOptional: true })
  populate?: Array<StringKeyModel<TType>>;

  @withField({
    Resource: () => SortBy as ResourceClassModel<SortByModel<TType>>,
    isArray: true,
    isOptional: true,
  })
  sortBy?: Array<SortByModel<TType>>;
}
