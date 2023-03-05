import type { FieldPropsModel } from '@lib/frontend/form/form.models';
import type { BankFormModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import type { CardFormModel } from '@lib/shared/billing/resources/Card/Card.models';

export interface _PaymentMethodFieldPropsModel extends FieldPropsModel {
  onBankCreate(form: BankFormModel): Promise<void>;

  onCardCreate(form: CardFormModel): Promise<void>;

  token?: string;
}
