import { useAppGraphql } from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql.base';
import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type UseLogMessageResourceModel } from '@lib/frontend/logging/hooks/useLogMessageResource/useLogMessageResource.models';
import { LOG_MESSAGE_RESOURCE_PARAMS } from '@lib/frontend/logging/resources/LogMessage/LogMessage.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { LOG_MESSAGE_RESOURCE_NAME } from '@lib/model/logging/LogMessage/LogMessage.constants';
import { type LogMessageModel } from '@lib/model/logging/LogMessage/LogMessage.models';
import { ID_INPUT } from '@lib/model/resource/IdInput/IdInput.constants';
import { type IdInputModel } from '@lib/model/resource/IdInput/IdInput.models';
import { type ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { getOperationType } from '@lib/shared/resource/utils/getOperationType/getOperationType';

export const useLogMessageResource = (): UseLogMessageResourceModel => {
  const { query } = useAppGraphql();

  return {
    ...useResource<LogMessageModel>({
      ...LOG_MESSAGE_RESOURCE_PARAMS,
    }),

    subscribe: async (input) => {
      return (
        (await query<
          ResourceOutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, LogMessageModel>,
          { input?: IdInputModel }
        >({
          fields: [
            { result: LOG_MESSAGE_RESOURCE_PARAMS.fields.map(({ id }) => id) },
          ] as GraphqlQueryParamsFieldsModel<
            ResourceOutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, LogMessageModel>
          >,
          name: `${LOG_MESSAGE_RESOURCE_NAME}${RESOURCE_METHOD_TYPE.SUBSCRIBE}`,
          params: { input: ID_INPUT },
          type: getOperationType(RESOURCE_METHOD_TYPE.SUBSCRIBE),
          variables: { input },
        })) ?? { result: undefined }
      );
    },
  };
};
