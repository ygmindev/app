import { type LFCModel } from '#lib-frontend/core/core.models';
import { type RatingAgencyTablePropsModel } from '#lib-frontend/funding/containers/RatingAgencyTable/RatingAgencyTable.models';
import { useRatingAgencyResource } from '#lib-frontend/funding/hooks/useRatingAgencyResource/useRatingAgencyResource';
import { RATING_AGENCY_RESOURCE_PARAMS } from '#lib-frontend/funding/resources/RatingAgency/RatingAgency.constants';
import { ResourceTable } from '#lib-frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type RatingAgencyFormModel,
  type RatingAgencyModel,
} from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';

export const RatingAgencyTable: LFCModel<RatingAgencyTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const service = useRatingAgencyResource();
  return (
    <ResourceTable<RatingAgencyModel, RatingAgencyFormModel>
      {...wrapperProps}
      {...RATING_AGENCY_RESOURCE_PARAMS}
      service={service}
    />
  );
};
