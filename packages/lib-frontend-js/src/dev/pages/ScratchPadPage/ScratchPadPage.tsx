import { useChatResource } from '@lib/frontend/chat/hooks/useChatResource/useChatResource';
import { useMessageResource } from '@lib/frontend/chat/hooks/useMessageResource/useMessageResource';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { useAppGraphql } from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql.base';
import { type ScratchPadPagePropsModel } from '@lib/frontend/dev/pages/ScratchPadPage/ScratchPadPage.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { useUserResource } from '@lib/frontend/user/hooks/useUserResource/useUserResource';
import { CHAT_RESOURCE_NAME } from '@lib/shared/chat/resources/Chat/Chat.constants';
// import { CHAT_RESOURCE_NAME } from '@lib/shared/chat/resources/Chat/Chat.constants';
import { type PartialModel } from '@lib/shared/core/core.models';
import { GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';
import { useEffect } from 'react';

export const ScratchPadPage: LFCModel<ScratchPadPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { getMany } = useUserResource();
  const currentUser = useCurrentUser();
  const { create: createChat } = useChatResource();
  const { create: createMessage } = useMessageResource();

  const graphql = useAppGraphql();

  useEffect(() => {
    void graphql.query({
      fields: ['message'],
      name: 'messageSubscription',
      type: GRAPHQL_OPERATION_TYPE.SUBSCRIPTION,
    });
  }, []);

  const handlePress = async (user: PartialModel<UserModel>): Promise<void> => {
    const uid = user._id;
    if (uid) {
      const { result } = await createChat({
        form: {
          name: `chat with ${user.email}`,

          participants: [{ _id: uid }],
        },
      });
      const chatId = result?._id;
      chatId &&
        (await createMessage({
          form: { [CHAT_RESOURCE_NAME]: { _id: chatId }, text: 'test message' },
        }));
    }

    // await http.post({
    //   params: {
    //     query: 'mutation messageQuery { messageQuery { id message sent } }',
    //   },
    //   url: '',
    // });
    // void send('hello');
  };

  return (
    <MainLayout
      {...wrapperProps}
      p>
      <DataBoundary
        id="users33"
        query={getMany}
        s>
        {({ data }) => {
          return (
            <Wrapper s>
              {data?.result?.map((v) => (
                <Button
                  elementState={v._id === currentUser?._id ? ELEMENT_STATE.DISABLED : undefined}
                  key={v._id}
                  onPress={async () => handlePress(v)}>
                  {v.email}
                </Button>
              ))}
            </Wrapper>
          );
        }}
      </DataBoundary>
    </MainLayout>
  );
};
