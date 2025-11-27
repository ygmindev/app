import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { createResourceImplementation } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation';
import { taskConfig } from '@lib/config/task/task';
import { Workflow } from '@lib/model/orchestrator/Workflow/Workflow';
import { WORKFLOW_RESOURCE_NAME } from '@lib/model/orchestrator/Workflow/Workflow.constants';
import { type WorkflowModel } from '@lib/model/orchestrator/Workflow/Workflow.models';
import { type WorkflowImplementationModel } from '@lib/model/orchestrator/Workflow/WorkflowImplementation/WorkflowImplementation.models';

const getMany: WorkflowImplementationModel['getMany'] = async (input, context) => {
  const { workflowExtension } = taskConfig.params();
  const pathnames = fromGlobs([fromPackages(`*/src/**/*${workflowExtension}`)], {
    isAbsolute: true,
  });
  // const values = await Promise.all(
  //   pathnames.map(async (v) => {
  //     const { main } = fileInfo(v);
  //     const workflow = (await import(v)) as { params: WorkflowParamsModel };
  //     return {
  //       _id: main,
  //       name: main,
  //       params: workflow.params,
  //       steps: [],
  //     } as WorkflowModel;
  //   }),
  // );
  const values = [];
  console.warn(`@@@ count: ${values.length ?? 0}`);
  return {
    // result: filterArray(values, input?.filter, input?.options?.skip, input?.options?.take),
    result: { items: [] },
  };
};

@withContainer()
export class WorkflowImplementation
  extends createResourceImplementation<WorkflowModel>({
    Resource: Workflow,
    getMany,
    name: WORKFLOW_RESOURCE_NAME,
  })
  implements WorkflowImplementationModel {}
