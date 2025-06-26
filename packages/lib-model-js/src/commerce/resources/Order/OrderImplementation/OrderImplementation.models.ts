import { type OrderModel } from '@lib/shared/commerce/resources/Order/Order.models';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type OrderImplementationModel = EntityResourceImplementationModel<OrderModel>;
