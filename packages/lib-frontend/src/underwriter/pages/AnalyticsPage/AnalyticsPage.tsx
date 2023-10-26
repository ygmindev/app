import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type AnalyticsPagePropsModel } from '#lib-frontend/underwriter/pages/AnalyticsPage/AnalyticsPage.models';

export const AnalyticsPage: LFCModel<AnalyticsPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      flex>
      <Text>AnalyticsPage</Text>
    </Wrapper>
  );
};
