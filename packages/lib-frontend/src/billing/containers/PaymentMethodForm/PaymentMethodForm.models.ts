import type { PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import type { EntityResourcePartialModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

import type { FieldPropsModel, SubmittablePropsModel } from '#lib-frontend/form/form.models';

export interface PaymentMethodFormPropsModel
  extends Pick<SubmittablePropsModel, 'onCancel' | 'onSuccess'>,
    FieldPropsModel<EntityResourcePartialModel<PaymentMethodModel>> {}
