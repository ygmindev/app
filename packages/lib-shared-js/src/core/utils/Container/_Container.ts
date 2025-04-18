import { type ClassModel } from '@lib/shared/core/core.models';
import { type _ContainerModel } from '@lib/shared/core/utils/Container/_Container.models';
import { Container } from 'inversify';
import isFunction from 'lodash/isFunction';

export const _container = new Container({
  autobind: true,
  defaultScope: 'Singleton',
});

export const _Container: _ContainerModel = {
  container: () => _container,

  get: <TType extends unknown>(type: ClassModel<TType> | string, name?: string): TType =>
    _container.get<TType>(type, name ? { name } : undefined),

  set: <TType extends unknown>(
    type: ClassModel<TType> | string,
    value: TType | ClassModel<TType>,
    name?: string,
  ): void => {
    const valueF = isFunction(value)
      ? _container.bind<TType>(type).to(value as ClassModel<TType>)
      : _container.bind<TType>(type).toDynamicValue(() => value as TType);
    name && valueF.whenNamed(name);
  },
};

// import { type ClassModel } from '@lib/shared/core/core.models';
// import { type _ContainerModel } from '@lib/shared/core/utils/Container/_Container.models';
// import { Container } from 'inversify';
// import isFunction from 'lodash/isFunction';

// export const _container = new Container({
//   autobind: true,
//   defaultScope: 'Singleton',
// });

// export const _Container: _ContainerModel = {
//   container: () => _container,

//   get: <TType extends unknown>(type: ClassModel<TType> | string, name?: string): TType =>
//     _container.get<TType>(name ?? type),

//   set: <TType extends unknown>(
//     type: ClassModel<TType> | string,
//     value: TType | ClassModel<TType>,
//     name?: string,
//   ): void => {
//     const valueF = isFunction(value)
//       ? _container.bind<TType>(type).to(value as ClassModel<TType>)
//       : _container.bind<TType>(type).toDynamicValue(() => value as TType);
//     name && valueF.whenNamed(name);
//   },
// };
