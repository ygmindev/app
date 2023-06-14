import { withEntity } from '#lib-backend/resource/decorators/withEntity/withEntity';
import { withField } from '#lib-backend/resource/decorators/withField/withField';
import type { OutputParamsModel } from '#lib-backend/resource/utils/Output/Output.models';
import { Result } from '#lib-backend/resource/utils/Result/Result';
import { Root } from '#lib-backend/resource/utils/Root/Root';
import type { ConstructorModel } from '#lib-shared/core/core.models';
import type { ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import type { OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import type { ResultModel } from '#lib-shared/resource/utils/Result/Result.models';

export const Output = <TMethod extends ResourceMethodTypeModel, TType, TRoot = undefined>({
  Resource,
  RootResource,
  method,
  name,
}: OutputParamsModel<TMethod, TType, TRoot>): ConstructorModel<
  OutputModel<TMethod, TType, TRoot>
> => {
  const nameF = `${name}Output`;
  const RootF = Root({ RootResource, name: nameF });

  @withEntity({ name: nameF })
  class _Output extends RootF implements OutputModel<TMethod, TType, TRoot> {
    @withField({ Resource: Result({ Resource, method, name: nameF }) || Boolean })
    result?: ResultModel<TMethod, TType>;
  }
  return _Output;
};
