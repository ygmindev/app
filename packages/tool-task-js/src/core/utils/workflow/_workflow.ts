import { WORKFLOW_EXECUTION } from '@lib/model/orchestrator/Workflow/Workflow.constants';
import { WORKFLOW_STEP_TYPE } from '@lib/model/orchestrator/WorkflowStep/WorkflowStep.constants';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { executeChild, proxyActivities, startChild } from '@temporalio/workflow';
import {
  type _WorkflowModel,
  type _WorkflowParamsModel,
} from '@tool/task/core/utils/workflow/_workflow.models';
import {
  WORKFLOW_INTERVAL_DEFAULT,
  WORKFLOW_RETRY_DEFAULT,
  WORKFLOW_TIMEOUT_DEFAULT,
} from '@tool/task/core/utils/workflow/workflow.constants';

export const _workflow =
  <TParams = void, TResult = void, TSteps extends Array<unknown> = Array<unknown>>({
    execution = WORKFLOW_EXECUTION.SEQUENTIAL,
    interval = WORKFLOW_INTERVAL_DEFAULT,
    retry = WORKFLOW_RETRY_DEFAULT,
    steps,
    timeout = WORKFLOW_TIMEOUT_DEFAULT,
  }: _WorkflowParamsModel<TParams, TResult, TSteps>): _WorkflowModel<TParams, TResult> =>
  async (workflowParams, workflowContext) => {
    const isParallel = execution === WORKFLOW_EXECUTION.PARALLEL;

    const proxy = proxyActivities({
      retry: {
        initialInterval: interval,
        maximumAttempts: retry,
      },
      startToCloseTimeout: timeout,
    });

    const executions = steps(workflowParams, workflowContext).map((v) => {
      const { context, name, params, type = WORKFLOW_STEP_TYPE.TASK } = v;
      const contextF = { ...workflowContext, ...context };

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

      return async () => {
        try {
          logger.progress(
            `${name} starting with params: ${stringify(params)}, context: ${stringify(context)}`,
          );
          const result = await runnable?.();
          logger.success(`${name} succeeded`);
          return result;
        } catch (e) {
          logger.fail(`${name} failed`);
          throw e;
        }
      };
    });

    const result = (
      isParallel ? Promise.all(executions.map((v) => v())) : mapSequence(executions)
    ) as TResult;
    return result;
  };
