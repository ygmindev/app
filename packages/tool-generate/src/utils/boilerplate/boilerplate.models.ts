import type { _BoilerplateParamsModel } from '#tool-generate/utils/boilerplate/_boilerplate.models';

export interface BoilerplateParamsModel extends Omit<_BoilerplateParamsModel, 'input' | 'output'> {
  onSuccess?(params: BoilerplateParamsModel): Promise<void>;
  output?: string;
}
