import { config as jobConfig } from '@lib/config/job/job';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type BuildYamlJobsParamsModel } from '@tool/task/job/tasks/buildYamlJobs/buildYamlJobs.models';
import buildYaml from '@tool/task/node/templates/buildYaml/buildYaml';

const buildYamlJobs: TaskParamsModel<BuildYamlJobsParamsModel> = {
  ...buildYaml,

  name: 'build-yaml-jobs',

  overrides: () => ({
    value: jobConfig.params(),
  }),
};

export default buildYamlJobs;
