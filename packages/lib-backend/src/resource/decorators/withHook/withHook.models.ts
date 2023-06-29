import { type HOOK_TYPE } from '#lib-backend/resource/decorators/withHook/withHook.constants';

export type HookTypeModel = `${HOOK_TYPE}`;

export type WithHookParamsModel = {
  type: HookTypeModel;
};
