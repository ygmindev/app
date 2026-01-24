import {
  type _BoilerplateModel,
  type _BoilerplateParamsModel,
} from '@tool/task/generate/utils/boilerplate/_boilerplate.models';

export type BoilerplateParamsModel = Omit<
  _BoilerplateParamsModel,
  'outPathname' | 'templatePathname'
> & {
  outPathname?: string;
  templateDir: string;
  onSuccess?(params: Omit<BoilerplateParamsModel, 'templateDir'>): Promise<void>;
};

export type BoilerplateModel = _BoilerplateModel;
