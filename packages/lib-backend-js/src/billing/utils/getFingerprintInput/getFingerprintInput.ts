import {
  type GetFingerprintInputModel,
  type GetFingerprintInputParamsModel,
} from '@lib/backend/billing/utils/getFingerprintInput/getFingerprintInput.models';
import { StripeAdminImplementation } from '@lib/backend/billing/utils/StripeAdminImplementation/StripeAdminImplementation';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const getFingerprintInput = async <TType extends PaymentMethodModel>({
  input,
  type,
}: GetFingerprintInputParamsModel<TType>): Promise<GetFingerprintInputModel<TType>> => {
  const id = input?.form?.externalId;
  const fingerprint =
    id && (await Container.get(StripeAdminImplementation).getFingerprint({ id, type }));
  input?.form && fingerprint && (input.form.fingerprint = fingerprint);
  return input;
};
