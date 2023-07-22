import { type TaskParamsModel } from '#tool-task/core/core.models';
import clean from '#tool-task/core/templates/clean/clean';
import { lint } from '#tool-task/node/templates/lint/lint';
import { test } from '#tool-task/node/templates/test/test';
import {
  type NodeTasksMdoel,
  type NodeTasksParamsModel,
} from '#tool-task/node/utils/nodeTasks/nodeTasks.models';

export const nodeTasks = <TType extends Array<TaskParamsModel<unknown>>>({
  additionalTasks,
}: NodeTasksParamsModel<TType> = {}): NodeTasksMdoel =>
  [
    lint,
    clean,
    test,
    { ...test, name: `${test.name}-watch`, overrides: { isWatch: true } },
    { ...test, name: `${test.name}-match`, overrides: { isPrompt: true } },
    { ...test, name: `${test.name}-match-watch`, overrides: { isPrompt: true, isWatch: true } },
    ...(additionalTasks ?? []),
  ] as Array<TaskParamsModel<unknown>>;
