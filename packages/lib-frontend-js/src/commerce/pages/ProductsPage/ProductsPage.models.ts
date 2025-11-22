import { type PagePropsModel } from '@lib/frontend/core/core.models';
import { type ProductModel } from '@lib/model/commerce/Product/Product.models';
import { type ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export type ProductsPagePropsModel = PagePropsModel<ProductsPageParamsModel>;

export type ProductsPageParamsModel = {
  products: ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, ProductModel, undefined>;
};
