import { withContext } from '@lib/backend/http/utils/withContext/withContext';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import {
  type CreateProtectedResourceResolverModel,
  type CreateProtectedResourceResolverParamsModel,
} from '@lib/backend/resource/utils/createProtectedResourceResolver/createProtectedResourceResolver.models';
import { createResourceResolver } from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver';
import { withResourceInput } from '@lib/backend/resource/utils/withResourceInput/withResourceInput';
import { withResourceOutput } from '@lib/backend/resource/utils/withResourceOutput/withResourceOutput';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { type ProtectedResourceModel } from '@lib/model/auth/ProtectedResource/ProtectedResource.models';
import { type ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export const createProtectedResourceResolver = <TType extends ProtectedResourceModel>(
  params: CreateProtectedResourceResolverParamsModel<TType>,
): CreateProtectedResourceResolverModel<TType> => {
  @withResolver({ Resource: params.Resource })
  class ProtectedResourceResolver extends createResourceResolver<TType>(params) {
    protected implementation = Container.get(params.ResourceImplementation);

    @withResourceOutput({
      Resource: params.Resource,
      method: RESOURCE_METHOD_TYPE.GET_MANY,
      name: `${params.name}${RESOURCE_METHOD_TYPE.GET_MANY}Protected`,
    })
    async getManyProtected(
      @withResourceInput({
        Resource: params.Resource,
        method: RESOURCE_METHOD_TYPE.GET_MANY,
        name: `${params.name}${RESOURCE_METHOD_TYPE.GET_MANY}Protected`,
      })
      input: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType> = {},
      @withContext()
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType>> {
      return this.implementation.getManyProtected(input, context);
    }

    // @withFieldResolver({ Resource: () => Group })
    // async Group(@withSelf() self: TType): Promise<PartialModel<GroupModel> | null> {
    //   return this.implementation.Group?.(self) ?? null;
    // }
  }
  return ProtectedResourceResolver;
};
