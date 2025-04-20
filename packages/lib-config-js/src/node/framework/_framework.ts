import {
  type _FrameworkConfigModel,
  type FrameworkConfigModel,
} from '@lib/config/node/framework/framework.models';

export const _framework = ({}: FrameworkConfigModel): _FrameworkConfigModel => ({
  prerender: { partial: true },
});
