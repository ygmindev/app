import { _PaymentMethodField } from '@lib/frontend/billing/components/PaymentMethodField/_PaymentMethodField';
import type { _PaymentMethodFieldPropsModel } from '@lib/frontend/billing/components/PaymentMethodField/_PaymentMethodField.models';
import type { PaymentMethodFieldPropsModel } from '@lib/frontend/billing/components/PaymentMethodField/PaymentMethodField.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const PaymentMethodField = composeComponent<
  PaymentMethodFieldPropsModel,
  _PaymentMethodFieldPropsModel
>({
  Component: _PaymentMethodField,
});

process.env.APP_DEBUG && (PaymentMethodField.displayName = variableName(() => PaymentMethodField));
