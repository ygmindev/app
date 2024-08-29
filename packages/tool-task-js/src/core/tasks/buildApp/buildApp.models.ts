import { type APP_NAME } from '@tool/task/core/tasks/buildApp/buildApp.constants';

export type BuildAppParamsModel = {
  apps: Array<AppNameModel>;
};

export type AppNameModel = `${APP_NAME}`;
