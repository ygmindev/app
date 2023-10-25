import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type UnderwriterAnalyticsPagePropsModel } from '#lib-frontend/underwriter/pages/UnderwriterAnalyticsPage/UnderwriterAnalyticsPage.models';

export const UnderwriterAnalyticsPage: LFCModel<UnderwriterAnalyticsPagePropsModel> = ({
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      flex>
      <Text>UnderwriterAnalyticsPage</Text>
    </Wrapper>
  );
};
