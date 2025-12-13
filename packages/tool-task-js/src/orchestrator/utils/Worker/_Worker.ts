import { LocalStorage } from '@lib/backend/core/utils/LocalStorage/LocalStorage';
import { type LocalContextModel } from '@lib/backend/core/utils/LocalStorage/LocalStorage.models';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { BUILD_DIR } from '@lib/config/file/file.constants';
import { Bootstrappable } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { uid } from '@lib/shared/core/utils/uid/uid';
import {
  type ActivityExecuteInput,
  type ActivityInboundCallsInterceptor,
  type Next,
  Worker,
} from '@temporalio/worker';
import { TASK_QUEUE_DEFAULT } from '@tool/task/core/core.constants';
import { type TaskModel } from '@tool/task/core/utils/buildTask/buildTask.models';
import {
  type _WorkerModel,
  type _WorkerParamsModel,
} from '@tool/task/orchestrator/utils/Worker/_Worker.models';

class ContextInterceptor implements ActivityInboundCallsInterceptor {
  _context: LocalContextModel;

  constructor(params: LocalContextModel) {
    this._context = params;
  }

  async execute(
    input: ActivityExecuteInput,
    next: Next<ActivityInboundCallsInterceptor, 'execute'>,
  ): Promise<unknown> {
    const storage = Container.get(LocalStorage);
    return storage.run(async () => next(input), this._context);
  }
}

export class _Worker extends Bootstrappable implements _WorkerModel {
  protected _id: string;
  protected _queue: string;
  protected _tasks?: Record<string, TaskModel>;
  protected _worker?: Worker;
  protected _workflowsPath: string;

  constructor({
    id,
    queue = TASK_QUEUE_DEFAULT,
    tasks,
    workflowsDir = fromWorking(BUILD_DIR),
    workflowsName,
  }: _WorkerParamsModel) {
    super();
    this._tasks = tasks;
    this._queue = queue;
    this._id = `${workflowsName}-${id ?? uid()}`;
    this._workflowsPath = joinPaths([workflowsDir, workflowsName], { extension: '.js' });
  }

  async onCleanUp(): Promise<void> {
    this._worker?.shutdown();
  }

  onInitialize = async (): Promise<void> => {
    this._worker = await Worker.create({
      activities: this._tasks,
      identity: this._id,
      interceptors: {
        activityInbound: [
          (ctx) => new ContextInterceptor({ ns: ctx.info.workflowExecution.workflowId }),
        ],
      },
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
