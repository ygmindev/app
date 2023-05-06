import type { _TaskConfigParamsModel } from '@lib/config/core/task/_task.models';
import { task as _task } from 'gulp';

export const _taskConfig = ({ tasks }: _TaskConfigParamsModel): void =>
  tasks.forEach(({ name, task }) => _task(name, async () => task()));
