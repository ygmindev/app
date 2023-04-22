import type { PagePropsModel } from '@lib/frontend/core/core.models';
import type { PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import type { EntityResourcePartialModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { LocationParamsModel } from '@lib/frontend/route/route.models';

export interface PaymentMethodFormPagePropsModel extends PagePropsModel {}

export type PaymentMethodFormPageParamsModel = LocationParamsModel & {
  value?: EntityResourcePartialModel<PaymentMethodModel>;
};
