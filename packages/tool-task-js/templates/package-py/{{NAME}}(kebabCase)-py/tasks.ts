import { type TaskParamsModel } from '@tool/task/core/core.models';
import { pythonTasks } from '@tool/task/python/utils/pythonTasks/pythonTasks';

const tasks = pythonTasks() satisfies Array<TaskParamsModel<unknown>>;

export default tasks;
