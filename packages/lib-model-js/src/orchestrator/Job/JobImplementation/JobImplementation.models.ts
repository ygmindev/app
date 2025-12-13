import { type LogMessageModel } from '@lib/model/logging/LogMessage/LogMessage.models';
import { type JobModel } from '@lib/model/orchestrator/Job/Job.models';
import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
import { type IdInputModel } from '@lib/model/resource/IdInput/IdInput.models';
import { type ResourceInputParamsModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export type JobImplementationModel = EntityResourceImplementationModel<JobModel> & {
  logSubscribe(
    params?: ResourceInputParamsModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, IdInputModel>,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, LogMessageModel>>;
};

//   @withResourceOutput({
//     Resource: () => Message,
//     access: ACCESS_LEVEL.PROTECTED,
//     filter: async ({ context, payload }) => {
//       console.warn('@@@ uid:');
//       console.warn(context?.user?._id);
//       const user = await getUser(context?.user?._id);
//       console.warn(user);
//       console.warn('@@@ chats:');
//       console.warn(user?.[CHAT_RESOURCE_NAME]);
//       return true;
//     },
//     method: RESOURCE_METHOD_TYPE.SUBSCRIBE,
//     name: CHAT_RESOURCE_NAME,
//     topics: ['message'],
//   })
//   async messageSubscribe(
//     @withResourceInput({
//       Resource: () => Message,
//       method: RESOURCE_METHOD_TYPE.SUBSCRIBE,
//       name: CHAT_RESOURCE_NAME,
//     })
//     input: ResourceInputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, ChatModel> = {},
//     @withRoot()
//     root?: MessageModel,
//   ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, MessageModel>> {
//     return { result: root };
//   }

//   @withResourceOutput({
//     Resource: () => Message,
//     access: ACCESS_LEVEL.PROTECTED,
//     filter: async ({ context, payload }) => {
//       console.warn('@@@ uid:');
//       console.warn(context?.user?._id);
//       const user = await getUser(context?.user?._id);
//       console.warn(user);
//       console.warn('@@@ chats:');
//       console.warn(user?.[CHAT_RESOURCE_NAME]);
//       return true;
//     },
//     method: RESOURCE_METHOD_TYPE.SUBSCRIBE,
//     name: CHAT_RESOURCE_NAME,
//     topics: ['message'],
//   })
