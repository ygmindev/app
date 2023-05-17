import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import type {
  _BundleConfigModel,
  BundleConfigModel,
} from '@lib/config/node/bundle/_bundle.models';
import { importFromEnv } from '@lib/shared/core/utils/importFromEnv/importFromEnv';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import type { MakeParamsModel } from '@tool/task/node/templates/make/make.models';

export const make: TaskParamsModel<MakeParamsModel> = {
  name: 'make',

  environment: ENVIRONMENT.PRODUCTION,

  task: async ({ options, root }) => {
    const bundleConfigParams = await importFromEnv<BundleConfigModel>(
      '@lib/config/node/bundle/params/bundle.params',
    );
    const bundleConfig = await importFromEnv<_BundleConfigModel>(
      '@lib/config/node/bundle/configs/bundle.config',
    );
    const _bundleConfig = await bundleConfig();
    await bundleConfigParams.build.command(
      merge([
        { build: { rollupOptions: { input: fromConfig('node/bundle/configs/bundle.config.ts') } } },
        _bundleConfig,
      ]),
    );
    // runWithConfig({ root,  });
    return { status: TASK_STATUS.SUCCESS };
  },
};
