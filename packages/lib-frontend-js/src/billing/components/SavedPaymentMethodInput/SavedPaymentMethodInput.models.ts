import { type ValuePropsModel } from '@lib/frontend/data/data.models';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type SavedPaymentMethodInputPropsModel = ValuePropsModel<PartialModel<PaymentMethodModel>>;
