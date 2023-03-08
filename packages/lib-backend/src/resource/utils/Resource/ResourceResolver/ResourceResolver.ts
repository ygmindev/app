import { withContext } from '@lib/backend/http/decorators/withContext/withContext';
import { withResolver } from '@lib/backend/http/decorators/withResolver/withResolver';
import { withInput } from '@lib/backend/resource/decorators/withInput/withInput';
import { withOutput } from '@lib/backend/resource/decorators/withOutput/withOutput';
import type {
  ResourceResolverModel,
  ResourceResolverParamsModel,
} from '@lib/backend/resource/utils/Resource/ResourceResolver/ResourceResolver.models';
import { UnauthorizedError } from '@lib/shared/auth/errors/UnauthorizedError/UnauthorizedError';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import { withCondition } from '@lib/shared/core/decorators/withCondition/withCondition';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { NotImplementedError } from '@lib/shared/core/errors/NotImplementedError/NotImplementedError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { toPlainObject } from '@lib/shared/core/utils/toPlainObject/toPlainObject';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { ContextModel } from '@lib/shared/resource/utils/Context/Context.models';
import type { InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import type { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';

export const authorize = <TType, TForm, TRoot = undefined>({
  authorizer,
  context,
  input,
}: Pick<ResourceResolverParamsModel<TType, TForm, TRoot>, 'authorizer'> & {
  context?: ContextModel;
  input: InputModel<
    | RESOURCE_METHOD_TYPE.CREATE
    | RESOURCE_METHOD_TYPE.GET
    | RESOURCE_METHOD_TYPE.GET_CONNECTION
    | RESOURCE_METHOD_TYPE.GET_MANY
    | RESOURCE_METHOD_TYPE.REMOVE
    | RESOURCE_METHOD_TYPE.UPDATE,
    TType,
    TForm,
    TRoot
  >;
}): void => {
  if (authorizer && !authorizer({ context, input })) {
    throw new UnauthorizedError();
  }
};

export const ResourceResolver = <TType, TForm, TRoot = undefined>({
  name,
  Resource,
  ResourceService,
  authorizer,
  ResourceData,
  RootResource,
  writeAccess = ACCESS_LEVEL.RESTRICTED,
  readAccess = ACCESS_LEVEL.RESTRICTED,
}: ResourceResolverParamsModel<TType, TForm, TRoot>): ConstructorModel<
  ResourceResolverModel<TType, TForm, TRoot>
> => {
  const _createExists = ResourceService.prototype.create !== undefined;
  const _getExists = ResourceService.prototype.get !== undefined;
  const _getManyExists = ResourceService.prototype.getMany !== undefined;
  const _getConnectionExists = ResourceService.prototype.getConnection !== undefined;
  const _updateExists = ResourceService.prototype.update !== undefined;
  const _removeExists = ResourceService.prototype.remove !== undefined;

  @withContainer()
  @withResolver({ isAbstract: true })
  class _ResourceResolver implements ResourceResolverModel<TType, TForm, TRoot> {
    protected _service = Container.get(ResourceService);

    @withCondition(
      _createExists,
      withOutput({
        Resource,
        RootResource,
        level: writeAccess,
        method: RESOURCE_METHOD_TYPE.CREATE,
        name,
      }),
    )
    async create(
      @withCondition(
        _createExists,
        withInput({
          Resource: ResourceData || (Resource as unknown as ConstructorModel<TForm>),
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
        authorize({ authorizer, context, input });
        return this._service.create(toPlainObject(input), context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.CREATE);
    }

    @withCondition(
      _getExists,
      withOutput({
        Resource,
        RootResource,
        level: readAccess,
        method: RESOURCE_METHOD_TYPE.GET,
        name,
      }),
    )
    async get(
      @withCondition(
        _getExists,
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
        authorize({ authorizer, context, input });
        return this._service.get(toPlainObject(input), context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.GET);
    }

    @withCondition(
      _getManyExists,
      withOutput({
        Resource,
        RootResource,
        level: readAccess,
        method: RESOURCE_METHOD_TYPE.GET_MANY,
        name,
      }),
    )
    async getMany(
      @withCondition(
        _getManyExists,
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
        authorize({ authorizer, context, input });
        return this._service.getMany(toPlainObject(input), context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.GET_MANY);
    }

    @withCondition(
      _getConnectionExists,
      withOutput({
        Resource,
        RootResource,
        level: readAccess,
        method: RESOURCE_METHOD_TYPE.GET_CONNECTION,
        name,
      }),
    )
    async getConnection(
      @withCondition(
        _getConnectionExists,
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
        authorize({ authorizer, context, input });
        return this._service.getConnection(toPlainObject(input), context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.GET_CONNECTION);
    }

    @withCondition(
      _updateExists,
      withOutput({
        Resource,
        RootResource,
        level: writeAccess,
        method: RESOURCE_METHOD_TYPE.UPDATE,
        name,
      }),
    )
    async update(
      @withCondition(
        _updateExists,
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
        authorize({ authorizer, context, input });
        return this._service.update(toPlainObject(input), context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.UPDATE);
    }

    @withCondition(
      _removeExists,
      withOutput({
        Resource,
        RootResource,
        level: writeAccess,
        method: RESOURCE_METHOD_TYPE.REMOVE,
        name,
      }),
    )
    async remove(
      @withCondition(
        _removeExists,
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
        authorize({ authorizer, context, input });
        return this._service.remove(toPlainObject(input), context);
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.REMOVE);
    }
  }

  return _ResourceResolver;
};
