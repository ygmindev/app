import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { type ContainerConfigModel } from '@lib/config/container/container.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const config = defineConfig<ContainerConfigModel>({
  params: () => {
    const environment = Container.get(Environment);
    return {
      image: 'service-job-js',
      password: environment.variables.GITHUB_TOKEN ?? '',
      platform: 'linux/amd64',
      server: 'ghcr.io',
      tag: 'latest',
      username: environment.variables.GITHUB_USERNAME ?? '',
    };
  },
});

export default config;
