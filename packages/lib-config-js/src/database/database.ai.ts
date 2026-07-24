import { databaseConfig as configBase } from '@lib/config/database/database.base';
import { Chat } from '@lib/model/chat/Chat/Chat.entity';
import { Message } from '@lib/model/chat/Message/Message.entity';

export const databaseConfig = configBase.extend(() => ({
  entities: [Chat, Message],
}));
