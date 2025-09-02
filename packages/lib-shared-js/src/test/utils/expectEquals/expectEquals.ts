import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import {
  type ExpectEqualsModel,
  type ExpectEqualsParamsModel,
} from '@lib/shared/test/utils/expectEquals/expectEquals.models';

export const expectEquals = <TType = unknown>(
  ...[x, y, options]: ExpectEqualsParamsModel<TType>
): ExpectEqualsModel => {
  if (options) {
    const result = isEqual(x, y, options);
    expect(result).toBeTruthy();
  } else {
    expect(x).toStrictEqual(y);
  }
};
