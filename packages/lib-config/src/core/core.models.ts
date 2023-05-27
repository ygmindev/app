import type { CallableModel, ReturnTypeModel } from '@lib/shared/core/core.models';

export type ConfigDynamicModel<TType> = CallableModel<ReturnTypeModel<TType>>;
