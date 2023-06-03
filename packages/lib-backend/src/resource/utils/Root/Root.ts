import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import type { RootParamsModel } from '@lib/backend/resource/utils/Root/Root.models';
import type { ConstructorModel, PartialModel } from '@lib/shared/core/core.models';
import type { RootModel } from '@lib/shared/resource/utils/Root/Root.models';
import isFunction from 'lodash/isFunction';

export const Root = <TRoot = undefined>({
  RootResource,
  name,
}: RootParamsModel<TRoot>): ConstructorModel<RootModel<TRoot>> => {
  if (RootResource) {
    const nameF = `${name}Root`;
    const isResource = RootResource && isFunction(RootResource);

    @withEntity({ name: nameF })
    class _Resource extends (isResource
      ? (RootResource as unknown as ConstructorModel)
      : EntityResource) {}

    @withEntity({ isAbstract: true })
    class _Root implements RootModel<TRoot> {
      @withField({ Resource: _Resource })
      root?: PartialModel<TRoot>;
    }

    return _Root;
  }
  return class {};
};
