import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { taskConfig } from '@lib/config/task/task';
import { _Client } from '@tool/task/orchestrator/utils/Client/_Client';
import {
  type ClientModel,
  type ClientParamsModel,
} from '@tool/task/orchestrator/utils/Client/Client.models';

@withContainer()
export class Client extends _Client implements ClientModel {
  constructor(params: ClientParamsModel = {}) {
    const { queue } = taskConfig.params();
    super({ ...params, queue: params.queue ?? queue });
  }
}
