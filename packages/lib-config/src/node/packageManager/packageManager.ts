import { fromModules } from '@lib-backend/file/utils/fromModules/fromModules';
import { defineConfig } from '@lib-config/core/utils/defineConfig/defineConfig';
import { type PackageManagerConfigModel } from '@lib-config/node/packageManager/packageManager.models';

const { _config, config } = defineConfig({
  config: {
    fixedVersions: {
      '@types/inquirer': '^8.2.2',
      inquirer: '^8.2.2',
      typescript: '4.7.4',
    },

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
  } satisfies PackageManagerConfigModel,
});

export { _config, config };
