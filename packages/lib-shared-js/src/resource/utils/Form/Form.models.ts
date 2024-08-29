import { type PartialModel } from '@lib/shared/core/core.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type FormModel<TType> = PartialModel<EntityResourceDataModel<TType>>;
