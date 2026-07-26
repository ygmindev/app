import { MessageContainer } from '@lib/frontend/chat/components/MessageContainer/MessageContainer';
import { type StreamingChatContainerPropsModel } from '@lib/frontend/chat/components/StreamingChatContainer/StreamingChatContainer.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import map from 'lodash/map';

export const StreamingChatContainer: LFCModel<StreamingChatContainerPropsModel> = ({
  chatId,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [streams] = useStore(`chat.chats.${chatId}.streams`);
  return (
    <Wrapper {...wrapperProps}>
      {map(
        streams,
        (v, k) =>
          v && (
            <MessageContainer
              key={k}
              message={v}
            />
          ),
      )}
    </Wrapper>
  );
};
