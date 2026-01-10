import { _Docker } from '@lib/backend/container/utils/Docker/_Docker';
import {
  type DockerModel,
  type DockerParamsModel,
} from '@lib/backend/container/utils/Docker/Docker.models';

export class Docker extends _Docker implements DockerModel {
  constructor({ ...params }: DockerParamsModel) {
    super({ ...params });
  }
}
