import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type PaginatableModel } from '@lib/model/resource/Paginatable/Paginatable.models';
import { type RootModel, type RootParamsModel } from '@lib/model/resource/Root/Root.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export type ResourceOutputParamsModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = RootParamsModel<TRoot> & {
  method: TMethod;
  name: string;
  Resource(): ResourceClassModel<TType>;
};

export type ResourceOutputModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = RootModel<TRoot> & {
  result?: ResultModel<TMethod, TType>;
};

export type ResultModel<TMethod extends RESOURCE_METHOD_TYPE, TType> = TMethod extends
  | RESOURCE_METHOD_TYPE.REMOVE
  | RESOURCE_METHOD_TYPE.UPDATE_MANY
  ? boolean
  : TMethod extends
        | RESOURCE_METHOD_TYPE.CREATE
        | RESOURCE_METHOD_TYPE.GET
        | RESOURCE_METHOD_TYPE.SUBSCRIBE
        | RESOURCE_METHOD_TYPE.UPDATE
    ? Partial<TType>
    : TMethod extends RESOURCE_METHOD_TYPE.GET_MANY | RESOURCE_METHOD_TYPE.SEARCH
      ? PaginatableModel<TType>
      : TMethod extends RESOURCE_METHOD_TYPE.CREATE_MANY
        ? PartialArrayModel<TType>
        : TType;
