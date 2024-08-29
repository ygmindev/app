import { type HOOK_TYPE } from '@lib/backend/resource/utils/withHook/withHook.constants';

export type HookTypeModel = `${HOOK_TYPE}`;

export type WithHookParamsModel = {
  type: HookTypeModel;
};

export type WithHookModel = PropertyDecorator;
