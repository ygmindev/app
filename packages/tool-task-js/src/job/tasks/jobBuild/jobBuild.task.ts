import { clean } from '@lib/backend/file/utils/clean/clean';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { yamlBuild } from '@lib/backend/file/utils/yamlBuild/yamlBuild';
import { jobConfig } from '@lib/config/job/job';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { JOB_BUILD } from '@tool/task/job/tasks/jobBuild/jobBuild.constants';
import {
  type JobBuildModel,
  type JobBuildParamsModel,
} from '@tool/task/job/tasks/jobBuild/jobBuild.models';

export const jobBuild = buildTask<JobBuildParamsModel, JobBuildModel>({
  context: {
    environment: ENVIRONMENT.PRODUCTION,
  },

  name: JOB_BUILD,

  task: async () => {
    const { outPathname } = jobConfig.params();

    await clean({ patterns: [outPathname] });

    writeFile({
      pathname: outPathname,
      value: yamlBuild(jobConfig.config()),
    });
  },
});
