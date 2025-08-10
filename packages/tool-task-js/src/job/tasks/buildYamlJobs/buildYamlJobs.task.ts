import { buildYaml } from '@lib/backend/file/utils/buildYaml/buildYaml';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { config as jobConfig } from '@lib/config/job/job.base';
import { slug } from '@lib/shared/core/utils/slug/slug';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

const buildYamlJobs: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'build-yaml-job',

  task: [
    async () => {
      const { outPathname } = jobConfig.params();
      await Promise.all(
        jobConfig.config().map((job) =>
          writeFile({
            filename: joinPaths([outPathname, `${slug(job.name)}.yaml`]),
            value: buildYaml(job),
          }),
        ),
      );
    },
  ],
};

export default buildYamlJobs;
