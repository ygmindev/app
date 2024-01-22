import { type BoilerplateParamsModel } from '@tool/task/generate/utils/boilerplate/boilerplate.models';

export type GenerateParamsModel = {
  template: string;
};

export type GeneratorParamsModel = {
  prepare?(): Promise<Omit<BoilerplateParamsModel, 'template'>>;
} & Pick<BoilerplateParamsModel, 'onSuccess' | 'output'>;
