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
import { useCurrentGroup } from '#lib-frontend/group/hooks/useCurrentGroup/useCurrentGroup';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { GROUP_RESOURCE_NAME } from '#lib-shared/group/resources/Group/Group.constants';

export const FundingForm: LFCModel<FundingFormPropsModel> = ({ ...props }) => {
  const { t } = useTranslation([FUNDING]);
  const { create } = useFundingResource();
  const { replace } = useRouter();
  const currentGroup = useCurrentGroup();
  return (
    <StepForm
      {...props}
      initialValues={FUNDING_FORM_INITIAL_VALUES}
      onSubmit={async (form) => {
        console.warn(currentGroup?._id);
        console.warn(form);
        currentGroup?._id &&
          (await create({ form: { ...form, [GROUP_RESOURCE_NAME]: { _id: currentGroup._id } } }));
      }}
      onSuccess={async () => console.warn('success')}
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

// import { IN_PROGRESS } from '#lib-frontend/core/core.constants';
// import { type LFCModel } from '#lib-frontend/core/core.models';
// import { StepForm } from '#lib-frontend/data/components/StepForm/StepForm';
// import { CreditRatingForm } from '#lib-frontend/funding/containers/CreditRatingForm/CreditRatingForm';
// import { FundingAmountForm } from '#lib-frontend/funding/containers/FundingAmountForm/FundingAmountForm';
// import { FundingCurrencyForm } from '#lib-frontend/funding/containers/FundingCurrencyForm/FundingCurrencyForm';
// import { FUNDING_FORM_INITIAL_VALUES } from '#lib-frontend/funding/containers/FundingForm/FundingForm.constants';
// import { type FundingFormPropsModel } from '#lib-frontend/funding/containers/FundingForm/FundingForm.models';
// import { FundingMaturityForm } from '#lib-frontend/funding/containers/FundingMaturityForm/FundingMaturityForm';
// import { FUNDING } from '#lib-frontend/funding/funding.constants';
// import { useFundingResource } from '#lib-frontend/funding/hooks/useFundingResource/useFundingResource';
// import { GROUP } from '#lib-frontend/group/group.constants';
// import { useCurrentGroup } from '#lib-frontend/group/hooks/useCurrentGroup/useCurrentGroup';
// import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
// import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
// import { GROUP_RESOURCE_NAME } from '#lib-shared/group/resources/Group/Group.constants';

// export const FundingForm: LFCModel<FundingFormPropsModel> = ({ ...props }) => {
//   const { t } = useTranslation([FUNDING]);
//   const { create } = useFundingResource();
//   const { replace } = useRouter();
//   const currentGroup = useCurrentGroup();
//   return (
//     <StepForm
//       {...props}
//       initialValues={FUNDING_FORM_INITIAL_VALUES}
//       onSubmit={async (form) =>
//         currentGroup?._id &&
//         create({ form: { ...form, [GROUP_RESOURCE_NAME]: { _id: currentGroup?._id } } })
//       }
//       onSuccess={async () =>
//         replace({ pathname: `/${GROUP}/${currentGroup?._id}/${FUNDING}/${IN_PROGRESS}` })
//       }
//       steps={[
//         {
//           element: <FundingCurrencyForm />,
//           id: 'currency',
//           title: t('funding:currency'),
//         },
//         {
//           element: <FundingAmountForm />,
//           id: 'amount',
//           title: t('funding:amount'),
//         },
//         {
//           element: <FundingMaturityForm />,
//           id: 'maturity',
//           title: t('funding:maturity'),
//         },
//         {
//           element: <CreditRatingForm />,
//           id: 'CrditRating',
//           title: t('funding:creditRating'),
//         },
//       ]}
//     />
//   );
// };
