import { withContext } from '@lib/backend/http/utils/withContext/withContext';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import {
  type CreateResourceResolverModel,
  type CreateResourceResolverParamsModel,
} from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver.models';
import { withAuthorizer } from '@lib/backend/resource/utils/withAuthorizer/withAuthorizer';
import { withResourceInput } from '@lib/backend/resource/utils/withResourceInput/withResourceInput';
import { withResourceOutput } from '@lib/backend/resource/utils/withResourceOutput/withResourceOutput';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { ResourceModel } from '@lib/model/resource/Resource/Resource.models';
import { type ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { type PrototypeModel } from '@lib/shared/core/core.models';
import { NotImplementedError } from '@lib/shared/core/errors/NotImplementedError/NotImplementedError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { withCondition } from '@lib/shared/core/utils/withCondition/withCondition';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export const createResourceResolver = <TType extends ResourceModel, TRoot = undefined>({
  Resource,
  ResourceImplementation,
  RootResource,
  access = { default: ACCESS_LEVEL.PROTECTED },
  authorizer,
  name,
}: CreateResourceResolverParamsModel<TType, TRoot>): CreateResourceResolverModel<TType, TRoot> => {
  const { create, createMany, get, getMany, remove, update, updateMany } =
    ResourceImplementation.prototype;

  const createExists = create !== undefined;
  const createManyExists = createMany !== undefined;
  const getExists = get !== undefined;
  const getManyExists = getMany !== undefined;
  const updateExists = update !== undefined;
  const updateManyExists = updateMany !== undefined;
  const removeExists = remove !== undefined;

  @withResolver()
  class ResourceResolver implements PrototypeModel<CreateResourceResolverModel<TType, TRoot>> {
    protected _implementation = Container.get(ResourceImplementation);

    name: string = name;

    @withCondition(
      () => createExists,
      () => [
        withAuthorizer({
          authorizer:
            authorizer?.default ?? authorizer?.write ?? authorizer?.[RESOURCE_METHOD_TYPE.CREATE],
        }),
        withResourceOutput({
          Resource,
          RootResource,
          access: access?.default ?? access?.write ?? access?.[RESOURCE_METHOD_TYPE.CREATE],
          method: RESOURCE_METHOD_TYPE.CREATE,
          name,
        }),
      ],
    )
    async create(
      @withCondition(
        () => createExists,
        () =>
          withResourceInput({
            Resource,
            method: RESOURCE_METHOD_TYPE.CREATE,
            name,
          }),
      )
      input: ResourceInputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot> = {},
      @withContext()
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>> {
      if (this._implementation.create) {
        return this._implementation.create(input, context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.CREATE);
    }

    @withCondition(
      () => createManyExists,
      () => [
        withAuthorizer({
          authorizer:
            authorizer?.default ??
            authorizer?.write ??
            authorizer?.[RESOURCE_METHOD_TYPE.CREATE_MANY],
        }),
        withResourceOutput({
          Resource,
          RootResource,
          access: access?.default ?? access?.write ?? access?.[RESOURCE_METHOD_TYPE.CREATE_MANY],
          method: RESOURCE_METHOD_TYPE.CREATE_MANY,
          name,
        }),
      ],
    )
    async createMany(
      @withCondition(
        () => createManyExists,
        () =>
          withResourceInput({
            Resource,
            method: RESOURCE_METHOD_TYPE.CREATE_MANY,
            name,
          }),
      )
      input: ResourceInputModel<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TRoot> = {},
      @withContext()
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TRoot>> {
      if (this._implementation.createMany) {
        return this._implementation.createMany(input, context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.CREATE_MANY);
    }

    @withCondition(
      () => getExists,
      () => [
        withAuthorizer({
          authorizer:
            authorizer?.default ?? authorizer?.read ?? authorizer?.[RESOURCE_METHOD_TYPE.GET],
        }),
        withResourceOutput({
          Resource,
          RootResource,
          access: access?.default ?? access?.read ?? access?.[RESOURCE_METHOD_TYPE.GET],
          method: RESOURCE_METHOD_TYPE.GET,
          name,
        }),
      ],
    )
    async get(
      @withCondition(
        () => getExists,
        () => withResourceInput({ Resource, method: RESOURCE_METHOD_TYPE.GET, name }),
      )
      input: ResourceInputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot> = {},
      @withContext()
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>> {
      if (this._implementation.get) {
        return this._implementation.get(input, context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.GET);
    }

    @withCondition(
      () => getManyExists,
      () => [
        withAuthorizer({
          authorizer:
            authorizer?.default ?? authorizer?.read ?? authorizer?.[RESOURCE_METHOD_TYPE.GET_MANY],
        }),
        withResourceOutput({
          Resource,
          RootResource,
          access: access?.default ?? access?.read ?? access?.[RESOURCE_METHOD_TYPE.GET_MANY],
          method: RESOURCE_METHOD_TYPE.GET_MANY,
          name,
        }),
      ],
    )
    async getMany(
      @withCondition(
        () => getManyExists,
        () => withResourceInput({ Resource, method: RESOURCE_METHOD_TYPE.GET_MANY, name }),
      )
      input: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot> = {},
      @withContext()
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>> {
      if (this._implementation.getMany) {
        return this._implementation.getMany(input, context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.GET_MANY);
    }

    @withCondition(
      () => removeExists,
      () => [
        withAuthorizer({
          authorizer:
            authorizer?.default ?? authorizer?.write ?? authorizer?.[RESOURCE_METHOD_TYPE.REMOVE],
        }),
        withResourceOutput({
          Resource,
          RootResource,
          access: access?.default ?? access?.write ?? access?.[RESOURCE_METHOD_TYPE.REMOVE],
          method: RESOURCE_METHOD_TYPE.REMOVE,
          name,
        }),
      ],
    )
    async remove(
      @withCondition(
        () => removeExists,
        () => withResourceInput({ Resource, method: RESOURCE_METHOD_TYPE.REMOVE, name }),
      )
      input: ResourceInputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot> = {},
      @withContext()
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>> {
      if (this._implementation.remove) {
        return this._implementation.remove(input, context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.REMOVE);
    }

    @withCondition(
      () => updateExists,
      () => [
        withAuthorizer({
          authorizer:
            authorizer?.default ?? authorizer?.write ?? authorizer?.[RESOURCE_METHOD_TYPE.UPDATE],
        }),
        withResourceOutput({
          Resource,
          RootResource,
          access: access?.default ?? access?.write ?? access?.[RESOURCE_METHOD_TYPE.UPDATE],
          method: RESOURCE_METHOD_TYPE.UPDATE,
          name,
        }),
      ],
    )
    async update(
      @withCondition(
        () => updateExists,
        () => withResourceInput({ Resource, method: RESOURCE_METHOD_TYPE.UPDATE, name }),
      )
      input: ResourceInputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot> = {},
      @withContext()
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>> {
      if (this._implementation.update) {
        return this._implementation.update(input, context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.UPDATE);
    }

    @withCondition(
      () => updateManyExists,
      () => [
        withAuthorizer({
          authorizer:
            authorizer?.default ??
            authorizer?.write ??
            authorizer?.[RESOURCE_METHOD_TYPE.UPDATE_MANY],
        }),
        withResourceOutput({
          Resource,
          RootResource,
          access: access?.default ?? access?.write ?? access?.[RESOURCE_METHOD_TYPE.UPDATE_MANY],
          method: RESOURCE_METHOD_TYPE.UPDATE_MANY,
          name,
        }),
      ],
    )
    async updateMany(
      @withCondition(
        () => updateManyExists,
        () => withResourceInput({ Resource, method: RESOURCE_METHOD_TYPE.UPDATE_MANY, name }),
      )
      input: ResourceInputModel<RESOURCE_METHOD_TYPE.UPDATE_MANY, TType, TRoot> = {},
      @withContext()
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.UPDATE_MANY, TType, TRoot>> {
      if (this._implementation.updateMany) {
        return this._implementation.updateMany(input, context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.UPDATE_MANY);
    }
  }

  return ResourceResolver;
};
