import { type UseGraphqlSseModel } from '@lib/frontend/http/hooks/useGraphqlSse/useGraphqlSse.models';
import { type UseResourceMethodParamsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export type UseResourceSubscribeParamsModel<
  TType,
  TRoot = undefined,
  TStreaming extends boolean = false,
> = Omit<
  UseResourceMethodParamsModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, TType, TRoot>,
  'after' | 'before' | 'method'
> & {
  input?: ResourceInputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, TType, TRoot>;
  isStreaming?: TStreaming;
};

export type UseResourceSubscribeModel<
  TType,
  TStreaming extends boolean = false,
> = UseGraphqlSseModel<ResourceOutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, TType>, TStreaming>;
