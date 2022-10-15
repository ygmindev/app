import type { PartialModel } from '@lib/shared/core/core.models';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';

export type ResourceMethodTypeModel = `${RESOURCE_METHOD_TYPE}`;

export type ResolvedFieldModel<TType> = PartialModel<TType>;
