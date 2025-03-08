import { withContext } from '@lib/backend/http/utils/withContext/withContext';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import {
  type CreateResourceResolverModel,
  type CreateResourceResolverParamsModel,
} from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver.models';
import { withAuthorizer } from '@lib/backend/resource/utils/withAuthorizer/withAuthorizer';
import { withInput } from '@lib/backend/resource/utils/withInput/withInput';
import { withOutput } from '@lib/backend/resource/utils/withOutput/withOutput';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { type PrototypeModel } from '@lib/shared/core/core.models';
import { NotImplementedError } from '@lib/shared/core/errors/NotImplementedError/NotImplementedError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { withCondition } from '@lib/shared/core/utils/withCondition/withCondition';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';

export const createResourceResolver = <
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
>({
  Resource,
  ResourceData,
  ResourceImplementation,
  RootResource,
  access = { default: ACCESS_LEVEL.PROTECTED },
  authorizer,
  name,
}: CreateResourceResolverParamsModel<TType, TForm, TRoot>): CreateResourceResolverModel<
  TType,
  TForm,
  TRoot
> => {
  const { create, createMany, get, getConnection, getMany, remove, search, update } =
    ResourceImplementation.prototype;
  const createExists = create !== undefined;
  const createManyExists = createMany !== undefined;
  const getExists = get !== undefined;
  const getManyExists = getMany !== undefined;
  const getConnectionExists = getConnection !== undefined;
  const updateExists = update !== undefined;
  const removeExists = remove !== undefined;
  const searchExists = search !== undefined;

  @withResolver()
  class ResourceResolver
    implements PrototypeModel<CreateResourceResolverModel<TType, TForm, TRoot>>
  {
    protected _implementation = Container.get(ResourceImplementation);

    @withCondition(
      () => createExists,
      () => [
        withAuthorizer({
          authorizer:
            authorizer?.default ?? authorizer?.write ?? authorizer?.[RESOURCE_METHOD_TYPE.CREATE],
        }),
        withOutput({
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
          withInput({
            Resource: ResourceData ?? (Resource as unknown as () => ResourceClassModel<TForm>),
            method: RESOURCE_METHOD_TYPE.CREATE,
            name,
          }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot> = {},
      @withContext()
      context?: RequestContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>> {
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
        withOutput({
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
          withInput({
            Resource: ResourceData ?? (Resource as unknown as () => ResourceClassModel<TForm>),
            method: RESOURCE_METHOD_TYPE.CREATE_MANY,
            name,
          }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TForm, TRoot> = {},
      @withContext()
      context?: RequestContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE_MANY, TType, TRoot>> {
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
        withOutput({
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
        () => withInput({ Resource, method: RESOURCE_METHOD_TYPE.GET, name }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.GET, TType, TForm, TRoot> = {},
      @withContext()
      context?: RequestContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>> {
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
            authorizer?.default ??
            authorizer?.read ??
            authorizer?.[RESOURCE_METHOD_TYPE.CREATE_MANY],
        }),
        withOutput({
          Resource,
          RootResource,
          access: access?.default ?? access?.read ?? access?.[RESOURCE_METHOD_TYPE.CREATE_MANY],
          method: RESOURCE_METHOD_TYPE.GET_MANY,
          name,
        }),
      ],
    )
    async getMany(
      @withCondition(
        () => getManyExists,
        () => withInput({ Resource, method: RESOURCE_METHOD_TYPE.GET_MANY, name }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm, TRoot> = {},
      @withContext()
      context?: RequestContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>> {
      if (this._implementation.getMany) {
        return this._implementation.getMany(input, context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.GET_MANY);
    }

    @withCondition(
      () => getConnectionExists,
      () => [
        withAuthorizer({
          authorizer:
            authorizer?.default ??
            authorizer?.read ??
            authorizer?.[RESOURCE_METHOD_TYPE.GET_CONNECTION],
        }),
        withOutput({
          Resource,
          RootResource,
          access: access?.default ?? access?.read ?? access?.[RESOURCE_METHOD_TYPE.GET_CONNECTION],
          method: RESOURCE_METHOD_TYPE.GET_CONNECTION,
          name,
        }),
      ],
    )
    async getConnection(
      @withCondition(
        () => getConnectionExists,
        () => withInput({ Resource, method: RESOURCE_METHOD_TYPE.GET_CONNECTION, name }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TForm, TRoot> = {},
      @withContext()
      context?: RequestContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>> {
      if (this._implementation.getConnection) {
        return this._implementation.getConnection(input, context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.GET_CONNECTION);
    }

    @withCondition(
      () => updateExists,
      () => [
        withAuthorizer({
          authorizer:
            authorizer?.default ?? authorizer?.write ?? authorizer?.[RESOURCE_METHOD_TYPE.UPDATE],
        }),
        withOutput({
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
        () => withInput({ Resource, method: RESOURCE_METHOD_TYPE.UPDATE, name }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TForm, TRoot> = {},
      @withContext()
      context?: RequestContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>> {
      if (this._implementation.update) {
        return this._implementation.update(input, context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.UPDATE);
    }

    @withCondition(
      () => removeExists,
      () => [
        withAuthorizer({
          authorizer:
            authorizer?.default ?? authorizer?.write ?? authorizer?.[RESOURCE_METHOD_TYPE.REMOVE],
        }),
        withOutput({
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
        () => withInput({ Resource, method: RESOURCE_METHOD_TYPE.REMOVE, name }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TForm, TRoot> = {},
      @withContext()
      context?: RequestContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>> {
      if (this._implementation.remove) {
        return this._implementation.remove(input, context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.REMOVE);
    }

    @withCondition(
      () => searchExists,
      () => [
        withAuthorizer({
          authorizer:
            authorizer?.default ?? authorizer?.read ?? authorizer?.[RESOURCE_METHOD_TYPE.SEARCH],
        }),
        withOutput({
          Resource,
          RootResource,
          access: access?.default ?? access?.read ?? access?.[RESOURCE_METHOD_TYPE.SEARCH],
          method: RESOURCE_METHOD_TYPE.SEARCH,
          name,
        }),
      ],
    )
    async search(
      @withCondition(
        () => searchExists,
        () => withInput({ Resource, method: RESOURCE_METHOD_TYPE.SEARCH, name }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.SEARCH, TType, TForm, TRoot> = {},
      @withContext()
      context?: RequestContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.SEARCH, TType, TRoot>> {
      if (this._implementation.search) {
        return this._implementation.search(input, context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.SEARCH);
    }
  }

  return ResourceResolver;
};
