import { Ctx } from 'type-graphql';

export const _withContext = (): ParameterDecorator => (target, propertyKey, parameterIndex) =>
  Ctx()(target, propertyKey, parameterIndex);
