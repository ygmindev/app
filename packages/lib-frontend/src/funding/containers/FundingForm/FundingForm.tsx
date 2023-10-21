import { IN_PROGRESS } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { StepForm } from '#lib-frontend/data/components/StepForm/StepForm';
import { CreditRatingForm } from '#lib-frontend/funding/containers/CreditRatingForm/CreditRatingForm';
import { FundingAmountForm } from '#lib-frontend/funding/containers/FundingAmountForm/FundingAmountForm';
import { FundingCurrencyForm } from '#lib-frontend/funding/containers/FundingCurrencyForm/FundingCurrencyForm';
import { FUNDING_FORM_INITIAL_VALUES } from '#lib-frontend/funding/containers/FundingForm/FundingForm.constants';
import { type FundingFormPropsModel } from '#lib-frontend/funding/containers/FundingForm/FundingForm.models';
import { FundingMaturityForm } from '#lib-frontend/funding/containers/FundingMaturityForm/FundingMaturityForm';
import { FUNDING } from '#lib-frontend/funding/funding.constants';
import { useFundingResource } from '#lib-frontend/funding/hooks/useFundingResource/useFundingResource';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useCurrentUser } from '#lib-frontend/user/hooks/useCurrentUser/useCurrentUser';
import { GROUP_TYPE } from '#lib-shared/group/resources/Group/Group.constants';

export const FundingForm: LFCModel<FundingFormPropsModel> = ({ ...props }) => {
  const { t } = useTranslation();
  const { create } = useFundingResource();
  const { replace } = useRouter();
  const currentUser = useCurrentUser();
  return (
    <StepForm
      {...props}
      initialValues={FUNDING_FORM_INITIAL_VALUES}
      onSubmit={async (form) => currentUser && create({ form })}
      onSuccess={async () =>
        replace({ pathname: `${GROUP_TYPE.ISSUER}/${FUNDING}/${IN_PROGRESS}` })
      }
      steps={[
        {
          element: <FundingCurrencyForm />,
          id: 'currency',
          title: t('funding:currency'),
        },
        {
          element: <FundingAmountForm />,
          id: 'amount',
          title: t('funding:amount'),
        },
        {
          element: <FundingMaturityForm />,
          id: 'maturity',
          title: t('funding:maturity'),
        },
        {
          element: <CreditRatingForm />,
          id: 'CrditRating',
          title: t('funding:creditRating'),
        },
      ]}
    />
  );
};
