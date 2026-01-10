import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { type ContainerConfigModel } from '@lib/config/container/container.models';
import { EXCLUDE_PATTERNS } from '@lib/config/file/file.constants';
import { Config } from '@lib/config/utils/Config/Config';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const containerConfig = new Config<ContainerConfigModel>({
  params: () => {
    const environment = Container.get(Environment);
    return {
      dirname: fromWorking('src/container'),
      ignore: EXCLUDE_PATTERNS,
      image: environment.variables.APP_NAME,
      password: environment.variables.GITHUB_TOKEN,
      platform: 'linux/amd64',
      server: 'ghcr.io',
      tag: 'latest',
      username: environment.variables.GITHUB_USERNAME,
    };
  },
});
