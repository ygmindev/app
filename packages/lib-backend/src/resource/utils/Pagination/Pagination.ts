import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { FIELD_TYPE } from '#lib-shared/data/data.constants';
import { type PaginationModel } from '#lib-shared/resource/utils/Pagination/Pagination.models';

@withEntity({ name: 'Pagination' })
export class Pagination implements PaginationModel {
  @withField({ isOptional: true, type: FIELD_TYPE.STRING })
  before?: string;

  @withField({ isOptional: true, type: FIELD_TYPE.STRING })
  after?: string;

  @withField({ type: FIELD_TYPE.NUMBER })
  first!: number;

  @withField({ isOptional: true, type: FIELD_TYPE.NUMBER })
  last?: number;
}
