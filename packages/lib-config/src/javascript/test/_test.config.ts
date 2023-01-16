import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { bundleConfig } from '@lib/config/javascript/bundle/bundle.config';
import type { _TestConfigParamsModel } from '@lib/config/javascript/test/_test.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { reduce, trim } from 'lodash';
import type { UserConfig } from 'vitest/config';

export const _testConfig = ({
  bundle,
  cachePath,
  coverageOutputPath,
  fileExtensions,
  isWatch,
  match,
  mockPath,
  root,
  testExtensions,
  timeout,
}: _TestConfigParamsModel): UserConfig =>
  merge({
    strategy: MERGE_STRATEGY.DEEP_PREPEND,

    values: [
      {
        test: {
          cache: {
            dir: cachePath,
          },

          coverage: {
            enabled: true,

            include: reduce(
              bundle.extensions,
              (result, ext) => {
                const _ext = trim(ext, '.');
                return [
                  ...result,
                  fromWorking(`src/**/${match}.${_ext}`),
                  fromWorking(`src/**/${match}.${_ext}`),
                ];
              },
              [] as Array<string>,
            ),

            provider: 'istanbul',

            reportsDirectory: coverageOutputPath,
          },

          deps: {
            interopDefault: true,
          },

          environment: bundle.platform === PLATFORM.WEB ? 'jsdom' : 'node',

          globals: true,

          include: reduce(
            testExtensions,
            (result, ext) => {
              const _ext = trim(ext, '.');
              return [
                ...result,
                fromWorking(`src/**/${match}.${_ext}`),
                fromWorking(`src/**/${match}.${_ext}`),
              ];
            },
            [] as Array<string>,
          ),

          outputFile: coverageOutputPath,

          passWithNoTests: true,

          // reporters: ['html'],

          root,

          setupFiles: [fromConfig(`javascript/test/_initialize.config.${bundle.platform}.ts`)],

          testTimeout: timeout,

          watch: isWatch,
        },
      },

      bundleConfig,
    ],
  });
