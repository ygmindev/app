import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';
import { dev } from '@tool/task/server/templates/dev/dev';
import { build } from '@tool/task/web/templates/build/build';
import buildSsr from '@tool/task/web/templates/buildSsr/buildSsr.task';
import { publish } from '@tool/task/web/templates/publish/publish';
import { serve } from '@tool/task/web/templates/serve/serve';
import { serveSsr } from '@tool/task/web/templates/serveSsr/serveSsr';
import { serveStaticWeb } from '@tool/task/web/templates/serveStaticWeb/serveStaticWeb';
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
            serveSsr,
            serveStaticWeb,
            publish,
            buildSsr,
          ] as Array<TaskParamsModel<unknown>>,

          // TODO: fix projects
          eteTasks: ['run ssjd', 'run awjd'],
        },
        params,
      ],
      MERGE_STRATEGY.DEEP_APPEND,
    ),
  );
