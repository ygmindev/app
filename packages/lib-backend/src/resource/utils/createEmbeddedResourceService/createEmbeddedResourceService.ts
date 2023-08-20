import forEach from 'lodash/forEach';
import reduce from 'lodash/reduce';

import { Container } from '#lib-backend/core/utils/Container/Container';
import { getConnection } from '#lib-backend/database/utils/getConnection/getConnection';
import {
  type CreateEmbeddedResourceServiceModel,
  type CreateEmbeddedResourceServiceParamsModel,
} from '#lib-backend/resource/utils/createEmbeddedResourceService/createEmbeddedResourceService.models';
import { type DeepKeyModel, type PartialModel } from '#lib-shared/core/core.models';
import { InvalidArgumentError } from '#lib-shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { flattenObject } from '#lib-shared/core/utils/flattenObject/flattenObject';
import { isEmpty } from '#lib-shared/core/utils/isEmpty/isEmpty';
import { pick } from '#lib-shared/core/utils/pick/pick';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type EmbeddedResourceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type EmbeddedResourceServiceModel } from '#lib-shared/resource/services/EmbeddedResourceService/EmbeddedResourceService.models';
import { type ResourceServiceDecoratorModel } from '#lib-shared/resource/services/ResourceService/ResourceService.models';
import { type ProjectModel } from '#lib-shared/resource/utils/Args/Args.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import { type RootModel } from '#lib-shared/resource/utils/Root/Root.models';
import { type UpdateModel } from '#lib-shared/resource/utils/Update/Update.models';

export const createEmbeddedResourceService = <
  TType extends EmbeddedResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
  TRootorm,
>({
  Resource,
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
  root,
}: CreateEmbeddedResourceServiceParamsModel<
  TType,
  TForm,
  TRoot,
  TRootorm
>): CreateEmbeddedResourceServiceModel<TType, TForm, TRoot> => {
  const beforeCreateF = async (
    input: InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>,
  ): Promise<InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>> => {
    const value = new Resource();
    forEach(input.form as unknown as object, (v, k) => ((value as Record<string, unknown>)[k] = v));
    value.beforeCreate && (await value.beforeCreate());
    return { ...input, form: value as unknown as TForm };
  };

  const getAggregation = (
    input: InputModel<RESOURCE_METHOD_TYPE.GET, TType, TForm, TRoot>,
  ): Array<object> => {
    const nameF = `$${name}`;
    return filterNil([
      { $unwind: nameF },
      { $match: flattenObject({ [name]: input.filter }) },
      input.options?.project && { $project: flattenObject({ [name]: input.options.project }) },
      { $group: { _id: '$_id', [name]: { $push: nameF } } },
    ]);
  };

  class EmbeddedResourceService implements EmbeddedResourceServiceModel<TType, TForm, TRoot> {
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
      root,
    };

    public get decorators(): ResourceServiceDecoratorModel<TType, TForm, TRoot> {
      return this._decorators;
    }

    public set decorators(value: ResourceServiceDecoratorModel<TType, TForm, TRoot>) {
      this._decorators = value;
    }

    async create(
      input: InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, TRoot>,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>> {
      const inputF = cleanObject(
        this.decorators.beforeCreate ? await this.decorators.beforeCreate({ input }) : input,
      );
      inputF.root = inputF.root ?? this._decorators.root;
      if (inputF.root) {
        const inputFF = await beforeCreateF(inputF);
        const value = inputFF.form;
        const { result: rootResult } = await this._rootService.update({
          filter: inputFF.root as PartialModel<TRoot>,
          update: { $push: { [name]: value } } as UpdateModel<TRoot>,
        });
        const output: OutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot> = {
          // TODO: make it better?
          result: value as unknown as TType,
          root: rootResult,
        };
        return this.decorators.afterCreate ? this.decorators.afterCreate({ output }) : output;
      }
      throw new InvalidArgumentError(`${name} root`);
    }

    async get(
      input: InputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot>> {
      const inputF = cleanObject(
        this.decorators.beforeGet ? await this.decorators.beforeGet({ input }) : input,
      );
      inputF.root = inputF.root ?? this._decorators.root;
      if (inputF.root) {
        const { result: rootResult } = await this._rootService.get({
          filter: inputF.root,
          options: { aggregate: getAggregation(inputF) },
        });
        const result = rootResult && (rootResult[name] as unknown as Array<TType>);
        const output: OutputModel<RESOURCE_METHOD_TYPE.GET, TType, TRoot> = {
          result: result && result[0],
          root: rootResult,
        };
        return this.decorators.afterGet ? this.decorators.afterGet({ output }) : output;
      }
      throw new InvalidArgumentError();
    }

    async getMany(
      input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>> {
      const inputF = cleanObject(
        this.decorators.beforeGetMany ? await this.decorators.beforeGetMany({ input }) : input,
      );
      inputF.root = inputF.root ?? this._decorators.root;
      if (inputF.root) {
        // TODO: || to ?? for all
        const skip = inputF.options?.skip ?? 0;
        const limit = inputF.options?.take;
        const { result: rootResult } = await this._rootService.get({
          filter: inputF.root,
          options: isEmpty(inputF.filter) ? {} : { aggregate: getAggregation(inputF) },
        });
        const result = rootResult && (rootResult[name] as unknown as Array<TType>);
        const output: OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot> = {
          result:
            (skip || limit) && result?.length
              ? result.slice(skip, limit ? skip + (limit || 0) : undefined)
              : result,
          root: rootResult,
        };
        return this.decorators.afterGetMany ? this.decorators.afterGetMany({ output }) : output;
      }

      throw new InvalidArgumentError();
    }

    async getConnection(
      input: InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>> {
      const inputF = cleanObject(
        this.decorators.beforeGetConnection
          ? await this.decorators.beforeGetConnection({ input })
          : input,
      );
      inputF.root = inputF.root ?? this._decorators.root;
      if (inputF.root) {
        const result = await getConnection({
          count: await this.count(inputF),
          getMany: this.getMany.bind(this),
          input: inputF,
          pagination: inputF.pagination,
        });
        const output: OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot> = {
          result,
          root: inputF.root,
        };
        return this.decorators.afterGetConnection
          ? this.decorators.afterGetConnection({ output })
          : output;
      }
      throw new InvalidArgumentError();
    }

    async update(
      input: InputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot>> {
      const inputF = cleanObject(
        this.decorators.beforeUpdate ? await this.decorators.beforeUpdate({ input }) : input,
      );
      inputF.root = inputF.root ?? this._decorators.root;
      if (inputF.root) {
        const { result: rootResult } = await this._rootService.update({
          filter: {
            ...inputF.root,
            ...flattenObject({ [name]: inputF.filter }),
          } as FilterModel<TRoot>,
          options: {
            project: { [name]: { $elemMatch: inputF.filter } } as unknown as ProjectModel<TRoot>,
          },
          update: reduce(
            inputF.update as object,
            (result, v, k) => ({
              ...result,
              ...(k.startsWith('$')
                ? { [k]: flattenObject({ [`${name}.$`]: v }) }
                : flattenObject({ [`${name}.$`]: { [k]: v } })),
            }),
            {},
          ),
        });
        const result = rootResult && (rootResult[name] as unknown as Array<TType>);
        let resultF = result?.length ? result[0] : undefined;
        if (resultF && inputF.options?.project) {
          resultF = pick(
            resultF,
            Object.keys(inputF.options.project) as Array<DeepKeyModel<typeof resultF>>,
          ) as TType;
        }
        const output: OutputModel<RESOURCE_METHOD_TYPE.UPDATE, TType, TRoot> = {
          result: resultF,
          root: rootResult,
        };
        return this.decorators.afterUpdate ? this.decorators.afterUpdate({ output }) : output;
      }
      throw new InvalidArgumentError();
    }

    async remove(
      input: InputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot>> {
      const inputF = cleanObject(
        this.decorators.beforeRemove ? await this.decorators.beforeRemove({ input }) : input,
      );
      inputF.root = inputF.root ?? this._decorators.root;
      if (inputF.root) {
        const { result: rootResult } = await this._rootService.update({
          filter: inputF.root,
          update: { $pull: { [name]: inputF.filter } } as UpdateModel<TRoot>,
        });
        const output: OutputModel<RESOURCE_METHOD_TYPE.REMOVE, TType, TRoot> = {
          root: rootResult,
        };
        return this.decorators.afterRemove ? this.decorators.afterRemove({ output }) : output;
      }
      throw new InvalidArgumentError();
    }

    async count(input: RootModel<TRoot>): Promise<number> {
      input.root = input.root ?? this._decorators.root;
      if (input.root) {
        const { result: rootResult } = await this._rootService.get({ filter: input.root });
        const result = rootResult && (rootResult[name] as unknown as Array<TType>);
        return result?.length || 0;
      }
      throw new InvalidArgumentError();
    }
  }

  return EmbeddedResourceService as CreateEmbeddedResourceServiceModel<TType, TForm, TRoot>;
};
