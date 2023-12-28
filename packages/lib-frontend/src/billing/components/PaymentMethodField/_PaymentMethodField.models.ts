import { type FieldPropsModel } from '#lib-frontend/data/data.models';
import { type CardFormModel } from '#lib-shared/billing/resources/Card/Card.models';

export type _PaymentMethodFieldPropsModel = FieldPropsModel<CardFormModel> & {
  token?: string;
};
