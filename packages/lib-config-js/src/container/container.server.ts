import configBase from '@lib/config/container/container.base';
import { type ContainerConfigModel } from '@lib/config/container/container.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<ContainerConfigModel>({
  ...configBase,
});

export default config;
