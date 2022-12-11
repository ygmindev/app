import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type { StorybookConfig } from '@storybook/core-common';

export const storybookConfig: StorybookConfig = {
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },

  staticDirs: [fromWorking('public')],

  stories: [fromPackages('lib-frontend/src/**/*.stories.@(ts|tsx|js|jsx)')],

  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
  },
};
