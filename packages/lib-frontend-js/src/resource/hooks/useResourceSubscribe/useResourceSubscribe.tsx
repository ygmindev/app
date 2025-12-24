import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { useAppGraphqlSse } from '@lib/frontend/http/hooks/useAppGraphqlSse/useAppGraphqlSse';
import { toGraphqlParamsFields } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import {
  type UseResourceSubscribeModel,
  type UseResourceSubscribeParamsModel,
} from '@lib/frontend/resource/hooks/useResourceSubscribe/useResourceSubscribe.models';
import { type ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import uniqBy from 'lodash/uniqBy';

export const useResourceSubscribe = <TType, TRoot = undefined, TStreaming extends boolean = false>({
  fields,
  input,
  isStreaming,
  name,
  root,
}: UseResourceSubscribeParamsModel<TType, TRoot, TStreaming>): UseResourceSubscribeModel<
  TType,
  TStreaming
> => {
  const nameF = `${name}${RESOURCE_METHOD_TYPE.SUBSCRIBE}`;
  const fieldsF = toGraphqlParamsFields<TType>(
    uniqBy([{ id: '_id' as StringKeyModel<TType> }, ...(fields ?? [])], 'id'),
  );
  return useAppGraphqlSse({
    fields: [{ result: fieldsF }] as GraphqlQueryParamsFieldsModel<
      ResourceOutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, TType, TRoot>
    >,
    id: nameF,
    isStreaming,
    name: nameF,
    params: { input: `${nameF}Input` },
    variables: JSON.stringify({ input: { ...input, root } }) as unknown as {
      input: ResourceInputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, TType, TRoot>;
    },
  }) as UseResourceSubscribeModel<TType, TStreaming>;
};
