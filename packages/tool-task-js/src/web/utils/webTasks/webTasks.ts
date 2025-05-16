import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
// import { proxy } from '@tool/task/http/templates/proxy/proxy';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';
import { build } from '@tool/task/web/templates/build/build';
import { buildConfigPublish } from '@tool/task/web/templates/buildConfigPublish/buildConfigPublish';
import buildSsr from '@tool/task/web/templates/buildSsr/buildSsr.task';
import { dev } from '@tool/task/web/templates/dev/dev';
import { publish } from '@tool/task/web/templates/publish/publish';
import { serve } from '@tool/task/web/templates/serve/serve';
import {
  type WebTasksModel,
  type WebTasksParamsModel,
} from '@tool/task/web/utils/webTasks/webTasks.models';

export const webTasks = (params?: WebTasksParamsModel): WebTasksModel =>
  nodeTasks(
    merge(
      [
        {
          additionalTasks: [
            dev,
            build,
            serve,
            publish,
            buildConfigPublish,
            buildSsr,
            //proxy
          ] as Array<TaskParamsModel<unknown>>,

          // TODO: fix projects
          eteTasks: ['run ssjd', 'run awjd'],
        },
        params,
      ],
      MERGE_STRATEGY.DEEP_APPEND,
    ),
  );
