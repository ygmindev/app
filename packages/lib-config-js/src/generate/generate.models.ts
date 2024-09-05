import { type GeneratorParamsModel } from '@tool/task/generate/tasks/generate/generate.models';

export type GenerateConfigModel = {
  generator?: Record<string, GeneratorParamsModel>;

  templateDir: string;
};
