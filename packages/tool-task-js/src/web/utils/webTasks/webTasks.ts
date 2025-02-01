import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { proxy } from '@tool/task/http/templates/proxy/proxy';
import { nodeTasks } from '@tool/task/node/utils/nodeTasks/nodeTasks';
import { build } from '@tool/task/web/templates/build/build';
import { dev } from '@tool/task/web/templates/dev/dev';
import {
  type WebTasksModel,
  type WebTasksParamsModel,
} from '@tool/task/web/utils/webTasks/webTasks.models';

export const webTasks = (params?: WebTasksParamsModel): WebTasksModel =>
  nodeTasks(
    merge(
      [
        {
          additionalTasks: [dev, build, proxy],

          eteTasks: ['run ssjd', 'run awjd'],
        },
        params,
      ],
      MERGE_STRATEGY.DEEP_APPEND,
    ),
  );
