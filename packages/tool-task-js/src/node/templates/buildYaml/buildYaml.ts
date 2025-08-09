import { buildYaml as _buildYaml } from '@lib/backend/file/utils/buildYaml/buildYaml';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type BuildYamlParamsModel } from '@tool/task/node/templates/buildYaml/buildYaml.models';

const buildYaml: TaskParamsModel<BuildYamlParamsModel> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'build-yaml',

  task: [
    async ({ options }) => {
      options?.value && console.warn(_buildYaml(options.value));
    },
  ],
};

export default buildYaml;
