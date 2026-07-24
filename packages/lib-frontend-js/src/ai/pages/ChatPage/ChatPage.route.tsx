import { resourceQuerySchema } from '@lib/backend/graphql/utils/resourceQuerySchema/resourceQuerySchema';
import { graphqlConfig } from '@lib/config/graphql/graphql.ai';
import { ChatPage } from '@lib/frontend/ai/pages/ChatPage/ChatPage';
import { type ChatPageLoadersModel } from '@lib/frontend/ai/pages/ChatPage/ChatPage.models';
import { CHAT_RESOURCE_PARAMS } from '@lib/frontend/chat/resources/Chat/Chat.constants';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { CHAT } from '@lib/shared/chat/chat.constants';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export const chatPageRoute: RouteModel<
  {
    chatId?: string;
  },
  ChatPageLoadersModel
> = {
  element: <ChatPage />,
  icon: 'chat',
  loaders: __SERVER_ONLY__(({ params }) => {
    const schema = graphqlConfig.config();
    if (!params?.chatId) return {};
    return {
      [`${CHAT}.${params.chatId}`]: async () =>
        (
          await resourceQuerySchema({
            ...CHAT_RESOURCE_PARAMS,
            input: { id: params.chatId },
            method: RESOURCE_METHOD_TYPE.GET,
            schema,
          })
        ).result,
    };
  }),
  pathname: `${CHAT}/:chatId`,
  title: ({ t }) => t('chat:chat'),
};
