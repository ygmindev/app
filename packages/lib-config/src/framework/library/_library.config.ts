import type { _LibraryConfigParamsModel } from '@lib/config/framework/library/_library.models';
import { bundleConfig } from '@lib/config/js/bundle/bundle.config';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import type { StorybookViteConfig } from '@storybook/builder-vite';
import { reduce, trim } from 'lodash';

export const _libraryConfig = ({
  inputPath,
  resolveExtensions,
  staticPath,
}: _LibraryConfigParamsModel): StorybookViteConfig => ({
  // addons: ['@storybook/addon-essentials'],

  // core: {
  //   builder: '@storybook/builder-vite',
  //   disableTelemetry: true,
  // },

  features: {
    storyStoreV7: false,
  },

  framework: '@storybook/react-vite',

  staticDirs: [staticPath],

  stories: reduce(
    resolveExtensions,
    (result, ext) => {
      const _ext = trim(ext, '.');
      return [...result, `${inputPath}/**/*.${_ext}`];
    },
    [] as Array<string>,
  ),

  // typescript: {
  //   check: false,
  //   checkOptions: {},
  //   reactDocgen: 'react-docgen-typescript',
  // },

  viteFinal: async (config) =>
    merge({
      strategy: MERGE_STRATEGY.DEEP_PREPEND,

      values: [bundleConfig, config],
    }),
});
