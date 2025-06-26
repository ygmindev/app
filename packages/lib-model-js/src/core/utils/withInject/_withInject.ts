import { inject } from 'inversify';

import { type ClassModel } from '@lib/shared/core/core.models';
import {
  type _WithInjectModel,
  type _WithInjectParamsModel,
} from '@lib/shared/core/utils/withInject/_withInject.models';

export const _withInject = <TType extends ClassModel>(
  value: _WithInjectParamsModel<TType>,
): _WithInjectModel => inject(value);
