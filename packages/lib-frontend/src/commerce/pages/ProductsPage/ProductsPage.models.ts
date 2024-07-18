import { type PagePropsModel } from '@lib/frontend/core/core.models';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';

export type ProductsPagePropsModel = PagePropsModel<ProductsPageParamsModel>;

export type ProductsPageParamsModel = {
  products: OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, ProductModel, undefined>;
};
