import mapValues from 'lodash/mapValues';
import toString from 'lodash/toString';

import { BOOLEAN_STRING } from '#lib-shared/core/core.constants';
import { _parseArgs } from '#tool-task/core/utils/parseArgs/_parseArgs';
import { type ParseArgsModel } from '#tool-task/core/utils/parseArgs/parseArgs.models';

export const parseArgs = (): ParseArgsModel =>
  mapValues(_parseArgs(), (v) => {
    switch (v) {
      case BOOLEAN_STRING.TRUE:
        return true;
      case BOOLEAN_STRING.FALSE:
        return false;
      default:
        return toString(v);
    }
  });
