import { isArray } from '@lib/shared/core/utils/isArray/isArray.base';
import {
  type _IsEqualModel,
  type _IsEqualParamsModel,
} from '@lib/shared/core/utils/isEqual/_isEqual.models';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import isEqual from 'lodash/isEqual';
import isNil from 'lodash/isNil';
import isObject from 'lodash/isObject';
import omit from 'lodash/omit';
import pick from 'lodash/pick';
import zip from 'lodash/zip';

export const _isEqual = <TType = unknown>(
  ...[x, y, options]: _IsEqualParamsModel<TType>
): _IsEqualModel => {
  if (options) {
    let [xF, yF] = [
      isNil(x) ? x : (JSON.parse(JSON.stringify(x)) as object),
      isNil(y) ? y : (JSON.parse(JSON.stringify(y)) as object),
    ];
    let result: boolean = false;
    if (isObject(xF) && isObject(yF)) {
      options.include && ([xF, yF] = [pick(xF, options.include), pick(yF, options.include)]);
      options.exclude && ([xF, yF] = [omit(xF, options.exclude), omit(yF, options.exclude)]);
      result =
        _isEqual(Object.keys(xF).sort(), Object.keys(yF).sort()) &&
        Object.keys(xF).every((k) =>
          _isEqual(
            (xF as object)[k as keyof typeof xF],
            (yF as object)[k as keyof typeof yF],
            options,
          ),
        );
    } else if (isArray(xF) && isArray(yF)) {
      result =
        (xF as Array<TType>).length === (yF as Array<TType>).length &&
        zip((xF as Array<TType>).sort(), (yF as Array<TType>).sort()).every((v) =>
          _isEqual(v[0] as TType, v[1] as TType, options),
        );
    } else {
      result = isEqual(xF, yF);
    }
    !result &&
      (options.isVerbose || process.env.NODE_ENV === 'test') &&
      logger.debug(`expected: ${stringify(xF)} vs. received: ${stringify(yF)}`);
    return result;
  }
  return isEqual(x, y);
};
