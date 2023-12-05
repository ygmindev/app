import { type LFCModel } from '#lib-frontend/core/core.models';
import { type FundingTablePropsModel } from '#lib-frontend/funding/containers/FundingTable/FundingTable.models';
import { useFundingResource } from '#lib-frontend/funding/hooks/useFundingResource/useFundingResource';
import { FUNDING_RESOURCE_PARAMS } from '#lib-frontend/funding/resources/Funding/Funding.constants';
import { ResourceTable } from '#lib-frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type FundingFormModel,
  type FundingModel,
} from '#lib-shared/funding/resources/Funding/Funding.models';

export const FundingTable: LFCModel<FundingTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const service = useFundingResource();
  return (
    <ResourceTable<FundingModel, FundingFormModel>
      {...wrapperProps}
      {...FUNDING_RESOURCE_PARAMS}
      service={service}
    />
  );
};
