import { GetConnectionModel } from '@lib/backend/database/utils/getConnection/getConnection.models';
import { ResourceClassModel } from '@lib/backend/resource/resource.models';
import { createConnection } from '@lib/backend/resource/utils/createConnection/createConnection';
import {
  type CreateResourceOutputParamsModel,
  type CreateResourceResourceOutputModel,
} from '@lib/backend/resource/utils/createResourceOutput/createResourceOutput.models';
import { createRoot } from '@lib/backend/resource/utils/createRoot/createRoot';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';
import { type ResultModel } from '@lib/shared/resource/utils/Result/Result.models';

export const createResourceOutput = <
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
>({
  Resource,
  RootResource,
  isArray,
  method,
  name,
}: CreateResourceOutputParamsModel<TMethod, TType, TRoot>): CreateResourceResourceOutputModel<
  TMethod,
  TType,
  TRoot
> => {
  const nameF = `${name}Output`;
  const Root = createRoot({ RootResource, name: nameF });
  const Result =
    (method === RESOURCE_METHOD_TYPE.GET_CONNECTION
      ? createConnection({ Resource, name })
      : Resource()) ?? Boolean;

  const isArrayF =
    isArray ||
    (method && [RESOURCE_METHOD_TYPE.GET_MANY, RESOURCE_METHOD_TYPE.SEARCH].includes(method));

  @withEntity({ name: nameF })
  class Output extends (Root ?? class {}) implements ResourceOutputModel<TMethod, TType, TRoot> {
    @withField<
      TMethod extends RESOURCE_METHOD_TYPE.GET_CONNECTION ? GetConnectionModel<TType> : TType
    >({
      Resource: () =>
        Result as ResourceClassModel<
          TMethod extends RESOURCE_METHOD_TYPE.GET_CONNECTION ? GetConnectionModel<TType> : TType
        >,
      isArray: isArrayF,
    })
    result?: ResultModel<TMethod, TType>;
  }

  return Output as CreateResourceResourceOutputModel<TMethod, TType, TRoot>;
};
