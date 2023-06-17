import type { CallablePromiseModel } from '#lib-shared/core/core.models';
import type { BoilerplateParamsModel } from '#tool-generate/utils/boilerplate/boilerplate.models';

export type GenerateParamsModel = Record<string, never>;

export type GeneratorParamsModel = {
  prepare?: CallablePromiseModel<Omit<BoilerplateParamsModel, 'template'>>;
} & Pick<BoilerplateParamsModel, 'onSuccess' | 'output'>;
