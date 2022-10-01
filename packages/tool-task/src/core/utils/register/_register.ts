import type { _RegisterParamsModel } from '@tool/task/core/utils/register/_register.models';
import { task as _task } from 'gulp';

export const _register = ({ name, task }: _RegisterParamsModel): void => _task(name, task);
