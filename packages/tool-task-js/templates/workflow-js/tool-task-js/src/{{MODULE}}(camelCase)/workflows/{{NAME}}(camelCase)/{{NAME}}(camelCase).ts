import { {{NAME}}(constantCase) } from '@tool/task/{{MODULE}}(camelCase)/workflows/{{NAME}}(camelCase)/{{NAME}}(camelCase).constants';
import { type {{NAME}}(pascalCase)ParamsModel, type {{NAME}}(pascalCase)Model } from '@tool/task/{{MODULE}}(camelCase)/workflows/{{NAME}}(camelCase)/{{NAME}}(camelCase).models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export const {{NAME}}(camelCase): BuildWorkflowParamsModel<
  {{NAME}}(pascalCase)ParamsModel,
  {{NAME}}(pascalCase)Model,
  [{{NAME}}(pascalCase)ParamsModel]
> = {
  name: {{NAME}}(constantCase),

  prompts: [{ key: 'test' }],

  steps: (params, context) => [{ name: '', params }],
};
