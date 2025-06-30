import { type OrderModel } from '@lib/model/commerce/Order/Order.models';
import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type OrderImplementationModel = EntityResourceImplementationModel<OrderModel>;
