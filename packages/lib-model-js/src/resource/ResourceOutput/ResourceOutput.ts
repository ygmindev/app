import { ResourceClassModel } from '@lib/backend/resource/resource.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { Paginatable } from '@lib/model/resource/Paginatable/Paginatable';
import { PaginatableModel } from '@lib/model/resource/Paginatable/Paginatable.models';
import {
  type ResourceOutputModel,
  ResourceOutputParamsModel,
  ResultModel,
} from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { Root } from '@lib/model/resource/Root/Root';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export const ResourceOutput = <TMethod extends RESOURCE_METHOD_TYPE, TType, TRoot = undefined>({
  Resource,
  RootResource,
  method,
  name,
}: ResourceOutputParamsModel<TMethod, TType, TRoot>): ResourceClassModel<
  ResourceOutputModel<TMethod, TType, TRoot>
> => {
  const nameF = `${name}Output`;
  const isPaginatable =
    method === RESOURCE_METHOD_TYPE.GET_MANY || method === RESOURCE_METHOD_TYPE.SEARCH;
  const RootF = Root({ RootResource, name: nameF });
  const Result = (isPaginatable ? Paginatable({ Resource, name }) : Resource()) ?? Boolean;

  @withEntity({ name: nameF })
  class Output extends (RootF ?? class {}) implements ResourceOutputModel<TMethod, TType, TRoot> {
    @withField<
      TMethod extends RESOURCE_METHOD_TYPE.GET_MANY | RESOURCE_METHOD_TYPE.SEARCH
        ? PaginatableModel<TType>
        : TType
    >({
      Resource: () =>
        Result as ResourceClassModel<
          TMethod extends RESOURCE_METHOD_TYPE.GET_MANY | RESOURCE_METHOD_TYPE.SEARCH
            ? PaginatableModel<TType>
            : TType
        >,
      isArray:
        method === RESOURCE_METHOD_TYPE.CREATE_MANY || method === RESOURCE_METHOD_TYPE.UPDATE_MANY,
    })
    result?: ResultModel<TMethod, TType>;
  }

  return Output;
};
