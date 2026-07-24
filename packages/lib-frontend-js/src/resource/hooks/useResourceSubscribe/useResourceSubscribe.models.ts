import { type UseGraphqlSseModel } from '@lib/frontend/http/hooks/useGraphqlSse/useGraphqlSse.models';
import { type UseResourceQueryParamsModel } from '@lib/frontend/resource/hooks/useResourceQuery/useResourceQuery.models';
import { type ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export type UseResourceSubscribeParamsModel<
  TType,
  TRoot = undefined,
  TStreaming extends boolean = false,
> = Omit<
  UseResourceQueryParamsModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, TType, TRoot>,
  'after' | 'before' | 'method'
> & {
  input?: ResourceInputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, TType, TRoot>;
  isStreaming?: TStreaming;
  onData?: (
    data: ResourceOutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, TType>,
    onClose: () => void,
  ) => void;
  onError?(e: Error): void;
};

export type UseResourceSubscribeModel<
  TType,
  TStreaming extends boolean = false,
> = UseGraphqlSseModel<ResourceOutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, TType>, TStreaming>;
