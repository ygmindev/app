import clean from '#tool-task/core/templates/clean/clean';
import { lint } from '#tool-task/node/templates/lint/lint';
import { test } from '#tool-task/node/templates/test/test';
import {
  type NodeTasksMdoel,
  type NodeTasksParamsModel,
} from '#tool-task/node/utils/nodeTasks/nodeTasks.models';

export const nodeTasks = ({ testOverrides }: NodeTasksParamsModel = {}): NodeTasksMdoel => {
  const testF = { ...test, ...testOverrides };
  return [
    lint,
    clean,
    testF,
    { ...testF, name: `${testF.name}-watch`, overrides: { isWatch: true } },
    { ...testF, name: `${testF.name}-match`, overrides: { isPrompt: true } },
    { ...testF, name: `${testF.name}-match-watch`, overrides: { isPrompt: true, isWatch: true } },
  ];
};
