import { Container } from '#lib-backend/core/utils/Container/Container';
import { Group } from '#lib-backend/group/resources/Group/Group';
import { withContext } from '#lib-backend/http/utils/withContext/withContext';
import { withFieldResolver } from '#lib-backend/http/utils/withFieldResolver/withFieldResolver';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { withSelf } from '#lib-backend/http/utils/withSelf/withSelf';
import {
  type CreateProtectedResourceResolverModel,
  type CreateProtectedResourceResolverParamsModel,
} from '#lib-backend/resource/utils/createProtectedResourceResolver/createProtectedResourceResolver.models';
import { createResourceResolver } from '#lib-backend/resource/utils/createResourceResolver/createResourceResolver';
import { withInput } from '#lib-backend/resource/utils/withInput/withInput';
import { withOutput } from '#lib-backend/resource/utils/withOutput/withOutput';
import { type ContextModel } from '#lib-platform/core/core.models';
import { type ProtectedResourceModel } from '#lib-shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type PartialModel } from '#lib-shared/core/core.models';
import { type GroupModel } from '#lib-shared/group/resources/Group/Group.models';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';

export const createProtectedResourceResolver = <
  TType extends ProtectedResourceModel,
  TForm = EntityResourceDataModel<TType>,
>(
  params: CreateProtectedResourceResolverParamsModel<TType, TForm>,
): CreateProtectedResourceResolverModel<TType, TForm> => {
  @withResolver({ Resource: params.Resource })
  class ProtectedResourceResolver extends createResourceResolver<TType, TForm>(params) {
    protected _service = Container.get(params.ResourceService);

    @withOutput({
      Resource: params.Resource,
      method: RESOURCE_METHOD_TYPE.GET_MANY,
      name: `${params.name}${RESOURCE_METHOD_TYPE.GET_MANY}Protected`,
    })
    async getManyProtected(
      @withInput({
        Resource: params.Resource,
        method: RESOURCE_METHOD_TYPE.GET_MANY,
        name: `${params.name}${RESOURCE_METHOD_TYPE.GET_MANY}Protected`,
      })
      input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm> = {},
      @withContext()
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType>> {
      return this._service.getManyProtected(input, context);
    }

    @withFieldResolver({ Resource: () => Group })
    async Group(@withSelf() self: TType): Promise<PartialModel<GroupModel> | null> {
      return this._service.Group ? this._service.Group(self) : null;
    }
  }
  return ProtectedResourceResolver;
};
