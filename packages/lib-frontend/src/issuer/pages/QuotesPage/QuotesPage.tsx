import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type QuotesPagePropsModel } from '#lib-frontend/issuer/pages/QuotesPage/QuotesPage.models';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const QuotesPage: SFCModel<QuotesPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      <Text>QuotesPage</Text>
    </Wrapper>
  );
};
