import { Product } from '@lib/backend/commerce/resources/Product/Product';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type ProductArgsModel } from '@lib/shared/commerce/utils/ProductArgs/ProductArgs.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ name: 'ProductArgs' })
export class ProductArgs extends Product implements ProductArgsModel {
  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  quantity?: number;
}
