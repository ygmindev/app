import { type EmptyObjectModel } from '@lib/shared/core/core.models';

export type TrimValueParamsModel<TType extends string | Record<string, unknown> | Array<unknown>> = TType;

export type TrimValueModel<TType extends string | Record<string, unknown> | Array<unknown>> = TType;
