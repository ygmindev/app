import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { type PageInfoModel } from '@lib/shared/resource/utils/PageInfo/PageInfo.models';

@withEntity({ name: 'PageInfo' })
export class PageInfo implements PageInfoModel {
  @withField({ type: DATA_TYPE.BOOLEAN })
  hasNextPage!: boolean;

  @withField({ type: DATA_TYPE.BOOLEAN })
  hasPreviousPage!: boolean;

  @withField({ type: DATA_TYPE.STRING })
  startCursor!: string | null;

  @withField({ type: DATA_TYPE.STRING })
  endCursor!: string | null;
}
