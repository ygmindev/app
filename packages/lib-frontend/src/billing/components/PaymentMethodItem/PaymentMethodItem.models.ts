import type { ElementStatePropsModel } from '#lib-frontend/core/core.models';
import type { PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import type { EntityResourcePartialModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type PaymentMethodItemPropsModel = {
  value?: EntityResourcePartialModel<PaymentMethodModel>;
} & ElementStatePropsModel;
