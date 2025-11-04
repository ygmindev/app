import { type TaskModel } from '@lib/model/orchestrator/Task/Task.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type TaskImplementationModel = ResourceImplementationModel<TaskModel>;
