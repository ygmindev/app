import isFunction from 'lodash/isFunction';

import { withEntity } from '#lib-backend/resource/decorators/withEntity/withEntity';
import { withField } from '#lib-backend/resource/decorators/withField/withField';
import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { type RootParamsModel } from '#lib-backend/resource/utils/Root/Root.models';
import { type ClassModel, type PartialModel } from '#lib-shared/core/core.models';
import { type RootModel } from '#lib-shared/resource/utils/Root/Root.models';

export const Root = <TRoot = undefined>({
  RootResource,
  name,
}: RootParamsModel<TRoot>): ClassModel<RootModel<TRoot>> => {
  if (RootResource) {
    const nameF = `${name}Root`;
    const isResource = RootResource && isFunction(RootResource);
    const Base = isResource ? (RootResource as unknown as ClassModel) : EntityResource;

    @withEntity({ base: Base, name: nameF })
    class ResourceF extends Base {}

    @withEntity({ isAbstract: true })
    class RootF implements RootModel<TRoot> {
      @withField({ Resource: ResourceF })
      root?: PartialModel<TRoot>;
    }

    return RootF;
  }
  return class {};
};
