import type { EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import type { EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export interface PaymentMethodModel extends EmbeddedResourceModel {}

export interface PaymentMethodFormModel extends EntityResourceDataModel<PaymentMethodModel> {}
