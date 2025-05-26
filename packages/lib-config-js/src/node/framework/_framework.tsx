import {
  type _FrameworkConfigModel,
  type FrameworkConfigModel,
} from '@lib/config/node/framework/framework.models';
import { uri } from '@lib/shared/http/utils/uri/uri';

export const _framework = ({ assetsUri }: FrameworkConfigModel): _FrameworkConfigModel => ({
  baseAssets: assetsUri ? uri(assetsUri) : undefined,

  clientRouting: true,

  extends: ['import:vike-react/config:default'],

  hydrationCanBeAborted: true,

  passToClient: ['context'],

  prerender: {
    keepDistServer: true,

    partial: true,
  },

  route: '/*',

  ssr: true,

  stream: true,
});
