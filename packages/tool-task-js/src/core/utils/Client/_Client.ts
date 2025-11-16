import { uid } from '@lib/shared/core/utils/uid/uid';
import { Client, Connection } from '@temporalio/client';
import { TASK_QUEUE_DEFAULT } from '@tool/task/core/core.constants';
import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import {
  type _ClientModel,
  type _ClientParamsModel,
} from '@tool/task/core/utils/Client/_Client.models';

export class _Client implements _ClientModel {
  protected _client?: Client;
  protected _id: string;

  constructor({ id = `client-${uid()}` }: _ClientParamsModel) {
    this._id = id;
  }

  initialize = async (): Promise<void> => {
    const connection = await Connection.connect();
    this._client = new Client({
      connection,
      identity: this._id,
    });
  };

  run = async (
    workflow: string,
    params: Record<string, unknown>,
    context?: ExecutionContextModel,
  ): Promise<void> => {
    const handle = await this._client?.workflow.start(workflow, {
      args: [params, context],
      taskQueue: context?.queue ?? TASK_QUEUE_DEFAULT,
      workflowId: `${workflow}-${uid()}`,
    });
    const result = await handle?.result();
    return result;
  };
}
