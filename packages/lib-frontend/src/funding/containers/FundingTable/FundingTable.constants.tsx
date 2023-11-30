import { NUMBER_UNIT_TYPE } from '#lib-frontend/data/data.constants';
import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import { DATA_TYPE_MORE } from '#lib-shared/data/data.constants';
import { FUNDING_RESOURCE_NAME } from '#lib-shared/funding/resources/Funding/Funding.constants';
import {
  type FundingFormModel,
  type FundingModel,
} from '#lib-shared/funding/resources/Funding/Funding.models';

export const FUNDING_TABLE_PROPS = {
  columns: [
    { id: 'amount', type: NUMBER_UNIT_TYPE.AMOUNT },
    { id: 'maturityDays', type: NUMBER_UNIT_TYPE.RELATIVE_DATE },
    {
      id: 'currency',
      // TODO: from locale
      options: [
        { id: 'USD', label: 'USD' },
        { id: 'EUR', label: 'EUR' },
      ],
      type: DATA_TYPE_MORE.STRING_LIST,
    },
  ],
  name: FUNDING_RESOURCE_NAME,
} satisfies Omit<ResourceTablePropsModel<FundingModel, FundingFormModel>, 'service'>;
