import clean from '@tool/task/core/templates/clean/clean';
import { test } from '@tool/task/python/templates/test/test';
import {
  type PythonTasksMdoel,
  type PythonTasksParamsModel,
} from '@tool/task/python/utils/pythonTasks/pythonTasks.models';

export const pythonTasks = ({ additionalTasks }: PythonTasksParamsModel = {}): PythonTasksMdoel => {
  return [clean, test, ...(additionalTasks ?? [])] as PythonTasksMdoel;
};
