import {
  type _FrameworkConfigModel,
  type FrameworkConfigModel,
} from '@lib/config/node/framework/framework.models';
import { uri } from '@lib/shared/http/utils/uri/uri';

export const _framework = ({
  assetsUri,
  faviconDir,
}: FrameworkConfigModel): _FrameworkConfigModel => {
  const baseAssets = assetsUri ? uri(assetsUri) : undefined;
  return {
    baseAssets,

    clientRouting: true,

    extends: ['import:vike-react/config:default'],

    favicon: `${baseAssets}/${faviconDir}`,

    hydrationCanBeAborted: true,

    passToClient: ['context'],

    prerender: {
      keepDistServer: true,

      partial: true,
    },

    route: '/*',

    ssr: true,

    stream: true,
  };
};
