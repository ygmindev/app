import { LocalStorage } from '@lib/backend/core/utils/LocalStorage/LocalStorage';
import { type LocalContextModel } from '@lib/backend/core/utils/LocalStorage/LocalStorage.models';
import { fileInfo } from '@lib/backend/file/utils/fileInfo/fileInfo';
import { Bootstrappable } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { uid } from '@lib/shared/core/utils/uid/uid';
import {
  type ActivityExecuteInput,
  type ActivityInboundCallsInterceptor,
  type Next,
  Worker,
} from '@temporalio/worker';
import { type TaskModel } from '@tool/task/core/utils/buildTask/buildTask.models';
import {
  type _WorkerModel,
  type _WorkerParamsModel,
} from '@tool/task/orchestrator/utils/Worker/_Worker.models';

class ContextActivityInterceptor implements ActivityInboundCallsInterceptor {
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

  constructor({ id, queue, tasks, workflowsPathname }: _WorkerParamsModel) {
    super();
    const { main } = fileInfo(workflowsPathname);
    this._tasks = tasks;
    this._queue = queue;
    this._id = `${main}-${id ?? uid()}`;
    this._workflowsPath = workflowsPathname;
  }

  async onCleanUp(): Promise<void> {
    this._worker?.shutdown();
  }

  async onInitialize(): Promise<void> {
    this._worker = await Worker.create({
      activities: this._tasks,
      identity: this._id,
      interceptors: {
        activityInbound: [
          (ctx) => new ContextActivityInterceptor({ ns: ctx.info.workflowExecution.workflowId }),
        ],
      },
      // namespace,
      taskQueue: this._queue,
      workflowsPath: this._workflowsPath,
    });
  }

  run = async (): Promise<void> => {
    await this._worker?.run();
  };
}
