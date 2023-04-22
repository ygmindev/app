import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { LineGroup } from '@lib/frontend/core/components/LineGroup/LineGroup';
import { LineItem } from '@lib/frontend/core/components/LineItem/LineItem';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { ACCOUNT_OPTIONS } from '@lib/frontend/user/pages/AccountPage/AccountPage.constants';
import type { AccountPagePropsModel } from '@lib/frontend/user/pages/AccountPage/AccountPage.models';
import { ACCOUNT } from '@lib/shared/user/user.constants';

export const AccountPage: SFCModel<AccountPagePropsModel> = ({ testID, ...props }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const { push } = useRouter();
  return (
    <MainLayout
      isHorizontalCenter
      style={styles}
      testID={testID}>
      <LineGroup
        style={styles}
        testID={testID}
        title={t('account:labels.account')}>
        {ACCOUNT_OPTIONS.map(({ icon, id, label }) => (
          <LineItem
            icon={icon}
            key={id}
            onPress={() => push({ pathname: `${ACCOUNT}/${id}` })}
            rightElement={(isActive) => (
              <Button
                elementState={isActive ? ELEMENT_STATE.ACTIVE : undefined}
                icon="chevronRight"
                type={BUTTON_TYPE.TRANSPARENT}
              />
            )}>
            {label && <TranslatableText>{label}</TranslatableText>}
          </LineItem>
        ))}
      </LineGroup>
    </MainLayout>
  );
};
