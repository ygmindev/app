import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { getAppRoot } from '@lib/backend/file/utils/getAppRoot/getAppRoot';
import { lintConfig } from '@lib/config/node/lint/lint';
import { execute } from '@tool/task/core/utils/execute/execute';
import { task } from '@tool/task/core/utils/task/task';
import { type LintModel, type LintParamsModel } from '@tool/task/node/tasks/lint/lint.models';

export const lint = task<LintParamsModel, LintModel>({
  task: async ({ isFix = true }, context) => {
    const config = lintConfig.params();
    return execute({
      command: config.lintCommand(
        config,
        context?.app ? await getAppRoot(context.app) : fromRoot(),
        isFix,
      ),
    });
  },
});
