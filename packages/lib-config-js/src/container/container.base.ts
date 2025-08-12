import { type ContainerConfigModel } from '@lib/config/container/container.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<ContainerConfigModel>({
  params: () => ({
    image: 'service-job-js',
    password: process.env.GITHUB_TOKEN,
    platform: 'linux/amd64',
    server: 'ghcr.io',
    tag: 'latest',
    username: process.env.GITHUB_USERNAME,
  }),
});

export default config;
