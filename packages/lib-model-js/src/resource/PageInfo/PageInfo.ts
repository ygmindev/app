import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type PageInfoModel } from '@lib/model/resource/PageInfo/PageInfo.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ name: 'PageInfo' })
export class PageInfo implements PageInfoModel {
  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  count?: number;

  @withField({ type: DATA_TYPE.NUMBER })
  page!: number;

  @withField({ type: DATA_TYPE.NUMBER })
  pageSize!: number;

  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  pages?: number;
}
