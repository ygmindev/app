import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type PaginationModel } from '@lib/shared/resource/utils/Pagination/Pagination.models';

@withEntity({ name: 'Pagination' })
export class Pagination implements PaginationModel {
  @withField({ isOptional: true })
  after?: string;

  @withField({ isOptional: true })
  before?: string;

  @withField()
  first!: number;

  @withField({ isOptional: true })
  last?: number;
}
