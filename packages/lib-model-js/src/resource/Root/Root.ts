import { ResourceClassModel } from '@lib/backend/resource/resource.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type RootModel, RootParamsModel } from '@lib/model/resource/Root/Root.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export const Root = <TRoot = undefined>({
  RootResource,
  name,
}: RootParamsModel<TRoot>): ResourceClassModel<RootModel<TRoot>> | undefined => {
  if (RootResource) {
    @withEntity({ name: `${name}Root` })
    class RootF implements RootModel<TRoot> {
      @withField({ Resource: RootResource, isOptional: true })
      root?: PartialModel<TRoot>;
    }
    return RootF;
  }
  return undefined;
};
