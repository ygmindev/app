import node from '@astrojs/node';
import react from '@astrojs/react';
import type { _WebConfigParamsModel } from '@lib/config/framework/web/_web.models';
import { bundleConfig } from '@lib/config/node/bundle/bundle.config';
import type { AstroUserConfig } from 'astro/config';

export const _webConfig = ({ isReact, isSsr }: _WebConfigParamsModel): AstroUserConfig => ({
  adapter: isSsr ? node({ mode: 'standalone' }) : undefined,

  integrations: [isReact && react()].filter(Boolean),

  output: isSsr ? 'server' : 'static',

  vite: bundleConfig as AstroUserConfig['vite'],
});
