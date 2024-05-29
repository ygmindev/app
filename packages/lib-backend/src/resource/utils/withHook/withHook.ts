import { HOOK_TYPE } from '@lib/backend/resource/utils/withHook/withHook.constants';
import {
  type WithHookModel,
  type WithHookParamsModel,
} from '@lib/backend/resource/utils/withHook/withHook.models';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { BeforeCreate } from '@mikro-orm/mongodb';

const getHook = ({ type }: WithHookParamsModel): PropertyDecorator => {
  switch (type) {
    case HOOK_TYPE.BEFORE_CREATE:
      return BeforeCreate() as PropertyDecorator;
    default:
      throw new InvalidArgumentError();
  }
};

export const withHook =
  ({ type }: WithHookParamsModel): WithHookModel =>
  (target, propertyKey) =>
    getHook({ type })(target, propertyKey);
