import { INTERNATIONALIZE_PARSE } from '@tool/task/locale/workflows/internationalizeParse/internationalizeParse.constants';
import { type InternationalizeParseParamsModel } from '@tool/task/locale/workflows/internationalizeParse/internationalizeParse.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export const internationalizeParse: BuildWorkflowParamsModel<
  InternationalizeParseParamsModel,
  void,
  [InternationalizeParseParamsModel]
> = {
  name: INTERNATIONALIZE_PARSE,

  steps: (params, context) => [{ name: INTERNATIONALIZE_PARSE, params }],
};
