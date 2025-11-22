import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { ENTITY_SCHEMA_TYPE } from '@lib/backend/resource/utils/withEntity/withEntity.constants';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { SortByModel } from '@lib/model/resource/SortBy/SortBy.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ name: 'SortBy', schemaType: ENTITY_SCHEMA_TYPE.INPUT })
export class SortBy<TType extends unknown> implements SortByModel<TType> {
  @withField()
  key!: StringKeyModel<TType>;

  @withField({ isOptional: true, type: DATA_TYPE.BOOLEAN })
  order?: boolean;
}
