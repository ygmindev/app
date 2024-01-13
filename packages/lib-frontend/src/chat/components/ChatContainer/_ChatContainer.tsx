import {
  Bubble,
  type ComposerProps,
  GiftedChat,
  type IMessage,
  type SendProps,
} from 'react-native-gifted-chat';
import { InputToolbar } from 'react-native-gifted-chat';

import { type _ChatContainerPropsModel } from '@lib-frontend/chat/components/ChatContainer/_ChatContainer.models';
import { type LFCModel } from '@lib-frontend/core/core.models';
import { TextField } from '@lib-frontend/data/components/TextField/TextField';
import { type ChatMessageModel } from '@lib-shared/chat/chat.models';
import { uid } from '@lib-shared/core/utils/uid/uid';

const serialize = ({ created, message, userId }: ChatMessageModel): IMessage => ({
  _id: uid(),
  createdAt: created ?? new Date(),
  text: message,
  user: { _id: userId },
});

const deserialize = ({ _id, createdAt, text, user }: IMessage): ChatMessageModel => ({
  created: createdAt as number,
  message: text,
  userId: `${user._id}`,
});

export const _ChatContainer: LFCModel<_ChatContainerPropsModel> = ({
  backgroundColor,
  backgroundColorPrimary,
  backgroundColorSecondary,
  borderColor,
  borderRadius,
  colorPrimary,
  colorSecondary,
  currentUser,
  inputHeight,
  messages,
  messagesSet,
  placeholder,
  sendElement,
  spacing,
}) => {
  const handleSend = (value: string | undefined, onSend: SendProps<IMessage>['onSend']): void => {
    const user = { _id: currentUser._id ?? '' };
    onSend && onSend({ text: value, user }, true);
  };

  return (
    <GiftedChat
      alwaysShowSend
      messages={messages?.map(serialize)}
      onSend={(values) =>
        messagesSet &&
        messagesSet(GiftedChat.append(messages?.map(serialize), values).map(deserialize))
      }
      renderBubble={(props) => (
        <Bubble
          {...props}
          textStyle={{ left: { color: colorSecondary }, right: { color: colorPrimary } }}
          wrapperStyle={{
            left: { backgroundColor: backgroundColorSecondary, borderRadius },
            right: { backgroundColor: backgroundColorPrimary, borderRadius },
          }}
        />
      )}
      renderComposer={({
        onSend,
        onTextChanged,
        text,
      }: ComposerProps & { onSend: SendProps<IMessage>['onSend'] }) => (
        <TextField
          flex
          height={inputHeight}
          isTransparent
          onChange={onTextChanged}
          onSubmit={() => handleSend(text, onSend)}
          placeholder={placeholder}
          value={text}
        />
      )}
      renderInputToolbar={(props) => (
        <InputToolbar
          {...props}
          containerStyle={{
            borderTopColor: borderColor,
            height: inputHeight,
            paddingHorizontal: spacing,
          }}
          primaryStyle={{ alignItems: 'center' }}
        />
      )}
      renderSend={({ onSend, text }) =>
        sendElement({ handleSend: (text) => handleSend(text, onSend), value: text })
      }
      user={{
        _id: currentUser._id ?? '',
      }}
    />
  );
};
