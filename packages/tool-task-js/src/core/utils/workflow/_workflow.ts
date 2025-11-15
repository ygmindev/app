import { type AsyncCallableModel } from '@lib/shared/core/core.models';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
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
  WORKFLOW_DURATION_DEFAULT,
  WORKFLOW_EXECUTION,
  WORKFLOW_INTERVAL_DEFAULT,
  WORKFLOW_RETRY_DEFAULT,
} from '@tool/task/core/utils/workflow/workflow.constants';
import isArray from 'lodash/isArray';
import isFunction from 'lodash/isFunction';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';
import toString from 'lodash/toString';

export const _workflow =
  <TParams = void, TResult = void, TSteps extends Array<unknown> = Array<unknown>>({
    duration = WORKFLOW_DURATION_DEFAULT,
    execution = WORKFLOW_EXECUTION.SEQUENTIAL,
    interval = WORKFLOW_INTERVAL_DEFAULT,
    retry = WORKFLOW_RETRY_DEFAULT,
    steps,
  }: _WorkflowParamsModel<TParams, TResult, TSteps>): _WorkflowModel<TParams, TResult> =>
  async (workflowParams, workflowContext) => {
    const isParallel = execution === WORKFLOW_EXECUTION.PARALLEL;
    const proxy = proxyActivities({
      retry: {
        initialInterval: interval,
        maximumAttempts: retry,
      },
      startToCloseTimeout: duration,
    });
    const executions = steps(workflowParams, workflowContext).map((v) => {
      let key: string | undefined = undefined;
      let runnable: AsyncCallableModel | undefined = undefined;
      if (isArray(v)) {
        const [stepTask, stepParams, stepContext] = v;
        const context = { ...workflowContext, ...stepContext };
        if (isString(stepTask)) {
          key = stepTask;
          const task = proxy[stepTask];
          if (!task) {
            throw new NotFoundError(stepTask);
          }
          runnable = async () => task(stepParams, context);
        } else if (isFunction(stepTask)) {
          key = stepTask.name;
          runnable = async () =>
            (isParallel ? startChild : executeChild)(stepTask, { args: [stepParams, context] });
        } else {
          throw new InvalidArgumentError(toString(stepTask));
        }
        return async () => {
          try {
            logger.progress(
              `${key} starting with params: ${stringify(stepParams)}, context: ${stringify(context)}`,
            );
            const result = await runnable?.();
            logger.success(`${key} succeeded`);
            return result;
          } catch (e) {
            logger.fail(`${key} failed`);
            throw e;
          }
        };
      } else if (isPlainObject(v)) {
        return async () => _workflow(v);
      }
      throw new InvalidArgumentError(toString(v));
    });

    const result = (
      isParallel ? Promise.all(executions.map((v) => v())) : mapSequence(executions)
    ) as TResult;
    return result;
  };
