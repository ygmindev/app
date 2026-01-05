import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { fileInfo } from '@lib/backend/file/utils/fileInfo/fileInfo';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { createResourceImplementation } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation';
import { taskConfig } from '@lib/config/task/task';
import { Workflow } from '@lib/model/orchestrator/Workflow/Workflow';
import { WORKFLOW_RESOURCE_NAME } from '@lib/model/orchestrator/Workflow/Workflow.constants';
import { type WorkflowModel } from '@lib/model/orchestrator/Workflow/Workflow.models';
import { type WorkflowImplementationModel } from '@lib/model/orchestrator/Workflow/WorkflowImplementation/WorkflowImplementation.models';
import { FilterModel } from '@lib/model/resource/Filter/Filter.models';
import { filterArray } from '@lib/shared/core/utils/filterArray/filterArray';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

const getWorkflows = async (
  workflowName?: string,
  filters?: Array<FilterModel<WorkflowModel>>,
): Promise<Array<WorkflowModel>> => {
  const { workflowExtension } = taskConfig.params();
  const pathnames = fromGlobs(
    [fromPackages(`*/src/**/${workflowName ?? '*'}${workflowExtension}`)],
    {
      isAbsolute: true,
    },
  );
  let workflows = await Promise.all(
    pathnames.map(async (v) => {
      const { main } = fileInfo(v);
      const workflow = (await import(/* @vite-ignore */ v)) as { params: BuildWorkflowParamsModel };
      return {
        _id: main,
        name: main,
        params: workflow.params,
        steps: [],
      } as WorkflowModel;
    }),
  );
  filters && (workflows = filterArray(workflows, filters));
  return workflows;
};

@withContainer()
export class WorkflowImplementation
  extends createResourceImplementation<WorkflowModel>({
    Resource: Workflow,
    get: async (input, context) => {
      const workflowName = input?.filter?.find((v) => v.field === 'name')?.value;
      const items = await getWorkflows(
        workflowName as string,
        workflowName ? undefined : input?.filter,
      );
      return { result: items.length ? items[0] : undefined };
    },
    getMany: async (input, context) => {
      const items = await getWorkflows(undefined, input?.filter);
      return { result: { items } };
    },
    name: WORKFLOW_RESOURCE_NAME,
  })
  implements WorkflowImplementationModel {}
