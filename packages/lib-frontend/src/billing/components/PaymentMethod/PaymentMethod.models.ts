import type { ElementStatePropsModel } from '@lib/frontend/core/core.models';
import type { PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';

export interface PaymentMethodPropsModel extends ElementStatePropsModel {
  value?: PaymentMethodModel;
}
