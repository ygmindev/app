import { fromModules } from '#lib-backend/file/utils/fromModules/fromModules';
import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';
import { type PackageManagerConfigModel } from '#lib-config/node/packageManager/packageManager.models';

const { _config, config } = defineConfig({
  config: {
    fixedVersions: {
      '@types/inquirer': '^8.2.2',
      inquirer: '^8.2.2',
      typescript: '4.7.4',
    },

    toJsx: [
      fromModules('react-native-animatable/createAnimatableComponent.js'),
      fromModules('react-native-reanimated/lib/createAnimatedComponent.js'),
      fromModules('react-native-vector-icons/lib/create-icon-set.js'),
      fromModules('react-native-vector-icons/lib/create-multi-style-icon-set.js'),
      fromModules('react-native-vector-icons/lib/icon-button.js'),
      fromModules('moti/build/core/use-motify.js'),
      fromModules('moti/src/core/use-motify.ts'),
    ],
  } satisfies PackageManagerConfigModel,
});

export { _config, config };
