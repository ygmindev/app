import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import type { RootParamsModel } from '@lib/backend/resource/utils/Root/Root.models';
import type { ConstructorModel, PartialModel } from '@lib/shared/core/core.models';
import type { RootModel } from '@lib/shared/resource/utils/Root/Root.models';

export const Root = <TRoot = undefined>({
  RootResource,
  name,
}: RootParamsModel<TRoot>): ConstructorModel<RootModel<TRoot>> => {
  if (RootResource) {
    const _name = `${name}Root`;

    @withEntity({ name: _name })
    class _Resource extends (RootResource as unknown as ConstructorModel) {}

    @withEntity({ isAbstract: true })
    class _Root implements RootModel<TRoot> {
      @withField({ Resource: _Resource })
      root?: PartialModel<TRoot>;
    }

    return _Root;
  }
  return class {};
};
