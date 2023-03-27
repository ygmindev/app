import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import type { OutputParamsModel } from '@lib/backend/resource/utils/Output/Output.models';
import { Result } from '@lib/backend/resource/utils/Result/Result';
import { Root } from '@lib/backend/resource/utils/Root/Root';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import type { ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import type { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import type { ResultModel } from '@lib/shared/resource/utils/Result/Result.models';

export const Output = <TMethod extends ResourceMethodTypeModel, TType, TRoot = undefined>({
  Resource,
  RootResource,
  method,
  name,
}: OutputParamsModel<TMethod, TType, TRoot>): ConstructorModel<
  OutputModel<TMethod, TType, TRoot>
> => {
  const _name = `${name}Output`;
  const _Root = Root({ RootResource, name: _name });

  @withEntity({ name: _name })
  class _Output extends _Root implements OutputModel<TMethod, TType, TRoot> {
    @withField({ Resource: Result({ Resource, method, name: _name }) || Boolean })
    result?: ResultModel<TMethod, TType>;
  }
  return _Output;
};
