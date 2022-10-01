import type { CallableModel } from '@lib/shared/core/core.models';
import { last, toString } from 'lodash';

export const variableName = <TResult>(name: CallableModel<never, TResult>): string | undefined =>
  last(
    toString(name)
      .replace(/[ |()=>]/g, '')
      .split('.'),
  );
