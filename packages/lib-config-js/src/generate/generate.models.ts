import { type BoilerplateParamsModel } from '@tool/task/generate/utils/boilerplate/boilerplate.models';

export type GenerateConfigModel = {
  generator?: Record<string, GeneratorParamsModel>;

  templateDir: string;

  variablePattern: RegExp;
};

export type GeneratorParamsModel = Pick<BoilerplateParamsModel, 'onSuccess' | 'outPathname'> & {
  prepare?(): Promise<Omit<BoilerplateParamsModel, 'template' | 'templateDir'>>;
};
