import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import type { PaginationModel } from '@lib/shared/resource/utils/Pagination/Pagination.models';

@withEntity({ name: 'Pagination' })
export class Pagination implements PaginationModel {
  @withField()
  before?: string;

  @withField()
  after?: string;

  @withField()
  first?: number;

  @withField()
  last?: number;
}
