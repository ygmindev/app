import { useState } from 'react';

import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { type ScratchPadPagePropsModel } from '#lib-frontend/dev/pages/ScratchPadPage/ScratchPadPage.models';
import { useWebsocket } from '#lib-frontend/http/hooks/useWebsocket/useWebsocket';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type ChatMessageModel } from '#lib-shared/chat/chat.models';

export const ScratchPadPage: LFCModel<ScratchPadPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [current, currentSet] = useState(0);
  const [messages, messageSet] = useState<Array<ChatMessageModel>>([]);

  const { status } = useWebsocket();
  console.warn(status);

  return (
    <Wrapper
      {...wrapperProps}
      flex
      p
      position="relative">
      {/* <ChatContainer
        messages={messages}
        messagesSet={messageSet}
      /> */}
    </Wrapper>
  );
};
