import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { TASK_RESOURCE_NAME } from '@lib/model/orchestrator/Task/Task.constants';
import { type TaskModel } from '@lib/model/orchestrator/Task/Task.models';

@withEntity({
  name: TASK_RESOURCE_NAME,
})
export class Task implements TaskModel {
  @withField()
  description?: string;

  @withField()
  name!: string;
}
