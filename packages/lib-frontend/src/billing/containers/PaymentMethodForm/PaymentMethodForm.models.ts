import { type FieldPropsModel, type SubmittablePropsModel } from '#lib-frontend/data/data.models';
import { type PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type PartialModel } from '#lib-shared/core/core.models';

export type PaymentMethodFormPropsModel = Pick<
  SubmittablePropsModel<void, void>,
  'onCancel' | 'onSuccess'
> &
  FieldPropsModel<PartialModel<PaymentMethodModel>>;
