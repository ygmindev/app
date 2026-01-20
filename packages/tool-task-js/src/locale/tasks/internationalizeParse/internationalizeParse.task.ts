import { parserConfig } from '@lib/config/locale/parser/parser';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { _internationalizeParse } from '@tool/task/locale/tasks/internationalizeParse/_internationalizeParse';
import {
  type InternationalizeParseModel,
  type InternationalizeParseParamsModel,
} from '@tool/task/locale/tasks/internationalizeParse/internationalizeParse.models';

export const internationalizeParse = buildTask<
  InternationalizeParseParamsModel,
  InternationalizeParseModel
>({
  task: async (params) => {
    await _internationalizeParse({ config: parserConfig.params() });
    return {};
  },
});
