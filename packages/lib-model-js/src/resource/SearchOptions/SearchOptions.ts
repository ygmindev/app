import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { ENTITY_SCHEMA_TYPE } from '@lib/backend/resource/utils/withEntity/withEntity.constants';
import { GetManyOptions } from '@lib/model/resource/GetManyOptions/GetManyOptions';
import { SearchOptionsModel } from '@lib/model/resource/SearchOptions/SearchOptions.models';

@withEntity({ name: 'SearchOptions', schemaType: ENTITY_SCHEMA_TYPE.INPUT })
export class SearchOptions<TType>
  extends GetManyOptions<TType>
  implements SearchOptionsModel<TType> {}
