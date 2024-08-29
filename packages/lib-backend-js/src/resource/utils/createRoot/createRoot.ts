import {
  type CreateRootModel,
  type CreateRootParamsModel,
} from '@lib/backend/resource/utils/createRoot/createRoot.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type PartialModel } from '@lib/shared/core/core.models';
import { PROPERTY_TYPE } from '@lib/shared/data/data.constants';
import { type RootModel } from '@lib/shared/resource/utils/Root/Root.models';

export const createRoot = <TRoot = undefined>({
  RootResource,
  name,
}: CreateRootParamsModel<TRoot>): CreateRootModel<TRoot> => {
  if (RootResource) {
    @withEntity({ name: `${name}Root` })
    class Root implements RootModel<TRoot> {
      @withField({ Resource: RootResource, type: PROPERTY_TYPE.RESOURCE })
      root?: PartialModel<TRoot>;
    }
    return Root;
  }
  return undefined;
};
