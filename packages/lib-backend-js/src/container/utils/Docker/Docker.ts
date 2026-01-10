import { _Docker } from '@lib/backend/container/utils/Docker/_Docker';
import { type DockerModel } from '@lib/backend/container/utils/Docker/Docker.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { containerConfig } from '@lib/config/container/container.node';

@withContainer()
export class Docker extends _Docker implements DockerModel {
  constructor() {
    super({ container: containerConfig.params() });
  }
}
