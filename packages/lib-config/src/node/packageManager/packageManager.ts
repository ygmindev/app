import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { type PackageManagerConfigModel } from '@lib/config/node/packageManager/packageManager.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const config = defineConfig<PackageManagerConfigModel>({
  params: () => ({
    fixedVersions: {
      // typescript: '4.7.4',
      '@types/inquirer': '^8.2.2',
      eslint: '^8.56.0', // eslint9 flat config incompatible
      inquirer: '^8.2.2',
      'p-queue': '^6.6.2', // no commonjs
      'react-native-vector-icons': '^9.2.0', // 10.0.0 incompatible with createAnimatedComponent
      'react-native-web': '^0.18.12', // 0.19 results in no icon color animation
    },

    installCommand: (names, packages, options = {}) =>
      names && packages
        ? `pnpm add ${packages ? packages.map((v) => `--filter @${v.replace('-', '/')}`).join(' ') : ''} ${options.isDev ? '-D' : ''} ${names}`
        : 'pnpm install --shamefully-hoist',

    name: 'pnpm',

    removeCommand: (names, packages) =>
      `pnpm remove ${packages ? packages.map((v) => `--filter @${v.replace('-', '/')}`).join(' ') : ''} ${names}`,

    toJsx: [
      fromModules('react-native-animatable/createAnimatableComponent.js'),
      fromModules('react-native-gifted-chat/lib/Actions.js'),
      fromModules('react-native-gifted-chat/lib/Composer.js'),
      fromModules('react-native-gifted-chat/lib/Day.js'),
      fromModules('react-native-gifted-chat/lib/GiftedChat.js'),
      fromModules('react-native-gifted-chat/lib/GiftedAvatar.js'),
      fromModules('react-native-gifted-chat/lib/Bubble.js'),
      fromModules('react-native-gifted-chat/lib/Avatar.js'),
      fromModules('react-native-gifted-chat/lib/LoadEarlier.js'),
      fromModules('react-native-gifted-chat/lib/Message.js'),
      fromModules('react-native-gifted-chat/lib/InputToolbar.js'),
      fromModules('react-native-gifted-chat/lib/MessageContainer.js'),
      fromModules('react-native-gifted-chat/lib/Send.js'),
      fromModules('react-native-gifted-chat/lib/Time.js'),
      fromModules('react-native-gifted-chat/lib/SystemMessage.js'),
      fromModules('react-native-gifted-chat/lib/MessageImage.js'),
      fromModules('react-native-gifted-chat/lib/MessageText.js'),
      fromModules('react-native-gifted-chat/lib/MessageVideo.js'),
      fromModules('react-native-gifted-chat/lib/QuickReplies.js'),
      fromModules('react-native-gifted-chat/lib/TypingIndicator.js'),
      fromModules('react-native-gifted-chat/lib/MessageAudio.js'),
      fromModules('react-native-typing-animation/src/index.js'),
      fromModules('react-native-reanimated/lib/createAnimatedComponent.js'),
      fromModules('react-native-vector-icons/lib/create-icon-set.js'),
      fromModules('react-native-vector-icons/lib/icon-button.js'),
      fromModules('moti/build/core/use-motify.js'),
      fromModules('moti/src/core/use-motify.ts'),
    ],
  }),
});

export default config;
