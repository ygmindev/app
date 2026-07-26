import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { MESSAGE_RESOURCE_NAME } from '@lib/model/chat/Message/Message.constants';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';

export const MESSAGE_RESOURCE_PARAMS = {
  fields: [
    { id: '_id' },
    { id: 'created' },
    { id: 'content' },
    { id: 'role' },
    { fields: [{ id: '_id' }, { id: 'first' }, { id: 'last' }, { id: 'email' }], id: 'createdBy' },
  ],
  name: MESSAGE_RESOURCE_NAME,
} satisfies ResourceParamsModel<MessageModel>;
