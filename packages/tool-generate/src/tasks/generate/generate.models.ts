import type { CallablePromiseModel } from '#lib-shared/core/core.models';
import type { BoilerplateParamsModel } from '#tool-generate/utils/boilerplate/boilerplate.models';

export interface GenerateParamsModel {}

export interface GeneratorParamsModel extends Pick<BoilerplateParamsModel, 'onSuccess' | 'output'> {
  prepare?: CallablePromiseModel<Omit<BoilerplateParamsModel, 'template'>>;
}
