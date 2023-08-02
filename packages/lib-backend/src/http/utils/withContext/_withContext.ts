import { Ctx } from 'type-graphql';

import { type _WithContextModel } from '#lib-backend/http/utils/withContext/_withContext.models';

export const _withContext = (): _WithContextModel => (target, propertyKey, parameterIndex) =>
  (Ctx() as ParameterDecorator)(target, propertyKey, parameterIndex);
