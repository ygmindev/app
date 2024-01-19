import {
  type VariableNameModel,
  type VariableNameParamdModel,
} from '@lib/shared/core/utils/variableName/variableName.models';

export const variableName = (params: VariableNameParamdModel): VariableNameModel =>
  Object.keys(params)[0];
