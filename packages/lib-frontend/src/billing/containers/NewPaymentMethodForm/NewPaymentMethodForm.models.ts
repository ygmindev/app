import { type FormContainerPropsModel } from '@lib/frontend/data/components/FormContainer/FormContainer.models';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type NilModel, type PartialModel } from '@lib/shared/core/core.models';

export type NewPaymentMethodFormPropsModel = FormContainerPropsModel<
  void,
  PartialModel<PaymentMethodModel> | NilModel
>;
