import { ObjectId } from '@lib/backend/database/utils/ObjectId/ObjectId';
import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { Bootstrappable } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable';
import { Client, Connection } from '@temporalio/client';
import { TASK_QUEUE_DEFAULT } from '@tool/task/core/core.constants';
import {
  type _ClientModel,
  type _ClientParamsModel,
} from '@tool/task/orchestrator/utils/Client/_Client.models';
import { type ExecutionResultModel } from '@tool/task/orchestrator/utils/Client/Client.models';

export class _Client extends Bootstrappable implements _ClientModel {
  protected _client?: Client;
  protected _connection?: Connection;
  protected _id: string;

  constructor({ id }: _ClientParamsModel = {}) {
    super();
    this._id = id ?? 'client';
  }

  async onCleanUp(): Promise<void> {
    await this._connection?.close();
  }

  async onInitialize(): Promise<void> {
    this._connection = await Connection.connect();
    this._client = new Client({
      connection: this._connection,
      identity: this._id,
    });
  }

  run = async (
    workflow: string,
    params: unknown,
    context?: ExecutionContextModel,
  ): Promise<ExecutionResultModel> => {
    const workflowId = new ObjectId().toString();
    const handle = await this._client?.workflow.start(workflow, {
      args: [params, context],
      taskQueue: context?.queue ?? TASK_QUEUE_DEFAULT,
      workflowId,
    });
    if (handle?.workflowId) {
      return { id: workflowId };
    }
    throw new NotFoundError('workflow');
  };
}
