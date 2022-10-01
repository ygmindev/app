import type { BoilerplateParamsModel } from '@tool/generate/utils/boilerplate/boilerplate.models';

export interface GenerateParamsModel {}

export interface GeneratorParamsModel extends Pick<BoilerplateParamsModel, 'onSuccess' | 'output'> {
  prepare?(): Promise<Omit<BoilerplateParamsModel, 'template'>>;
}
