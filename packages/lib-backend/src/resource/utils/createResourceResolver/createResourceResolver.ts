import { Container } from '@lib/backend/core/utils/Container/Container';
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
import { RequestContextModel } from '@lib/config/platform/api/api.models';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { type PrototypeModel } from '@lib/shared/core/core.models';
import { NotImplementedError } from '@lib/shared/core/errors/NotImplementedError/NotImplementedError';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
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
  access = { default: ACCESS_LEVEL.RESTRICTED },
  authorizer,
  name,
}: CreateResourceResolverParamsModel<TType, TForm, TRoot>): CreateResourceResolverModel<
  TType,
  TForm,
  TRoot
> => {
  const { prototype } = ResourceImplementation;
  const createExists = prototype.create !== undefined;
  const createManyExists = prototype.createMany !== undefined;
  const getExists = prototype.get !== undefined;
  const getManyExists = prototype.getMany !== undefined;
  const getConnectionExists = prototype.getConnection !== undefined;
  const updateExists = prototype.update !== undefined;
  const removeExists = prototype.remove !== undefined;

  @withResolver()
  class ResourceResolver
    implements PrototypeModel<CreateResourceResolverModel<TType, TForm, TRoot>>
  {
    protected _implementation = Container.get(ResourceImplementation);

    @withCondition(
      () => createExists,
      () => [
        withAuthorizer({
          authorizer: authorizer?.default ?? authorizer?.write ?? authorizer?.Create,
        }),
        withOutput({
          Resource,
          RootResource,
          level: access?.default ?? access?.write ?? access?.Create,
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
        return this._implementation.create(cleanObject(input), context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.CREATE);
    }

    @withCondition(
      () => createManyExists,
      () => [
        withAuthorizer({
          authorizer: authorizer?.default ?? authorizer?.write ?? authorizer?.CreateMany,
        }),
        withOutput({
          Resource,
          RootResource,
          level: access?.default ?? access?.write ?? access?.CreateMany,
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
        return this._implementation.createMany(cleanObject(input), context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.CREATE_MANY);
    }

    @withCondition(
      () => getExists,
      () => [
        withAuthorizer({
          authorizer: authorizer?.default ?? authorizer?.read ?? authorizer?.Get,
        }),
        withOutput({
          Resource,
          RootResource,
          level: access?.default ?? access?.read ?? access?.Get,
          method: RESOURCE_METHOD_TYPE.GET,
          name,
        }),
      ],
    )
    async get(
      @withCondition(
        () => getExists,
        () =>
          withInput({
            Resource,
            method: RESOURCE_METHOD_TYPE.GET,
            name,
          }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.GET, TType, TForm, TRoot> = {},
      @withContext()
      context?: RequestContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>> {
      if (this._implementation.get) {
        return this._implementation.get(cleanObject(input), context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.GET);
    }

    @withCondition(
      () => getManyExists,
      () => [
        withAuthorizer({
          authorizer: authorizer?.default ?? authorizer?.read ?? authorizer?.GetMany,
        }),
        withOutput({
          Resource,
          RootResource,
          level: access?.default ?? access?.read ?? access?.GetMany,
          method: RESOURCE_METHOD_TYPE.GET_MANY,
          name,
        }),
      ],
    )
    async getMany(
      @withCondition(
        () => getManyExists,
        () =>
          withInput({
            Resource,
            method: RESOURCE_METHOD_TYPE.GET_MANY,
            name,
          }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm, TRoot> = {},
      @withContext()
      context?: RequestContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>> {
      if (this._implementation.getMany) {
        return this._implementation.getMany(cleanObject(input), context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.GET_MANY);
    }

    @withCondition(
      () => getConnectionExists,
      () => [
        withAuthorizer({
          authorizer: authorizer?.default ?? authorizer?.read ?? authorizer?.GetConnection,
        }),
        withOutput({
          Resource,
          RootResource,
          level: access?.default ?? access?.read ?? access?.GetConnection,
          method: RESOURCE_METHOD_TYPE.GET_CONNECTION,
          name,
        }),
      ],
    )
    async getConnection(
      @withCondition(
        () => getConnectionExists,
        () =>
          withInput({
            Resource,
            method: RESOURCE_METHOD_TYPE.GET_CONNECTION,
            name,
          }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TForm, TRoot> = {},
      @withContext()
      context?: RequestContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>> {
      if (this._implementation.getConnection) {
        return this._implementation.getConnection(cleanObject(input), context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.GET_CONNECTION);
    }

    @withCondition(
      () => updateExists,
      () => [
        withAuthorizer({
          authorizer: authorizer?.default ?? authorizer?.write ?? authorizer?.Update,
        }),
        withOutput({
          Resource,
          RootResource,
          level: access?.default ?? access?.write ?? access?.Update,
          method: RESOURCE_METHOD_TYPE.UPDATE,
          name,
        }),
      ],
    )
    async update(
      @withCondition(
        () => updateExists,
        () =>
          withInput({
            Resource,
            method: RESOURCE_METHOD_TYPE.UPDATE,
            name,
          }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TForm, TRoot> = {},
      @withContext()
      context?: RequestContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>> {
      if (this._implementation.update) {
        return this._implementation.update(cleanObject(input), context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.UPDATE);
    }

    @withCondition(
      () => removeExists,
      () => [
        withAuthorizer({
          authorizer: authorizer?.default ?? authorizer?.write ?? authorizer?.Remove,
        }),
        withOutput({
          Resource,
          RootResource,
          level: access?.default ?? access?.write ?? access?.Remove,
          method: RESOURCE_METHOD_TYPE.REMOVE,
          name,
        }),
      ],
    )
    async remove(
      @withCondition(
        () => removeExists,
        () =>
          withInput({
            Resource,
            method: RESOURCE_METHOD_TYPE.REMOVE,
            name,
          }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TForm, TRoot> = {},
      @withContext()
      context?: RequestContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>> {
      if (this._implementation.remove) {
        return this._implementation.remove(cleanObject(input), context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.REMOVE);
    }
  }

  return ResourceResolver;
};
