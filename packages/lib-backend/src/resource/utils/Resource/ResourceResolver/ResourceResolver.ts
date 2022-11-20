import { withResolver } from '@lib/backend/graphql/decorators/withResolver/withResolver';
import { withInput } from '@lib/backend/resource/decorators/withInput/withInput';
import { withOutput } from '@lib/backend/resource/decorators/withOutput/withOutput';
import type {
  ResourceResolverModel,
  ResourceResolverParamsModel,
} from '@lib/backend/resource/utils/Resource/ResourceResolver/ResourceResolver.models';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import { withCondition } from '@lib/shared/core/decorators/withCondition/withCondition';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { NotImplementedError } from '@lib/shared/core/errors/NotImplementedError/NotImplementedError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import type { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { toPlainObject } from 'lodash';

export const ResourceResolver = <TType, TForm, TRoot = undefined>({
  name,
  Resource,
  ResourceService,
  ResourceData,
  RootResource,
  createAccess = ACCESS_LEVEL.RESTRICTED,
  getAccess = ACCESS_LEVEL.RESTRICTED,
  updateAccess = ACCESS_LEVEL.RESTRICTED,
  removeAccess = ACCESS_LEVEL.RESTRICTED,
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
        level: createAccess,
        method: RESOURCE_METHOD_TYPE.CREATE,
        name,
      }),
    )
    async create(
      @withCondition(
        _createExists,
        withInput({
          Resource: ResourceData || (Resource as unknown as ConstructorModel<TForm>),
          RootResource: RootResource,
          method: RESOURCE_METHOD_TYPE.CREATE,
          name,
        }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>> {
      if (this._service.create) {
        return this._service.create(toPlainObject(input));
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.CREATE);
    }

    @withCondition(
      _getExists,
      withOutput({
        Resource,
        RootResource,
        level: getAccess,
        method: RESOURCE_METHOD_TYPE.GET,
        name,
      }),
    )
    async get(
      @withCondition(
        _getExists,
        withInput({ Resource, RootResource: RootResource, method: RESOURCE_METHOD_TYPE.GET, name }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>> {
      if (this._service.get) {
        return this._service.get(toPlainObject(input));
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.GET);
    }

    @withCondition(
      _getManyExists,
      withOutput({
        Resource,
        RootResource,
        level: getAccess,
        method: RESOURCE_METHOD_TYPE.GET_MANY,
        name,
      }),
    )
    async getMany(
      @withCondition(
        _getManyExists,
        withInput({
          Resource,
          RootResource: RootResource,
          method: RESOURCE_METHOD_TYPE.GET_MANY,
          name,
        }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>> {
      if (this._service.getMany) {
        return this._service.getMany(toPlainObject(input));
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.GET_MANY);
    }

    @withCondition(
      _getConnectionExists,
      withOutput({
        Resource,
        RootResource,
        level: getAccess,
        method: RESOURCE_METHOD_TYPE.GET_CONNECTION,
        name,
      }),
    )
    async getConnection(
      @withCondition(
        _getConnectionExists,
        withInput({
          Resource,
          RootResource: RootResource,
          method: RESOURCE_METHOD_TYPE.GET_CONNECTION,
          name,
        }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>> {
      if (this._service.getConnection) {
        return this._service.getConnection(toPlainObject(input));
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.GET_CONNECTION);
    }

    @withCondition(
      _updateExists,
      withOutput({
        Resource,
        RootResource,
        level: updateAccess,
        method: RESOURCE_METHOD_TYPE.UPDATE,
        name,
      }),
    )
    async update(
      @withCondition(
        _updateExists,
        withInput({
          Resource,
          RootResource: RootResource,
          method: RESOURCE_METHOD_TYPE.UPDATE,
          name,
        }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>> {
      if (this._service.update) {
        return this._service.update(toPlainObject(input));
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.UPDATE);
    }

    @withCondition(
      _removeExists,
      withOutput({
        Resource,
        RootResource,
        level: removeAccess,
        method: RESOURCE_METHOD_TYPE.REMOVE,
        name,
      }),
    )
    async remove(
      @withCondition(
        _removeExists,
        withInput({
          Resource,
          RootResource: RootResource,
          method: RESOURCE_METHOD_TYPE.REMOVE,
          name,
        }),
      )
      input: InputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>> {
      if (this._service.remove) {
        return this._service.remove(toPlainObject(input));
      }
      throw new NotImplementedError(RESOURCE_METHOD_TYPE.REMOVE);
    }
  }

  return _ResourceResolver;
};
