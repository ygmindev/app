import {
  type _WebBuildModel,
  type _WebBuildParamsModel,
} from '@tool/task/web/tasks/webBuild/_webBuild.models';
import { build } from 'vike/api';

export const _webBuild = async ({ bundle }: _WebBuildParamsModel): Promise<_WebBuildModel> => {
  await build({ viteConfig: bundle });
  return {};
};
