import { type BoilerplateParamsModel } from '@tool/task/generate/utils/boilerplate/boilerplate.models';

export type GenerateParamsModel = {
  template: string;
};

export type GeneratorParamsModel = Pick<BoilerplateParamsModel, 'onSuccess' | 'output'> & {
  prepare?(): Promise<Omit<BoilerplateParamsModel, 'template' | 'templateDir'>>;
};
