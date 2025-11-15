import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { getConnection } from '@lib/backend/database/utils/getConnection/getConnection';
import { createResourceImplementation } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation';
import { Workflow } from '@lib/model/orchestrator/Workflow/Workflow';
import { WORKFLOW_RESOURCE_NAME } from '@lib/model/orchestrator/Workflow/Workflow.constants';
import { type WorkflowModel } from '@lib/model/orchestrator/Workflow/Workflow.models';
import { type WorkflowImplementationModel } from '@lib/model/orchestrator/Workflow/WorkflowImplementation/WorkflowImplementation.models';
import { filterArray } from '@lib/shared/core/utils/filterArray/filterArray';

const getMany: WorkflowImplementationModel['getMany'] = async (input, context) => {
  const values = [] as Array<unknown>;
  return {
    result: filterArray(values, input?.filter, input?.options?.skip, input?.options?.take),
  };
};

@withContainer()
export class WorkflowImplementation
  extends createResourceImplementation<WorkflowModel>({
    Resource: Workflow,
    count: async () => 100,
    getConnection: async ({ filter, id, pagination } = {}) => {
      const values = await getMany({ filter });
      const { result } = await getConnection({
        count: values.result?.length ?? 0,
        getMany,
        input: { filter, id },
        pagination,
      });
      return { result: result ?? undefined };
    },
    getMany,
    name: WORKFLOW_RESOURCE_NAME,
  })
  implements WorkflowImplementationModel {}
