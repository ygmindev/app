import { _Docker } from '@tool/task/container/utils/Docker/_Docker';
import {
  type DockerModel,
  type DockerParamsModel,
} from '@tool/task/container/utils/Docker/Docker.models';

export class Docker extends _Docker implements DockerModel {
  constructor({ ...params }: DockerParamsModel) {
    super({ ...params });
  }
}
