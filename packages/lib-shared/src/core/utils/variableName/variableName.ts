import type { CallableModel } from '@lib/shared/core/core.models';
import last from 'lodash/last';
import toString from 'lodash/toString';

export const variableName = <TResult>(name: CallableModel<TResult>): string | undefined =>
  last(
    toString(name)
      .replace(/[ |()=>]/g, '')
      .split('.'),
  );
