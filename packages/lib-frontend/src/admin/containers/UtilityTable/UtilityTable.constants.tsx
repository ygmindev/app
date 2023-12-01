import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import { UTILITY_RESOURCE_NAME } from '#lib-shared/admin/resources/Utility/Utility.constants';
import {
  type UtilityFormModel,
  type UtilityModel,
} from '#lib-shared/admin/resources/Utility/Utility.models';
import { DATA_TYPE } from '#lib-shared/data/data.constants';

export const UTILITY_TABLE_PROPS = {
  columns: [
    { id: 'name', type: DATA_TYPE.STRING },
    { id: 'description', type: DATA_TYPE.STRING },
    { id: 'type', type: DATA_TYPE.STRING },
    { id: 'usage', type: DATA_TYPE.STRING },
  ],
  name: UTILITY_RESOURCE_NAME,
} satisfies Omit<ResourceTablePropsModel<UtilityModel, UtilityFormModel>, 'service'>;
