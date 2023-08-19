import { type FieldPropsModel, type SubmittablePropsModel } from '#lib-frontend/form/form.models';
import { type BankFormModel } from '#lib-shared/billing/resources/Bank/Bank.models';
import { type CardFormModel } from '#lib-shared/billing/resources/Card/Card.models';
import { type PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type EntityResourcePartialModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type _PaymentMethodFieldPropsModel = {
  token?: string;
} & Omit<FieldPropsModel<EntityResourcePartialModel<PaymentMethodModel>>, 'onSubmit'> &
  SubmittablePropsModel<BankFormModel | CardFormModel>;
