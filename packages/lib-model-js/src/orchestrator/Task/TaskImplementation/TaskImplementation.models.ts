import { type RequestContextModel } from '@lib/config/api/api.models';
import { type TaskModel } from '@lib/model/orchestrator/Task/Task.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';

export type TaskImplementationModel = {
  getMany(
    input?: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TaskModel>,
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TaskModel>>;
};
