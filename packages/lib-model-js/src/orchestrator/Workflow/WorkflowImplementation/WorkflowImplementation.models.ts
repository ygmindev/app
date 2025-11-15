import { type WorkflowModel } from '@lib/model/orchestrator/Workflow/Workflow.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type WorkflowImplementationModel = ResourceImplementationModel<WorkflowModel>;
