import {
  type GetFingerprintInputModel,
  type GetFingerprintInputParamsModel,
} from '@lib/backend/billing/utils/getFingerprintInput/getFingerprintInput.models';
import { StripeAdminImplementation } from '@lib/backend/billing/utils/StripeAdminImplementation/StripeAdminImplementation';
import { Container } from '@lib/shared/core/utils/Container/Container';
import {
  type PaymentMethodFormModel,
  type PaymentMethodModel,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';

export const getFingerprintInput = async <
  TType extends PaymentMethodModel,
  TForm extends PaymentMethodFormModel,
>({
  input,
  type,
}: GetFingerprintInputParamsModel<TType, TForm>): Promise<
  GetFingerprintInputModel<TType, TForm>
> => {
  const id = input?.form?.externalId;
  const fingerprint =
    id && (await Container.get(StripeAdminImplementation).getFingerprint({ id, type }));
  input?.form && fingerprint && (input.form.fingerprint = fingerprint);
  return input;
};
