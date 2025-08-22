import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type PageInfoModel } from '@lib/shared/resource/utils/PageInfo/PageInfo.models';

@withEntity({ name: 'PageInfo' })
export class PageInfo implements PageInfoModel {
  @withField()
  endCursor!: string | null;

  @withField()
  hasNextPage!: boolean;

  @withField()
  hasPreviousPage!: boolean;

  @withField()
  startCursor!: string | null;
}
