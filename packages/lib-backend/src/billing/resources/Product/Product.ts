import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { PRODUCT_RESOURCE_NAME } from '@lib/shared/billing/resources/Product/Product.constants';
import {
  type ProductFormModel,
  type ProductModel,
} from '@lib/shared/billing/resources/Product/Product.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isRepository: true, name: PRODUCT_RESOURCE_NAME })
export class Product extends EntityResource implements ProductModel {
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  name!: string;
}

@withEntity({ name: `${PRODUCT_RESOURCE_NAME}Form` })
export class ProductForm implements ProductFormModel {}
