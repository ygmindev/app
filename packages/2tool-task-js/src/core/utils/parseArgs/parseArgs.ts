import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { _parseArgs } from '@tool/task/core/utils/parseArgs/_parseArgs';
import { type ParseArgsModel } from '@tool/task/core/utils/parseArgs/parseArgs.models';
import camelCase from 'lodash/camelCase';
import reduce from 'lodash/reduce';
import toString from 'lodash/toString';

export const parseArgs = (): ParseArgsModel =>
  reduce(
    _parseArgs(),
    (result, v, k) => {
      const vF = (() => {
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
      })();
      return { ...result, [camelCase(k)]: vF };
    },
    {},
  );
