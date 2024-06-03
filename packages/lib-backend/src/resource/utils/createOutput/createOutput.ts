import { GetConnectionModel } from '@lib/backend/database/utils/getConnection/getConnection.models';
import { ResourceClassModel } from '@lib/backend/resource/resource.models';
import { createConnection } from '@lib/backend/resource/utils/createConnection/createConnection';
import {
  type CreateOutputModel,
  type CreateOutputParamsModel,
} from '@lib/backend/resource/utils/createOutput/createOutput.models';
import { createRoot } from '@lib/backend/resource/utils/createRoot/createRoot';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { PROPERTY_TYPE } from '@lib/shared/data/data.constants';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { type ResultModel } from '@lib/shared/resource/utils/Result/Result.models';

export const createOutput = <TMethod extends ResourceMethodTypeModel, TType, TRoot = undefined>({
  Resource,
  RootResource,
  method,
  name,
}: CreateOutputParamsModel<TMethod, TType, TRoot>): CreateOutputModel<TMethod, TType, TRoot> => {
  const nameF = `${name}Output`;
  const Root = createRoot({ RootResource, name: nameF });
  const Result =
    (method === RESOURCE_METHOD_TYPE.GET_CONNECTION
      ? createConnection({ Resource, name })
      : Resource()) ?? Boolean;

  @withEntity({ name: nameF })
  class Output extends (Root ?? class {}) implements OutputModel<TMethod, TType, TRoot> {
    @withField<
      TMethod extends RESOURCE_METHOD_TYPE.GET_CONNECTION ? GetConnectionModel<TType> : TType
    >({
      Resource: () =>
        Result as ResourceClassModel<
          TMethod extends RESOURCE_METHOD_TYPE.GET_CONNECTION ? GetConnectionModel<TType> : TType
        >,
      isArray: method === RESOURCE_METHOD_TYPE.GET_MANY,
      type: PROPERTY_TYPE.RESOURCE,
    })
    result?: ResultModel<TMethod, TType>;
  }

  return Output as CreateOutputModel<TMethod, TType, TRoot>;
};
