import type { AppFooterPropsModel } from '@lib/frontend/app/containers/AppFooter/AppFooter.models';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { FLEX_JUSTIFY } from '@lib/frontend/styling/utils/styler/flexStyler/flexStyler.constants';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { dateTimeFormat } from '@lib/shared/formatting/utils/dateTimeFormat/dateTimeFormat';
import { DATE_TIME_FORMAT_TYPE } from '@lib/shared/formatting/utils/dateTimeFormat/dateTimeFormat.constants';

const REACT_APP_APP_NAME = getEnv('REACT_APP_APP_NAME');

export const AppFooter: SFCModel<AppFooterPropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const year = dateTimeFormat({ format: DATE_TIME_FORMAT_TYPE.YEAR });

  return (
    <Wrapper
      isRowAlign
      justify={FLEX_JUSTIFY.CENTER}
      p
      style={styles}
      testID={testID}>
      <Icon icon={ICON.copyright} />
      <Text>{`${year} ${REACT_APP_APP_NAME}`}</Text>
    </Wrapper>
  );
};
