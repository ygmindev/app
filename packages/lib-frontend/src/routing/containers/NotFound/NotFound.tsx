import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import type { NotFoundPropsModel } from '@lib/frontend/routing/containers/NotFound/NotFound.models';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { ROUTING } from '@lib/shared/routing/routing.constants';

export const NotFound: SFCModel<NotFoundPropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation([ROUTING]);
  return (
    <Wrapper
      grow
      isCenter
      style={styles}
      testID={testID}>
      <Text
        align="center"
        isTitle>
        {t('routing:labels.notFound')}
      </Text>
    </Wrapper>
  );
};
