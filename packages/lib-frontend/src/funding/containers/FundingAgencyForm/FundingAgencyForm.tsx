import { type LFCModel } from '#lib-frontend/core/core.models';
import { ItemStepForm } from '#lib-frontend/data/components/ItemStepForm/ItemStepForm';
import { type FundingAgencyFormPropsModel } from '#lib-frontend/funding/containers/FundingAgencyForm/FundingAgencyForm.models';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { useRatingAgencyResource } from '#lib-frontend/funding/hooks/useRatingAgencyResource/useRatingAgencyResource';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const FundingAgencyForm: LFCModel<FundingAgencyFormPropsModel> = ({
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
    <ItemStepForm
      {...wrapperProps}
      emptyLabel={t('funding:notRated')}
      id="_agency"
      initialValues={initialValues}
      message={t('funding:agencyFormMessage')}
      onComplete={onComplete}
      onError={onError}
      onSubmit={async (values) => {
        values._agency && onSubmit && (await onSubmit({ RatingAgency: { _id: values._agency } }));
      }}
      onSuccess={onSuccess}
      options={async () =>
        (await getMany({ filter: [] }))?.result?.map(({ _id, logo, name }) => ({
          id: _id ?? '',
          image: logo,
          label: name,
        })) ?? []
      }
    />
  );
};
