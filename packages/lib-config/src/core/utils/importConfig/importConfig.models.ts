import type { ReturnTypeModel } from '@lib/shared/core/core.models';

export type ImportConfigParamsModel = string;

export type ImportConfigModel<TType> = Promise<ReturnTypeModel<TType>>;
