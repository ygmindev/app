import type { ConstructorModel } from '@lib/shared/core/core.models';
import type { _ContainerModel } from '@lib/shared/core/utils/Container/_Container.models';
import { Container } from 'inversify';

const container = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
  skipBaseClassChecks: true,
});

export const _Container: _ContainerModel = {
  get: <TType>(type: ConstructorModel<TType>): TType => container.get(type),

  set: <TType>(type: ConstructorModel<TType>, value: TType): void => {
    container.bind<TType>(type).toDynamicValue(() => value);
  },
};
