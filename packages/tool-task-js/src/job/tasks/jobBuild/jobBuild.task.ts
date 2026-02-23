import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { clean } from '@lib/backend/file/utils/clean/clean';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { yamlBuild } from '@lib/backend/file/utils/yamlBuild/yamlBuild';
import { type _JobConfigModel } from '@lib/config/job/_job.models';
import { type JobConfigModel } from '@lib/config/job/job.models';
import { type ConfigModel } from '@lib/config/utils/Config/Config.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { slug } from '@lib/shared/core/utils/slug/slug';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { containerPublish } from '@tool/task/container/tasks/containerPublish/containerPublish.task';
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

  task: async ({ isContainerPublish = true, name }) => {
    const { jobConfig } = (await import(`@lib/config/job/job.${name}`)) as {
      jobConfig: ConfigModel<JobConfigModel, _JobConfigModel>;
    };
    const { outPathname } = jobConfig.params();

    // clean
    await clean({ patterns: [outPathname] });

    // build and publish container
    isContainerPublish && (await containerPublish({ isBuild: true, name }));

    const environment = Container.get(Environment);
    await Promise.all(
      jobConfig.config({ env: environment.keys }).map((job) =>
        writeFile({
          pathname: joinPaths([outPathname, `${slug(job.name)}.yaml`]),
          value: yamlBuild(job),
        }),
      ),
    );
  },
});
