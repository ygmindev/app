import { EntityChatContainer } from '@lib/frontend/chat/components/EntityChatContainer/EntityChatContainer';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useSse } from '@lib/frontend/http/hooks/useSse/useSse';
import { type PingPagePropsModel } from '@lib/frontend/http/pages/PingPage/PingPage.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { useState } from 'react';

export const PingPage: LFCModel<PingPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const [data, dataSet] = useState<Array<unknown>>([]);

  const [chat, chatSet] = useState<ChatModel>({ _id: 'chat' });

  const { subscribe } = useSse({
    handlers: {
      done: () => console.warn('DONE!'),
      message: (x) => dataSet([...data, x]),
    },
    uri: {
      host: 'http://127.0.0.1',
      pathname: 'ai',
      // port: process.env.SERVER_APP_PYTHON_PORT,
      port: 5010,
    },
  });

  const currentUser = useCurrentUser();

  return (
    <Wrapper
      flex
      isCenter
      p
      style={styles}
      testID={testID}>
      <EntityChatContainer
        chat={chat}
        currentUser={currentUser ?? undefined}
        flex
        onSubmit={async (e) => {
          console.warn(e);
        }}
      />
      {/* <Wrapper
        m="auto"
        width={250}>
        <Button onPress={subscribe}>subscribe</Button>
      </Wrapper> */}
    </Wrapper>
  );
};
