import { type _PaymentMethodInputPropsModel } from '@lib/frontend/billing/components/PaymentMethodInput/_PaymentMethodInput.models';
import { type InputRefModel } from '@lib/frontend/data/data.models';
import { type PaymentMethodFormModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';

export type PaymentMethodInputPropsModel = _PaymentMethodInputPropsModel;

export type PaymentMethodInputRefModel = InputRefModel<PaymentMethodFormModel>;
