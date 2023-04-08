import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { LineGroup } from '@lib/frontend/core/components/LineGroup/LineGroup';
import { LineItem } from '@lib/frontend/core/components/LineItem/LineItem';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { FORM } from '@lib/frontend/form/form.constants';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { FONT_TYPE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { PERSONAL_PAGE_FIELDS } from '@lib/frontend/user/pages/PersonalPage/PersonalPage.constants';
import type { PersonalPagePropsModel } from '@lib/frontend/user/pages/PersonalPage/PersonalPage.models';
import { PERSONAL } from '@lib/frontend/user/user.constants';
import map from 'lodash/map';

export const PersonalPage: SFCModel<PersonalPagePropsModel> = ({ testID, ...props }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const { push } = useRouter();
  const currentUser = useCurrentUser();
  return (
    <MainLayout
      isHorizontalCenter
      style={styles}
      testID={testID}>
      <LineGroup title={t('account:labels.personal')}>
        {currentUser &&
          map(PERSONAL_PAGE_FIELDS, ({ icon, id, label, value }) => (
            <LineItem
              key={id}
              onPress={() => push({ pathname: `${FORM}/${PERSONAL}/${id}` })}
              rightElement={(isActive) => (
                <Button
                  elementState={isActive ? ELEMENT_STATE.ACTIVE : undefined}
                  icon="chevronRight"
                  type={BUTTON_TYPE.TRANSPARENT}
                />
              )}>
              <Wrapper spacing={THEME_SIZE.SMALL}>
                <Wrapper isRowAlign>
                  {icon && <Icon icon={icon} />}

                  <TranslatableText type={FONT_TYPE.TITLE}>{label}</TranslatableText>
                </Wrapper>

                <Text
                  fontSize={THEME_SIZE_MORE.LARGE}
                  isEllipsis>
                  {value(currentUser)}
                </Text>
              </Wrapper>
            </LineItem>
          ))}
      </LineGroup>
    </MainLayout>
  );
};
