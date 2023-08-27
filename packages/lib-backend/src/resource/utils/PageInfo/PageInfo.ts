import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { FIELD_TYPE } from '#lib-shared/data/data.constants';
import { type PageInfoModel } from '#lib-shared/resource/utils/PageInfo/PageInfo.models';

@withEntity({ name: 'PageInfo' })
export class PageInfo implements PageInfoModel {
  @withField({ type: FIELD_TYPE.BOOLEAN })
  hasNextPage!: boolean;

  @withField({ type: FIELD_TYPE.BOOLEAN })
  hasPreviousPage!: boolean;

  @withField({ type: FIELD_TYPE.STRING })
  startCursor!: string | null;

  @withField({ type: FIELD_TYPE.STRING })
  endCursor!: string | null;
}
