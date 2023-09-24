import { Loading } from '#lib-frontend/core/components/Loading/Loading';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { DataBoundary } from '#lib-frontend/data/components/DataBoundary/DataBoundary';
import { ItemStepForm } from '#lib-frontend/data/components/ItemStepForm/ItemStepForm';
import {
  type AgencyFormModel,
  type AgencyFormPropsModel,
} from '#lib-frontend/funding/containers/AgencyForm/AgencyForm.models';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { useRatingAgencyResource } from '#lib-frontend/funding/hooks/useRatingAgencyResource/useRatingAgencyResource';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type CreditRatingFormModel } from '#lib-shared/funding/resources/CreditRating/CreditRating.models';

export const AgencyForm: LFCModel<AgencyFormPropsModel> = ({
  initialValues,
  onComplete,
  onError,
  onSubmit,
  onSuccess,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([FUNDING]);
  const { getMany } = useRatingAgencyResource();
  return (
    <DataBoundary
      fallback={<Loading />}
      id="agencies"
      query={async () => getMany({ filter: [] })}>
      {({ data }) => (
        <ItemStepForm<CreditRatingFormModel, AgencyFormModel>
          {...wrapperProps}
          // id="_agency"
          id="agency"
          initialValues={initialValues}
          message={t('funding:agencyFormMessage')}
          onComplete={onComplete}
          onError={onError}
          onSubmit={onSubmit}
          onSuccess={onSuccess}
          options={data?.result?.map(({ _id, name }) => ({ id: _id, label: name })) ?? []}
        />
      )}
    </DataBoundary>
  );
};
