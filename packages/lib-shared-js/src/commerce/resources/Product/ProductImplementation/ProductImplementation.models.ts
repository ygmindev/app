import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type ProductImplementationModel = EntityResourceImplementationModel<ProductModel>;
