import { inject } from 'inversify';

import type { ConstructorModel } from '#lib-shared/core/core.models';

export const _withInject = <TType extends ConstructorModel>(value: TType): PropertyDecorator =>
  inject(value);
