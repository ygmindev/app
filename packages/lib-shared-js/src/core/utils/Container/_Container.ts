import { type ClassModel } from '@lib/shared/core/core.models';
import { type _ContainerModel } from '@lib/shared/core/utils/Container/_Container.models';
import {
  type BindInWhenOnFluentSyntax,
  type BindToFluentSyntax,
  type BindWhenOnFluentSyntax,
  Container,
} from 'inversify';

export const _container = new Container({
  autobind: true,
  defaultScope: 'Singleton',
});

export const _Container: _ContainerModel = {
  container: () => _container,

  get: <TType extends unknown>(type: ClassModel<TType>, name?: string): TType =>
    _container.get<TType>(type, { autobind: true, name }),

  set<TType extends unknown>(type: ClassModel<TType>, value?: TType | string, name?: string): void {
    let binding:
      | BindInWhenOnFluentSyntax<TType>
      | BindWhenOnFluentSyntax<TType>
      | BindToFluentSyntax<TType> = _container.bind(type);

    if (arguments.length === 2) {
      if (!value || typeof value === 'string') {
        binding = binding.toSelf();
        value && binding.whenNamed(value as string);
      } else if (value) {
        binding = binding.toConstantValue(value as TType);
      }
    } else if (arguments.length === 3) {
      binding = binding.toConstantValue(value as TType);
      name && binding.whenNamed(name);
    }
  },
};
