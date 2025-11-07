import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';
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
import { isPlainObject } from 'lodash';
import isArray from 'lodash/isArray';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';
import toString from 'lodash/toString';

export const _workflow =
  <TResult = void, TParams = void>({
    duriation = WORKFLOW_DURATION_DEFAULT,
    execution = WORKFLOW_EXECUTION.SEQUENTIAL,
    interval = WORKFLOW_INTERVAL_DEFAULT,
    retry = WORKFLOW_RETRY_DEFAULT,
    steps,
  }: _WorkflowParamsModel<TResult, TParams>): _WorkflowModel<TResult, TParams> =>
  async (workflowParams) => {
    const isParallel = execution === WORKFLOW_EXECUTION.PARALLEL;
    const proxy = proxyActivities({
      retry: {
        initialInterval: interval,
        maximumAttempts: retry,
      },
      startToCloseTimeout: duriation,
    });
    const executions = steps.map((v) => {
      if (isArray(v)) {
        const [stepTask, stepParams] = v;
        if (isString(stepTask)) {
          const task = proxy[stepTask];
          if (!task) {
            throw new NotFoundError(stepTask);
          }
          return async () => task(stepParams, workflowParams);
        } else if (isFunction(stepTask)) {
          return async () =>
            (isParallel ? startChild : executeChild)(stepTask, {
              args: [stepParams, workflowParams],
            });
        }
        throw new InvalidArgumentError(toString(stepTask));
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
