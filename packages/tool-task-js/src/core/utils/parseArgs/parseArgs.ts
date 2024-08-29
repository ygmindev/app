import { _parseArgs } from '@tool/task/core/utils/parseArgs/_parseArgs';
import { type ParseArgsModel } from '@tool/task/core/utils/parseArgs/parseArgs.models';
import isArray from 'lodash/isArray';
import mapValues from 'lodash/mapValues';
import toString from 'lodash/toString';

export const parseArgs = (): ParseArgsModel =>
  mapValues(_parseArgs(), (v) => {
    if (isArray(v)) {
      return v.map(toString);
    }
    switch (v) {
      case 'true':
        return true;
      case 'false':
        return false;
      default:
        return toString(v);
    }
  });
