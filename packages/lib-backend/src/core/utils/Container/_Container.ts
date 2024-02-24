import 'reflect-metadata';

import { type _ContainerModel } from '@lib/backend/core/utils/Container/_Container.models';
import { type ClassModel } from '@lib/shared/core/core.models';
import { Container } from 'inversify';
import isFunction from 'lodash/isFunction';

const container = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
  skipBaseClassChecks: true,
});

export const _Container: _ContainerModel = {
  get: <TType>(type: ClassModel<TType> | string, name?: string): TType =>
    name ? container.getNamed<TType>(type, name) : container.get<TType>(type),

  set: <TType>(
    type: ClassModel<TType> | string,
    value: TType | ClassModel<TType>,
    name?: string,
  ): void => {
    const valueF = isFunction(value)
      ? container.bind<TType>(type).to(value as ClassModel<TType>)
      : container.bind<TType>(type).toDynamicValue(() => value as TType);
    name && valueF.whenTargetNamed(name);
  },
};
