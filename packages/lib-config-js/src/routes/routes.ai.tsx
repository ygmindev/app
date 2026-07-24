import { routesConfig as configBase } from '@lib/config/routes/routes.base';
import { AI, CHAT_HISTORY, NEW } from '@lib/frontend/ai/ai.constants';
import { ChatHistoryPage } from '@lib/frontend/ai/pages/ChatHistoryPage/ChatHistoryPage';
import { chatPageRoute } from '@lib/frontend/ai/pages/ChatPage/ChatPage.route';
import { NewChatPage } from '@lib/frontend/ai/pages/NewChatPage/NewChatPage';
import { ROUTE_NAVIGATION } from '@lib/frontend/route/route.constants';
import { APP } from '@lib/shared/app/app.constants';
import { CHAT } from '@lib/shared/chat/chat.constants';

// const { get } = useChatResource();
// useEffect(() => {
//   void get({
//     filter: [{ field: '_id', value: chatId }],
//     options: {
//       populate: ['messages'],
//     },
//   }).then(console.warn);
// }, [chatId]);

export const routesConfig = configBase.extend(() => ({
  routes: [
    {
      namespaces: [AI, CHAT],
      navigation: ROUTE_NAVIGATION.NAVIGATION,
      pathname: APP,

      routes: [
        {
          element: <NewChatPage />,
          icon: 'chatPlus',
          isNavigatable: true,
          pathname: NEW,
          title: ({ t }) => t('chat:newChat'),
        },

        chatPageRoute,

        {
          element: <ChatHistoryPage />,
          icon: 'chats',
          isNavigatable: true,
          pathname: CHAT_HISTORY,
          title: ({ t }) => t('chat:chats'),
        },
      ],
    },
  ],
}));
