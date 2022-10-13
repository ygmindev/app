import { HOOK_TYPE } from '@lib/backend/resource/decorators/withHook/withHook.constants';
import type { WithHookParamsModel } from '@lib/backend/resource/decorators/withHook/withHook.models';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { BeforeCreate } from '@mikro-orm/core';

const _getHook = ({ type }: WithHookParamsModel): PropertyDecorator => {
  switch (type) {
    case HOOK_TYPE.BEFORE_CREATE:
      return BeforeCreate() as PropertyDecorator;
    default:
      throw new InvalidArgumentError();
  }
};

export const withHook =
  ({ type }: WithHookParamsModel): PropertyDecorator =>
  (target, propertyKey) =>
    _getHook({ type })(target, propertyKey);
