import { type LFCModel } from '#lib-frontend/core/core.models';
import { FundingForm } from '#lib-frontend/funding/containers/FundingForm/FundingForm';
import { type IssuerFundingFormPagePropsModel } from '#lib-frontend/issuer/pages/IssuerFundingFormPage/IssuerFundingFormPage.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const IssuerFundingFormPage: LFCModel<IssuerFundingFormPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return <FundingForm {...wrapperProps} />;
};
