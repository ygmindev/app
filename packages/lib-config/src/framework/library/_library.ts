import type { _LibraryConfigParamsModel } from '@lib/config/framework/library/_library.models';
import { bundleConfig } from '@lib/config/node/bundle/bundle';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import type { StorybookViteConfig } from '@storybook/builder-vite';
import { reduce, trim } from 'lodash';

export const _libraryConfig = ({
  inputPath,
  resolveExtensions,
  staticPath,
}: _LibraryConfigParamsModel): StorybookViteConfig => ({
  addons: ['@storybook/addon-essentials'],

  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },

  staticDirs: [staticPath],

  stories: reduce<string, Array<string>>(
    resolveExtensions,
    (result, ext) => {
      const _ext = trim(ext, '.');
      return [...result, `${inputPath}/**/*.${_ext}`];
    },
    [],
  ),

  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
  },

  viteFinal: async (config) =>
    merge({
      strategy: MERGE_STRATEGY.DEEP_PREPEND,

      values: [bundleConfig, config],
    }),
});
