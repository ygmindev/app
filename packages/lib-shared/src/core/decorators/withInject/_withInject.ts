import { inject } from 'inversify';

import { type ClassModel } from '#lib-shared/core/core.models';

export const _withInject = <TType extends ClassModel>(value: TType): PropertyDecorator =>
  inject(value);
