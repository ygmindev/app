import { _web } from '@lib/config/node/web/_web';
import {
  type _BuildAppModel,
  type _BuildAppParamsModel,
} from '@lib/shared/web/utils/buildApp/_buildApp.models';
import { build } from 'vike/api';

export const _buildApp = async ({ web }: _BuildAppParamsModel): _BuildAppModel => {
  await build({ viteConfig: { ..._web(web), configFile: false } });
};
