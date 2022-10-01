import type { ConstructorModel } from '@lib/shared/core/core.models';
import { inject } from 'inversify';

export const _withInject = <TType extends ConstructorModel>(value: TType): PropertyDecorator =>
  inject(value);
