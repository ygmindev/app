import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { BUILD_DIR } from '@lib/config/file/file.constants';
import { type AsyncCallableModel } from '@lib/shared/core/core.models';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { Worker } from '@temporalio/Worker';
import { TASK_QUEUE_DEFAULT } from '@tool/task/core/core.constants';
import {
  type _WorkerModel,
  type _WorkerParamsModel,
} from '@tool/task/core/utils/Worker/_Worker.models';

export class _Worker implements _WorkerModel {
  protected _id: string;
  protected _queue: string;
  protected _tasks?: Record<string, AsyncCallableModel>;
  protected _worker?: Worker;
  protected _workflowsPath: string;

  constructor({
    id,
    queue = TASK_QUEUE_DEFAULT,
    tasks,
    workflowsDir = fromWorking(BUILD_DIR),
    workflowsName,
  }: _WorkerParamsModel) {
    this._tasks = tasks;
    this._queue = queue;
    this._id = `${workflowsName}-${id ?? uid()}`;
    this._workflowsPath = joinPaths([workflowsDir, workflowsName], { extension: '.js' });
  }

  initialize = async (): Promise<void> => {
    this._worker = await Worker.create({
      activities: this._tasks,
      identity: this._id,
      // namespace,
      taskQueue: this._queue,
      workflowsPath: this._workflowsPath,
    });
  };

  run = async (): Promise<void> => {
    try {
      await this._worker?.run();
    } finally {
      this._worker?.shutdown();
    }
  };
}
