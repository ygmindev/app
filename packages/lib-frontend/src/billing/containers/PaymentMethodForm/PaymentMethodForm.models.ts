import { type FieldPropsModel, type SubmittablePropsModel } from '#lib-frontend/form/form.models';
import { type PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type EntityResourcePartialModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type PaymentMethodFormPropsModel = Pick<SubmittablePropsModel, 'onCancel' | 'onSuccess'> &
  FieldPropsModel<EntityResourcePartialModel<PaymentMethodModel>>;
