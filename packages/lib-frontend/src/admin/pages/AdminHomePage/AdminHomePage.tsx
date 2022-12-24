import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { FCModel, PagePropsModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { Root } from '@lib/frontend/root/containers/Root/Root';
import { CORE } from '@lib/shared/core/core.constants';

export const AdminHomePage: FCModel<PagePropsModel> = ({ initialState, testID }) => {
  const { t } = useTranslation([CORE]);
  return (
    <Root initialState={initialState}>
      <Wrapper
        grow
        testID={testID}>
        <Text>{t('core:labels.submit')}</Text>
      </Wrapper>
    </Root>
  );
};
