import { createFilter } from '#lib-backend/resource/utils/createFilter/createFilter';
import {
  type CreateRootModel,
  type CreateRootParamsModel,
} from '#lib-backend/resource/utils/createRoot/createRoot.models';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { PROPERTY_TYPE } from '#lib-shared/data/data.constants';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';
import { type RootModel } from '#lib-shared/resource/utils/Root/Root.models';

export const createRoot = <TRoot = undefined>({
  RootResource,
  name,
}: CreateRootParamsModel<TRoot>): CreateRootModel<TRoot> => {
  if (RootResource) {
    const RootFilter = createFilter({ Resource: RootResource, name: `${name}Root` });
    @withEntity({ isAbstract: true })
    class Root implements RootModel<TRoot> {
      @withField({ Resource: () => RootFilter, isArray: true, type: PROPERTY_TYPE.RESOURCE })
      root?: Array<FilterModel<TRoot>>;
    }
    return Root;
  }
  return undefined;
};
