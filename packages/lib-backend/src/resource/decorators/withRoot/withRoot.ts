import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import type { WithRootParamsModel } from '@lib/backend/resource/decorators/withRoot/withRoot.models';
import type { ConstructorModel, PartialModel } from '@lib/shared/core/core.models';
import type { WithRootModel } from '@lib/shared/resource/decorators/withRoot/withRoot.models';

export const withRoot =
  <TRoot = undefined>({ Root, name }: WithRootParamsModel<TRoot>) =>
  <TBase extends ConstructorModel>(Base: TBase): TBase & ConstructorModel<WithRootModel<TRoot>> => {
    if (Root) {
      const _name = `${name}Root`;

      @withEntity({ name: _name })
      class _Root extends (Root as unknown as ConstructorModel) {}

      @withEntity({ isAbstract: true })
      class _WithRoot extends Base implements WithRootModel<TRoot> {
        @withField({ Resource: _Root })
        root?: PartialModel<TRoot>;
      }

      return _WithRoot;
    }
    return Base;
  };
