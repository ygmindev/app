import { Root } from 'type-graphql';

import { type _WithSelfModel } from '#lib-backend/http/utils/withSelf/_withSelf.models';

export const _withSelf = (): _WithSelfModel => (target, propertyKey, parameterIndex) =>
  (Root() as ParameterDecorator)(target, propertyKey, parameterIndex);
