import stringify from 'json-stringify-safe';

import {
  type _StringifyModel,
  type _StringifyParamsModel,
} from '#lib-shared/core/utils/stringify/_stringify.models';

export const _stringify = (...[params, options]: _StringifyParamsModel): _StringifyModel =>
  options?.isMinify ?? true ? stringify(params) : stringify(params, null, '  ');
