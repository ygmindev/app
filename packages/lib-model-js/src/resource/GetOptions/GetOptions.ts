import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { ENTITY_SCHEMA_TYPE } from '@lib/backend/resource/utils/withEntity/withEntity.constants';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { FILTER_COMBINATION } from '@lib/model/resource/Filter/Filter.constants';
import { type GetOptionsModel } from '@lib/model/resource/GetOptions/GetOptions.models';
import { StringKeyModel } from '@lib/shared/core/core.models';

@withEntity({ name: 'GetOptions', schemaType: ENTITY_SCHEMA_TYPE.INPUT })
export class GetOptions<TType> implements GetOptionsModel<TType> {
  @withField({ isOptional: true })
  combination?: FILTER_COMBINATION;

  @withField({ isArray: true, isOptional: true })
  populate?: Array<StringKeyModel<TType>>;
}
