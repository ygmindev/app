import clean from '@tool/task/core/templates/clean/clean';
import { lint } from '@tool/task/python/templates/lint/lint';
import { test } from '@tool/task/python/templates/test/test';
import {
  type PythonTasksMdoel,
  type PythonTasksParamsModel,
} from '@tool/task/python/utils/pythonTasks/pythonTasks.models';

export const pythonTasks = ({ additionalTasks }: PythonTasksParamsModel = {}): PythonTasksMdoel => {
  return [clean, lint, test, ...(additionalTasks ?? [])] as PythonTasksMdoel;
};
