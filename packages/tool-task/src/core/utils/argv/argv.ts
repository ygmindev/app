import type { ArgvModel, ArgvParamsModel } from '#tool-task/core/utils/argv/argv.models';
import reduce from 'lodash/reduce';

export const argv = (params: ArgvParamsModel): ArgvModel =>
  reduce(params, (result, v, k) => (v ? `${result} ${k} ${v}` : result), '');
