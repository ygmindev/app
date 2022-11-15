import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactElement } from 'react';

export type UseActiveModel = CallableModel<{
  current?: ReactElement | null;
  previous?: ReactElement | null;
}>;
