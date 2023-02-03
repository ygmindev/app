import type { _WebConfigParamsModel } from '@lib/config/framework/web/_web.models';
import { bundleConfig } from '@lib/config/javascript/bundle/bundle.config';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import react from '@vitejs/plugin-react';
import type { UserConfig } from 'vite';
import ssr from 'vite-plugin-ssr/plugin';

export const _webConfig = ({ isReact, isSsr }: _WebConfigParamsModel): UserConfig =>
  merge({
    strategy: MERGE_STRATEGY.DEEP_APPEND,

    values: [
      {
        plugins: [
          isReact && react(),
          isSsr && ssr({ includeAssetsImportedByServer: true, prerender: { partial: true } }),
        ].filter(Boolean),
      },

      bundleConfig,
    ],
  });
