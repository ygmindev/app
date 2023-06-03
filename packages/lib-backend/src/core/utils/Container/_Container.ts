import 'reflect-metadata';

import type { _ContainerModel } from '@lib/backend/core/utils/Container/_Container.models';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import { Container } from 'inversify';
import isFunction from 'lodash/isFunction';

const container = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
  skipBaseClassChecks: true,
});

export const _Container: _ContainerModel = {
  get: <TType>(type: ConstructorModel<TType> | string, name?: string): TType =>
    name ? container.getNamed(type, name) : container.get(type),

  set: <TType>(
    type: ConstructorModel<TType> | string,
    value: TType | ConstructorModel<TType>,
    name?: string,
  ): void => {
    const valueF = isFunction(value)
      ? container.bind<TType>(type).to(value as ConstructorModel<TType>)
      : container.bind<TType>(type).toDynamicValue(() => value as TType);
    name && valueF.whenTargetNamed(name);
  },
};
