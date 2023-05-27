import type {
  VariableNameModel,
  VariableNameParamdModel,
} from '@lib/shared/core/utils/variableName/variableName.models';

export const variableName = (params: VariableNameParamdModel): VariableNameModel =>
  Object.keys(params)[0];
