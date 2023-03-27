import { BANK_FIELDS } from '@lib/frontend/billing/hooks/useBankResource/useBankResource.constants';
import { CARD_FIELDS } from '@lib/frontend/billing/hooks/useCardResource/useCardResource.constants';
import type { UseResourceMethodParamsFieldsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { BANK_RESOURCE_NAME } from '@lib/shared/billing/resources/Bank/Bank.constants';
import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import type { PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import type { ResourceMethodTypeCrudModel } from '@lib/shared/resource/resource.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export const PAYMENT_METHOD_OUTPUT_FIELDS: UseResourceMethodParamsFieldsModel<
  ResourceMethodTypeCrudModel,
  PaymentMethodModel,
  UserModel
> = [
  {
    result: {
      [BANK_RESOURCE_NAME]: BANK_FIELDS,
      [CARD_RESOURCE_NAME]: CARD_FIELDS,
    },
  },
];
