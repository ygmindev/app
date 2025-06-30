import { type ProductModel } from '@lib/model/commerce/Product/Product.models';
import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type ProductImplementationModel = EntityResourceImplementationModel<ProductModel>;
