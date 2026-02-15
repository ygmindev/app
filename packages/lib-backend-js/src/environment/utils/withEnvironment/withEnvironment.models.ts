import { type EnvironmentParamsModel } from '@lib/backend/environment/utils/Environment/Environment.models';

export type WithEnvironmentParamsModel<TType extends unknown> = [
  params: EnvironmentParamsModel,
  fn: () => Promise<TType>,
];

export type WithEnvironmentModel<TType extends unknown> = TType;
