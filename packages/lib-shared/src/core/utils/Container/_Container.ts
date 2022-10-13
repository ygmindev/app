import type { ConstructorModel } from '@lib/shared/core/core.models';
import type { _ContainerModel } from '@lib/shared/core/utils/Container/_Container.models';
import { Container } from 'inversify';
import { isFunction } from 'lodash';

const container = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
  skipBaseClassChecks: true,
});

export const _Container: _ContainerModel = {
  get: <TType>(type: ConstructorModel<TType> | string): TType => container.get(type),

  set: <TType>(
    type: ConstructorModel<TType> | string,
    value: TType | ConstructorModel<TType>,
  ): void => {
    isFunction(value)
      ? container.bind<TType>(type).to(value as ConstructorModel<TType>)
      : container.bind<TType>(type).toDynamicValue(() => value as TType);
  },
};
