import { type LFCModel } from '#lib-frontend/core/core.models';
import { FundingForm } from '#lib-frontend/funding/containers/FundingForm/FundingForm';
import { type FundingFormPagePropsModel } from '#lib-frontend/funding/pages/FundingFormPage/FundingFormPage.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const FundingFormPage: LFCModel<FundingFormPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return <FundingForm {...wrapperProps} />;
};
