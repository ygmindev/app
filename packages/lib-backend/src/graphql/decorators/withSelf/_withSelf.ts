import { Root } from 'type-graphql';

export const _withSelf = (): ParameterDecorator => (target, propertyKey, parameterIndex) =>
  Root()(target, propertyKey, parameterIndex);
