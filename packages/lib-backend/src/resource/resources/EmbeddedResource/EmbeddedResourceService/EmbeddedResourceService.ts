import { getConnection } from '@lib/backend/database/utils/getConnection/getConnection';
import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import type { ConstructorModel, PartialModel } from '@lib/shared/core/core.models';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { flattenObject } from '@lib/shared/core/utils/flattenObject/flattenObject';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import type { WithRootModel } from '@lib/shared/resource/decorators/withRoot/withRoot.models';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import type {
  EmbeddedResourceServiceModel,
  EmbeddedResourceServiceParamsModel,
} from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.models';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { ProjectModel } from '@lib/shared/resource/utils/Args/Args.models';
import type { FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import type { InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import type { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import type { ResourceServiceDecoratorModel } from '@lib/shared/resource/utils/Resource/ResourceService/ResourceService.models';
import type { UpdateModel } from '@lib/shared/resource/utils/Update/Update.models';
import { forEach, isArray, isPlainObject, map, reduce } from 'lodash';

export const EmbeddedResourceService = <
  TType extends EmbeddedResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
  TRootForm,
>({
  RootService,
  afterCreate,
  afterGet,
  afterGetConnection,
  afterGetMany,
  afterRemove,
  afterUpdate,
  beforeCreate,
  beforeGet,
  beforeGetConnection,
  beforeGetMany,
  beforeRemove,
  beforeUpdate,
  name,
}: EmbeddedResourceServiceParamsModel<TType, TForm, TRoot, TRootForm>): ConstructorModel<
  EmbeddedResourceServiceModel<TType, TForm, TRoot>
> => {
  const _beforeCreate = async (
    input: InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>,
  ): Promise<InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>> => {
    const value = new EmbeddedResource() as TType;
    forEach(input.form, (v, k) => ((value as Record<string, unknown>)[k] = v));
    value.beforeCreate && (await value.beforeCreate());
    return { ...input, form: value };
  };

  const _getCondition = (value: unknown): unknown => {
    if (isEmpty(value)) {
      return {};
    }
    if (isPlainObject(value)) {
      const cond = map(value as object, (v, k) =>
        v === Object(v) ? { [k]: _getCondition(v) } : { $eq: [`$$value.${k}`, v] },
      );
      return cond.length > 1 ? { $and: cond } : cond[0];
    }
    return isArray(value) ? value.map(_getCondition) : value;
  };

  @withContainer()
  class _EmbeddedResourceService implements EmbeddedResourceServiceModel<TType, TForm, TRoot> {
    protected _rootService = Container.get(RootService);

    protected _decorators: ResourceServiceDecoratorModel<TType, TForm, TRoot> = {
      afterCreate,
      afterGet,
      afterGetConnection,
      afterGetMany,
      afterRemove,
      afterUpdate,
      beforeCreate,
      beforeGet,
      beforeGetConnection,
      beforeGetMany,
      beforeRemove,
      beforeUpdate,
    };

    public get decorators(): ResourceServiceDecoratorModel<TType, TForm, TRoot> {
      return this._decorators;
    }

    public set decorators(value: ResourceServiceDecoratorModel<TType, TForm, TRoot>) {
      this._decorators = value;
    }

    async create(
      input: InputModel<RESOURCE_METHOD_TYPE.CREATE, TForm, TRoot>,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>> {
      const _input = cleanObject(
        this.decorators.beforeCreate ? await this.decorators.beforeCreate({ input }) : input,
      );
      if (_input.root) {
        const _inputClean = await _beforeCreate(
          _input as unknown as InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>,
        );
        const value = _inputClean.form as TType;
        const { result: rootResult } = await this._rootService.update({
          filter: _inputClean.root as PartialModel<TRoot>,
          update: { $push: { [name]: value } } as unknown as UpdateModel<TRoot>,
        });
        const output: OutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot> = {
          result: value,
          root: rootResult,
        };
        return this.decorators.afterCreate ? await this.decorators.afterCreate({ output }) : output;
      }
      throw new NotFoundError(`${name} root`);
    }

    async get(
      input: InputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>> {
      const _input = cleanObject(
        this.decorators.beforeGet ? await this.decorators.beforeGet({ input }) : input,
      );
      if (_input.root) {
        const { result: rootResult } = await this._rootService.get({
          filter: _input.root,
          options: {
            project: {
              [name]: isEmpty(_input.filter) ? true : { $elemMatch: _input.filter },
            } as ProjectModel<TRoot>,
          },
        });
        const result = rootResult && (rootResult[name] as unknown as Array<TType>);
        const output: OutputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot> = {
          result: result && result[0],
          root: rootResult,
        };
        return this.decorators.afterGet ? await this.decorators.afterGet({ output }) : output;
      }
      throw new NotFoundError(`${name} root`);
    }

    async getMany(
      input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>> {
      const _input = cleanObject(
        this.decorators.beforeGetMany ? await this.decorators.beforeGetMany({ input }) : input,
      );
      if (_input.root) {
        const skip = _input.options?.skip || 0;
        const limit = _input.options?.take;
        const { result: rootResult } = await this._rootService.get({
          filter: _input.root,
          options: isEmpty(_input.filter)
            ? {}
            : {
                aggregate: [
                  {
                    $addFields: {
                      [name]: {
                        $filter: {
                          as: 'value',
                          cond: _getCondition(_input.filter),
                          input: `$${name}`,
                        },
                      },
                    },
                  },
                ],
              },
        });
        const result = rootResult && (rootResult[name] as unknown as Array<TType>);
        const output: OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot> = {
          result:
            (skip || limit) && result?.length
              ? result.slice(skip, limit ? skip + (limit || 0) : undefined)
              : result,
          root: rootResult,
        };
        return this.decorators.afterGetMany
          ? await this.decorators.afterGetMany({ output })
          : output;
      }
      throw new NotFoundError(`${name} root`);
    }

    async getConnection(
      input: InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>> {
      const _input = cleanObject(
        this.decorators.beforeGetConnection
          ? await this.decorators.beforeGetConnection({ input })
          : input,
      );
      if (_input.root) {
        const result = await getConnection({
          count: await this.count(_input),
          filter: _input.filter,
          getMany: this.getMany.bind(this),
          pagination: _input.pagination,
        });
        const output: OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot> = {
          result,
          root: _input.root,
        };
        return this.decorators.afterGetConnection
          ? await this.decorators.afterGetConnection({ output })
          : output;
      }
      throw new NotFoundError(`${name} root`);
    }

    async update(
      input: InputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>> {
      const _input = cleanObject(
        this.decorators.beforeUpdate ? await this.decorators.beforeUpdate({ input }) : input,
      );
      if (_input.root) {
        const { result: rootResult } = await this._rootService.update({
          filter: {
            ..._input.root,
            ...flattenObject({ value: { [name]: _input.filter } }),
          } as FilterModel<TRoot>,
          options: {
            project: { [name]: { $elemMatch: _input.filter } } as unknown as ProjectModel<TRoot>,
          },
          update: reduce(
            _input.update as object,
            (result, v, k) => ({
              ...result,
              ...(k.startsWith('$')
                ? { [k]: flattenObject({ value: { [`${name}.$`]: v } }) }
                : flattenObject({ value: { [`${name}.$`]: { [k]: v } } })),
            }),
            {},
          ),
        });
        const result = rootResult && (rootResult[name] as unknown as Array<TType>);
        const output: OutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot> = {
          result: result?.length ? result[0] : undefined,
          root: rootResult,
        };
        return this.decorators.afterUpdate ? await this.decorators.afterUpdate({ output }) : output;
      }
      throw new NotFoundError(`${name} root`);
    }

    async remove(
      input: InputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>> {
      const _input = cleanObject(
        this.decorators.beforeRemove ? await this.decorators.beforeRemove({ input }) : input,
      );
      if (_input.root) {
        const { result: rootResult } = await this._rootService.update({
          filter: _input.root,
          update: { $pull: { [name]: _input.filter } } as UpdateModel<TRoot>,
        });
        const output: OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot> = {
          root: rootResult,
        };
        return this.decorators.afterRemove ? await this.decorators.afterRemove({ output }) : output;
      }
      throw new NotFoundError(`${name} root`);
    }

    async count(input: WithRootModel<TRoot>): Promise<number> {
      if (input.root) {
        const { result: rootResult } = await this._rootService.get({ filter: input.root });
        return (rootResult && (rootResult[name] as unknown as Array<TType>).length) || 0;
      }
      throw new NotFoundError(`${name} root`);
    }
  }

  return _EmbeddedResourceService;
};
