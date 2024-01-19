import mapValues from 'lodash/mapValues';
import toString from 'lodash/toString';

import { _parseArgs } from '@tool/task/core/utils/parseArgs/_parseArgs';
import { type ParseArgsModel } from '@tool/task/core/utils/parseArgs/parseArgs.models';

export const parseArgs = (): ParseArgsModel =>
  mapValues(_parseArgs(), (v) => {
    switch (v) {
      case 'true':
        return true;
      case 'false':
        return false;
      default:
        return toString(v);
    }
  });
