import { type GeneratorParamsModel } from '@tool/task/generate/tasks/generate/generate.models';

export type GenerateConfigModel = {
  generator?: Record<string, GeneratorParamsModel>;

  resolveVariable(params: {
    template: string;
    variable: string;
    variables: Record<string, string>;
  }): Promise<string>;

  templateDir: string;
};
