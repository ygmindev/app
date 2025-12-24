import { type TaskConfigModel } from '@lib/config/task/task.models';
import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { type BootstrappableModel } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable.models';
import { type ExecutionResultModel } from '@tool/task/orchestrator/utils/Client/Client.models';

export type _ClientParamsModel = Pick<TaskConfigModel, 'queue'> & {
  id?: string;
};

export type _ClientModel = BootstrappableModel & {
  run(
    workflow: string,
    params?: unknown,
    context?: ExecutionContextModel,
  ): Promise<ExecutionResultModel>;

  stop(id: string, context?: ExecutionContextModel): Promise<void>;
};
