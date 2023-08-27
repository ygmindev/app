import {
  type CreateOutputModel,
  type CreateOutputParamsModel,
} from '#lib-backend/resource/utils/createOutput/createOutput.models';
import { createResult } from '#lib-backend/resource/utils/createResult/createResult';
import { createRoot } from '#lib-backend/resource/utils/createRoot/createRoot';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { PROPERTY_TYPE } from '#lib-shared/data/data.constants';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import { type ResultModel } from '#lib-shared/resource/utils/Result/Result.models';

export const createOutput = <TMethod extends ResourceMethodTypeModel, TType, TRoot = undefined>({
  Resource,
  RootResource,
  method,
  name,
}: CreateOutputParamsModel<TMethod, TType, TRoot>): CreateOutputModel<TMethod, TType, TRoot> => {
  const nameF = `${name}Output`;
  const Root = createRoot({ RootResource, name: nameF });
  @withEntity({ name: nameF })
  class Output extends (Root ?? class {}) implements OutputModel<TMethod, TType, TRoot> {
    @withField({
      Resource: createResult({ Resource, method, name: nameF }) ?? Boolean,
      type: PROPERTY_TYPE.RESOURCE,
    })
    result?: ResultModel<TMethod, TType>;
  }
  return Output;
};
