import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { type ContainerConfigModel } from '@lib/config/container/container.models';
import { BUILD_DIR, EXCLUDE_PATTERNS } from '@lib/config/file/file.constants';
import { Config } from '@lib/config/utils/Config/Config';
import { Container } from '@lib/shared/core/utils/Container/Container';
import snakeCase from 'lodash/snakeCase';

export const containerConfig = new Config<ContainerConfigModel>({
  params: () => {
    const environment = Container.get(Environment);
    return {
      dirname: 'src/container',
      ignore: EXCLUDE_PATTERNS.filter((v) => v !== BUILD_DIR),
      image: snakeCase(environment.variables.APP_NAME),
      password: environment.variables.GITHUB_TOKEN,
      platform: environment.variables.CONTAINER_PLATFORM,
      server: environment.variables.CONTAINER_HOST,
      tag: environment.variables.CONTAINER_TAG,
      username: environment.variables.CONTAINER_USERNAME,
    };
  },
});
