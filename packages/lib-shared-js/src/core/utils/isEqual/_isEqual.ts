import {
  type _IsEqualModel,
  type _IsEqualParamsModel,
} from '@lib/shared/core/utils/isEqual/_isEqual.models';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import isEqual from 'lodash/isEqual';
import isObject from 'lodash/isObject';
import omit from 'lodash/omit';
import pick from 'lodash/pick';

export const _isEqual = <TType = unknown>(
  ...[x, y, options]: _IsEqualParamsModel<TType>
): _IsEqualModel => {
  if (options) {
    if (isObject(x) && isObject(y)) {
      let [xF, yF] = [
        JSON.parse(JSON.stringify(x)) as object,
        JSON.parse(JSON.stringify(y)) as object,
      ];
      options.include && ([xF, yF] = [pick(xF, options.include), pick(yF, options.include)]);
      options.exclude && ([xF, yF] = [omit(xF, options.exclude), omit(yF, options.exclude)]);
      const result = isEqual(xF, yF);
      !result &&
        (options.isVerbose || process.env.NODE_ENV === 'test') &&
        logger.debug(`expected: ${stringify(yF)} vs. received: ${stringify(xF)}`);
      return result;
    }
    return false;
  }
  return isEqual(x, y);
};
