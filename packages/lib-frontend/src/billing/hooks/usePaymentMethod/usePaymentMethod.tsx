import {
  type UsePaymentMethodModel,
  type UsePaymentMethodParamsModel,
} from '@lib/frontend/billing/hooks/usePaymentMethod/usePaymentMethod.models';
import { _usePaymentMethod } from '@lib/frontend/billing/hooks/usePaymentMethod/_usePaymentMethod';

export const usePaymentMethod = (
  { ...props }: UsePaymentMethodParamsModel,
): UsePaymentMethodModel => _usePaymentMethod({ ...props });
