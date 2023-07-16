import { Container } from '#lib-backend/core/utils/Container/Container';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withContext } from '#lib-backend/http/utils/withContext/withContext';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import {
  type CreateResourceResolverModel,
  type CreateResourceResolverParamsModel,
  type ResourceResolverAuthorizerModel,
  type ResourceResolverModel,
} from '#lib-backend/resource/utils/createResourceResolver/createResourceResolver.models';
import { withInput } from '#lib-backend/resource/utils/withInput/withInput';
import { withOutput } from '#lib-backend/resource/utils/withOutput/withOutput';
import { UnauthorizedError } from '#lib-shared/auth/errors/UnauthorizedError/UnauthorizedError';
import { type ClassModel, type PrototypeModel } from '#lib-shared/core/core.models';
import { NotImplementedError } from '#lib-shared/core/errors/NotImplementedError/NotImplementedError';
import { toPlainObject } from '#lib-shared/core/utils/toPlainObject/toPlainObject';
import { withCondition } from '#lib-shared/core/utils/withCondition/withCondition';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import { type ContextModel } from '#lib-shared/resource/utils/Context/Context.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';

export const authorize = <
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
>({
  authorizer,
  context,
  input,
}: {
  authorizer?: ResourceResolverAuthorizerModel<TMethod, TType, TForm, TRoot>;
  context?: ContextModel;
  input: InputModel<TMethod, TType, TForm, TRoot>;
}): void => {
  if (authorizer && !authorizer({ context, input })) {
    throw new UnauthorizedError();
  }
};

export const createResourceResolver = <TType, TForm, TRoot = undefined>({
  Resource,
  ResourceData,
  ResourceService,
  RootResource,
  access,
  authorizer,
  name,
}: CreateResourceResolverParamsModel<TType, TForm, TRoot>): CreateResourceResolverModel<
  TType,
  TForm,
  TRoot
> => {
  const prototype = ResourceService.prototype as PrototypeModel<typeof ResourceService>;
  const createExists = prototype.create !== undefined;
  const getExists = prototype.get !== undefined;
  const getManyExists = prototype.getMany !== undefined;
  const getConnectionExists = prototype.getConnection !== undefined;
  const updateExists = prototype.update !== undefined;
  const removeExists = prototype.remove !== undefined;

  @withContainer()
  @withResolver({ isAbstract: true })
  class ResourceResolver implements ResourceResolverModel<TType, TForm, TRoot> {
    protected _service = Container.get(ResourceService);

    @withCondition(createExists, () =>
      withOutput({
        Resource,
        RootResource,
        level: access?.default || access?.write || access?.Create,
        method: RESOURCE_METHOD_TYPE.CREATE,
        name,
      }),
    )
    async create(
      @withCondition(createExists, () =>
        withInput({
          Resource: ResourceData ?? (Resource as unknown as ClassModel<TForm>),
          RootResource,
          method: RESOURCE_METHOD_TYPE.CREATE,
          name,
        }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>,
      @withContext()
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>> {
      if (this._service.create) {
        authorize<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>({
          authorizer: authorizer?.default || authorizer?.write || authorizer?.Create,
          context,
          input,
        });
        return this._service.create(toPlainObject(input), context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.CREATE);
    }

    @withCondition(getExists, () =>
      withOutput({
        Resource,
        RootResource,
        level: access?.default || access?.read || access?.Get,
        method: RESOURCE_METHOD_TYPE.GET,
        name,
      }),
    )
    async get(
      @withCondition(getExists, () =>
        withInput({
          Resource,
          RootResource,
          method: RESOURCE_METHOD_TYPE.GET,
          name,
        }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>,
      @withContext()
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>> {
      if (this._service.get) {
        authorize<RESOURCE_METHOD_TYPE.GET, TType, TForm, TRoot>({
          authorizer: authorizer?.default || authorizer?.read || authorizer?.Get,
          context,
          input,
        });
        return this._service.get(toPlainObject(input), context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.GET);
    }

    @withCondition(getManyExists, () =>
      withOutput({
        Resource,
        RootResource,
        level: access?.default || access?.read || access?.GetMany,
        method: RESOURCE_METHOD_TYPE.GET_MANY,
        name,
      }),
    )
    async getMany(
      @withCondition(getManyExists, () =>
        withInput({
          Resource,
          RootResource,
          method: RESOURCE_METHOD_TYPE.GET_MANY,
          name,
        }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>,
      @withContext()
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>> {
      if (this._service.getMany) {
        authorize<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm, TRoot>({
          authorizer: authorizer?.default || authorizer?.read || authorizer?.GetMany,
          context,
          input,
        });
        return this._service.getMany(toPlainObject(input), context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.GET_MANY);
    }

    @withCondition(getConnectionExists, () =>
      withOutput({
        Resource,
        RootResource,
        level: access?.default || access?.read || access?.GetConnection,
        method: RESOURCE_METHOD_TYPE.GET_CONNECTION,
        name,
      }),
    )
    async getConnection(
      @withCondition(getConnectionExists, () =>
        withInput({
          Resource,
          RootResource,
          method: RESOURCE_METHOD_TYPE.GET_CONNECTION,
          name,
        }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>,
      @withContext()
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>> {
      if (this._service.getConnection) {
        authorize<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TForm, TRoot>({
          authorizer: authorizer?.default || authorizer?.read || authorizer?.GetConnection,
          context,
          input,
        });
        return this._service.getConnection(toPlainObject(input), context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.GET_CONNECTION);
    }

    @withCondition(updateExists, () =>
      withOutput({
        Resource,
        RootResource,
        level: access?.default || access?.write || access?.Update,
        method: RESOURCE_METHOD_TYPE.UPDATE,
        name,
      }),
    )
    async update(
      @withCondition(updateExists, () =>
        withInput({
          Resource,
          RootResource,
          method: RESOURCE_METHOD_TYPE.UPDATE,
          name,
        }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>,
      @withContext()
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>> {
      if (this._service.update) {
        authorize<RESOURCE_METHOD_TYPE.UPDATE, TType, TForm, TRoot>({
          authorizer: authorizer?.default || authorizer?.write || authorizer?.Update,
          context,
          input,
        });
        return this._service.update(toPlainObject(input), context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.UPDATE);
    }

    @withCondition(removeExists, () =>
      withOutput({
        Resource,
        RootResource,
        level: access?.default || access?.write || access?.Remove,
        method: RESOURCE_METHOD_TYPE.REMOVE,
        name,
      }),
    )
    async remove(
      @withCondition(removeExists, () =>
        withInput({
          Resource,
          RootResource,
          method: RESOURCE_METHOD_TYPE.REMOVE,
          name,
        }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>,
      @withContext()
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>> {
      if (this._service.remove) {
        authorize<RESOURCE_METHOD_TYPE.REMOVE, TType, TForm, TRoot>({
          authorizer: authorizer?.default || authorizer?.write || authorizer?.Remove,
          context,
          input,
        });
        return this._service.remove(toPlainObject(input), context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.REMOVE);
    }
  }

  return ResourceResolver;
};