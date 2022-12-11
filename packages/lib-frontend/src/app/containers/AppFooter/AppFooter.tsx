import type { AppFooterPropsModel } from '@lib/frontend/app/containers/AppFooter/AppFooter.models';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { dateTimeFormat } from '@lib/shared/formatting/utils/dateTimeFormat/dateTimeFormat';
import { DATE_TIME_FORMAT_TYPE } from '@lib/shared/formatting/utils/dateTimeFormat/dateTimeFormat.constants';

const APP_APP_NAME = getEnv('APP_APP_NAME');

export const AppFooter: SFCModel<AppFooterPropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const year = dateTimeFormat({ format: DATE_TIME_FORMAT_TYPE.YEAR });

  return (
    <Wrapper isRowAlign justify={FLEX_JUSTIFY.CENTER} p style={styles} testID={testID}>
      <Icon icon={ICON.copyright} />

      <Text>{`${year} ${APP_APP_NAME}`}</Text>
    </Wrapper>
  );
};
