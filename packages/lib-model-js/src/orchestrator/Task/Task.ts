import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { TASK_RESOURCE_NAME } from '@lib/model/orchestrator/Task/Task.constants';
import { type TaskModel } from '@lib/model/orchestrator/Task/Task.models';
import { Resource } from '@lib/model/resource/Resource/Resource';

@withEntity({
  name: TASK_RESOURCE_NAME,
})
export class Task extends Resource() implements TaskModel {
  @withField()
  description?: string;

  @withField()
  name!: string;
}
