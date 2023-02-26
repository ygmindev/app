import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { NavigationLayout } from '@lib/frontend/core/layouts/NavigationLayout/NavigationLayout';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { FONT_TYPE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { ACCOUNT_NAVBAR_OPTIONS } from '@lib/frontend/user/pages/AccountPage/AccountPage.constants';
import type { AccountPagePropsModel } from '@lib/frontend/user/pages/AccountPage/AccountPage.models';
import { ACCOUNT } from '@lib/shared/user/user.constants';
import { useEffect, useMemo } from 'react';

export const AccountPage: SFCModel<AccountPagePropsModel> = ({ children, testID, ...props }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const { isActive, push, replace } = useRouter();

  const _value = useMemo(
    () => ACCOUNT_NAVBAR_OPTIONS.find(({ id }) => isActive({ pathname: `/${ACCOUNT}/${id}` })),
    [isActive],
  );
  useEffect(() => {
    !_value && replace({ pathname: `${ACCOUNT}/${ACCOUNT_NAVBAR_OPTIONS[0].id}` });
  }, [_value]);

  return (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      <NavigationLayout
        barElement={<Text type={FONT_TYPE.HEADLINE}>{t('account:labels.account')}</Text>}
        onChange={(value) => push({ pathname: `/${ACCOUNT}/${value}` })}
        options={ACCOUNT_NAVBAR_OPTIONS}
        value={_value?.id}>
        <Wrapper
          grow
          spacing>
          {children}
        </Wrapper>
      </NavigationLayout>
    </Wrapper>
  );
};
