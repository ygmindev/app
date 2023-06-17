import type { _BoilerplateParamsModel } from '#tool-generate/utils/boilerplate/_boilerplate.models';

export type BoilerplateParamsModel = {
  onSuccess?(params: BoilerplateParamsModel): Promise<void>;
  output?: string;
} & Omit<_BoilerplateParamsModel, 'input' | 'output'>;
