import {
  type _BoilerplateModel,
  type _BoilerplateParamsModel,
} from '@tool/task/generate/utils/boilerplate/_boilerplate.models';

export type BoilerplateParamsModel = {
  onSuccess?(params: Omit<BoilerplateParamsModel, 'templateDir'>): Promise<void>;
  output?: string;
  templateDir: string;
} & Omit<_BoilerplateParamsModel, 'input' | 'output'>;

export type BoilerplateModel = _BoilerplateModel;
