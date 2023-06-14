import type { BankFormModel } from '#lib-shared/billing/resources/Bank/Bank.models';
import type { CardFormModel } from '#lib-shared/billing/resources/Card/Card.models';
import type { PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import type { EntityResourcePartialModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

import type { FieldPropsModel, SubmittablePropsModel } from '#lib-frontend/form/form.models';

export interface _PaymentMethodFieldPropsModel
  extends FieldPropsModel<EntityResourcePartialModel<PaymentMethodModel>>,
    SubmittablePropsModel<BankFormModel | CardFormModel> {
  token?: string;
}
