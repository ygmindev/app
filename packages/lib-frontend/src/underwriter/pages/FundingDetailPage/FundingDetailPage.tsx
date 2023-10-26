import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type FundingDetailPagePropsModel } from '#lib-frontend/underwriter/pages/FundingDetailPage/FundingDetailPage.models';

export const FundingDetailPage: LFCModel<FundingDetailPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      flex>
      <Text>FundingDetailPage</Text>
    </Wrapper>
  );
};
