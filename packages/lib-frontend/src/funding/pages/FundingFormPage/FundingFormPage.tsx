import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { type FundingFormPagePropsModel } from '#lib-frontend/funding/pages/FundingFormPage/FundingFormPage.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const FundingFormPage: SFCModel<FundingFormPagePropsModel> = ({ testID, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      grow
      testID={testID}>
      <Text>FundingFormPage</Text>
    </Wrapper>
  );
};
