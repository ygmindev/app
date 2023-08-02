import { inject } from 'inversify';

import { type ClassModel } from '#lib-shared/core/core.models';
import { type _WithInjectModel } from '#lib-shared/core/utils/withInject/_withInject.models';

export const _withInject = <TType extends ClassModel>(value: TType): _WithInjectModel =>
  inject(value);
