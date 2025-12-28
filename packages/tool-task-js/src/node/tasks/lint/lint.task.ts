import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { lintConfig } from '@lib/config/node/lint/lint';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { execute } from '@tool/task/core/utils/execute/execute';
import { LINT } from '@tool/task/node/tasks/lint/lint.constants';
import { type LintModel, type LintParamsModel } from '@tool/task/node/tasks/lint/lint.models';

export const lint = buildTask<LintParamsModel, LintModel>({
  name: LINT,

  task: async ({ isFix = true }, context) => {
    const config = lintConfig.params();
    const root = context?.root ?? fromRoot();
    return execute({
      command: config.lintCommand(config, root, isFix),
    });
  },
});
