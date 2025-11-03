import { _bundle } from '@lib/config/node/bundle/_bundle';
import {
  type _BuildAppModel,
  type _BuildAppParamsModel,
} from '@lib/shared/web/utils/buildApp/_buildApp.models';
import { build } from 'vike/api';

export const _buildApp = async ({ bundle }: _BuildAppParamsModel): _BuildAppModel => {
  await build({
    viteConfig: { ..._bundle(bundle), configFile: false },
  } as Parameters<typeof build>[0]);
};
