import { graphqlConfig as configBase } from '@lib/config/graphql/graphql.base';
import { ChatResolver } from '@lib/model/chat/Chat/ChatResolver/ChatResolver';
import { MessageResolver } from '@lib/model/chat/Message/MessageResolver/MessageResolver';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const graphqlConfig = configBase.extend(() => ({
  resolvers: filterNil([ChatResolver, MessageResolver]),

  schemaFilename: 'ai.gql',
}));
