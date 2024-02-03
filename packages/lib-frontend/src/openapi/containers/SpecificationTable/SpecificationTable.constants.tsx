import { NUMBER_UNIT_TYPE } from '@lib/frontend/data/data.constants';
import { type ResourceTablePropsModel } from '@lib/frontend/resource/components/ResourceTable/ResourceTable.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { SPECIFICATION_RESOURCE_NAME } from '@lib/shared/openapi/resources/Specification/Specification.constants';
import {
  type SpecificationFormModel,
  type SpecificationModel,
} from '@lib/shared/openapi/resources/Specification/Specification.models';

export const SPECIFICATION_TABLE_PROPS = {
  columns: [
    { id: 'name', type: DATA_TYPE.STRING },
  ],
  name: SPECIFICATION_RESOURCE_NAME,
} satisfies Omit<ResourceTablePropsModel<SpecificationModel, SpecificationFormModel>, 'implementation'>;
