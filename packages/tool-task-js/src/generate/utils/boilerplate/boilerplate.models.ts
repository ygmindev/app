import {
  type _BoilerplateModel,
  type _BoilerplateParamsModel,
} from '@tool/task/generate/utils/boilerplate/_boilerplate.models';

export type BoilerplateParamsModel = {
  onSuccess?(params: BoilerplateParamsModel): Promise<void>;
  output?: string;
} & Omit<_BoilerplateParamsModel, 'input' | 'output'>;

export type BoilerplateModel = _BoilerplateModel;
