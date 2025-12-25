import { LOG_MESSAGE_TYPE } from '@lib/model/logging/LogMessage/LogMessage.constants';
import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { WORKFLOW_EXECUTION } from '@lib/model/orchestrator/Workflow/Workflow.constants';
import { WORKFLOW_STEP_TYPE } from '@lib/model/orchestrator/WorkflowStep/WorkflowStep.constants';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';
import { executeChild, proxyActivities, startChild, workflowInfo } from '@temporalio/workflow';
import { STATUS_UPDATE } from '@tool/task/core/tasks/statusUpdate/statusUpdate.constants';
import {
  type _BuildWorkflowModel,
  type _BuildWorkflowParamsModel,
} from '@tool/task/orchestrator/utils/buildWorkflow/_buildWorkflow.models';
import {
  WORKFLOW_INTERVAL_DEFAULT,
  WORKFLOW_RETRY_DEFAULT,
  WORKFLOW_TIMEOUT_DEFAULT,
} from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.constants';

export const _buildWorkflow = <
  TParams extends Record<string, unknown> | void = void,
  TResult = void,
  TSteps extends Array<unknown> = Array<unknown>,
>({
  execution = WORKFLOW_EXECUTION.SEQUENTIAL,
  interval = WORKFLOW_INTERVAL_DEFAULT,
  retry = WORKFLOW_RETRY_DEFAULT,
  steps,
  timeout = WORKFLOW_TIMEOUT_DEFAULT,
}: _BuildWorkflowParamsModel<TParams, TResult, TSteps>): _BuildWorkflowModel<TParams, TResult> => {
  const proxy = proxyActivities({
    retry: {
      initialInterval: interval,
      maximumAttempts: retry,
    },
    startToCloseTimeout: timeout,
  });
  const isParallel = execution === WORKFLOW_EXECUTION.PARALLEL;
  return async (workflowParams, workflowContext) => {
    const { workflowId } = workflowInfo();
    const executions = steps(workflowParams, workflowContext).map((v) => {
      const { context, name, params, type = WORKFLOW_STEP_TYPE.TASK } = v;
      const contextF: ExecutionContextModel = { ...workflowContext, ...context, workflowId };
      const runnable = (() => {
        switch (type) {
          case WORKFLOW_STEP_TYPE.TASK: {
            const task = proxy[name];
            if (!task) {
              throw new NotFoundError(name);
            }
            return async () => task(params, contextF);
          }
          case WORKFLOW_STEP_TYPE.WORKFLOW: {
            return async () =>
              (isParallel ? startChild : executeChild)(name, { args: [params, contextF] });
          }
        }
      })();
      return async () => runnable?.();
    });
    try {
      const result = (await (isParallel
        ? Promise.all(executions.map((v) => v()))
        : mapSequence(executions))) as TResult;
      await proxy[STATUS_UPDATE]({ id: workflowId, type: LOG_MESSAGE_TYPE.SUCCESS });
      return result;
    } catch (e) {
      await proxy[STATUS_UPDATE]({ id: workflowId, type: LOG_MESSAGE_TYPE.FAIL });
      throw e;
    }
  };
};
