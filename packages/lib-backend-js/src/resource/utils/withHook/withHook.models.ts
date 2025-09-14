import { type HOOK_TYPE } from '@lib/backend/resource/utils/withHook/withHook.constants';

export type WithHookParamsModel = {
  type: HOOK_TYPE;
};

export type WithHookModel = PropertyDecorator;
