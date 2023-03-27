import type { SubmittablePropsModel } from '@lib/frontend/form/form.models';

export interface PaymentMethodFormPropsModel
  extends Pick<SubmittablePropsModel, 'onCancel' | 'onSuccess'> {}
