import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import type { NotFoundPropsModel } from '@lib/frontend/route/containers/NotFound/NotFound.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { ROUTE } from '@lib/shared/route/route.constants';

export const NotFound: SFCModel<NotFoundPropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation([ROUTE]);
  return (
    <Wrapper grow isCenter style={styles} testID={testID}>
      <Text align="center" isTitle>
        {t('route:labels.notFound')}
      </Text>
    </Wrapper>
  );
};
