import type {
  StringifyModel,
  StringifyParamsModel,
} from '@lib/shared/core/utils/stringify/stringify.models';

export const stringify = (params?: StringifyParamsModel): StringifyModel =>
  params ? JSON.stringify(params, null, '  ') : 'undefined';
