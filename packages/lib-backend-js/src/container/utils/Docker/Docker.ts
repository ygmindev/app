import { _Docker } from '@lib/backend/container/utils/Docker/_Docker';
import {
  type DockerModel,
  type DockerParamsModel,
} from '@lib/backend/container/utils/Docker/Docker.models';
import { containerConfig } from '@lib/config/container/container.node';
import { merge } from '@lib/shared/core/utils/merge/merge';

export class Docker extends _Docker implements DockerModel {
  constructor(params?: DockerParamsModel) {
    super(merge([params, containerConfig.params()]));
  }
}
