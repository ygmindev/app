import { bundleConfig } from '@lib/config/node/bundle/configs/bundle.frontend';
import { testConfig as testConfigBase } from '@lib/config/node/test/configs/test.base';
import type { TestConfigParamsModel } from '@lib/config/node/test/test.models';
import { cleanup } from '@lib/frontend/setup/utils/cleanup/cleanup';
import { initialize } from '@lib/frontend/setup/utils/initialize/initialize';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { EXTENSIONS_FRONTEND } from '@lib/shared/file/file.constants';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import axios from 'axios';

export const testConfig: TestConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_PREPEND,

  values: [
    {
      cleanup: async () => {
        await cleanup();
      },

      externals: bundleConfig.externals,

      initialize: {
        mocks: {
          '@react-native-async-storage/async-storage': () => mockAsyncStorage,
          'react-native/Libraries/Animated/NativeAnimatedHelper': null,
          'react-native/Libraries/EventEmitter/NativeEventEmitter': null,
        },

        onBeforeAll: async () => {
          await initialize();
        },

        onLoad: () => {
          axios.defaults.adapter = require('axios/lib/adapters/http');
        },
      },

      resolveExtensions: EXTENSIONS_FRONTEND,
    },

    testConfigBase,
  ],
});
