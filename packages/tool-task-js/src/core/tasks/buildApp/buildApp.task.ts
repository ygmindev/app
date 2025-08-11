import { type TaskParamsModel } from '@tool/task/core/core.models';
import { APP_NAME } from '@tool/task/core/tasks/buildApp/buildApp.constants';
import { type BuildAppParamsModel } from '@tool/task/core/tasks/buildApp/buildApp.models';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';

const buildApp: TaskParamsModel<BuildAppParamsModel> = {
  name: 'build-app',

  options: async () => ({
    apps: {
      options: Object.values(APP_NAME),
      type: PROMPT_TYPE.MULTIPLE,
    },
  }),

  task: [
    ({ options }) => {
      for (const app of options?.apps ?? []) {
        switch (app) {
          case APP_NAME.ESLINT: {
          }
        }
      }
      console.warn(options?.apps);
    },
  ],
};

export default buildApp;
