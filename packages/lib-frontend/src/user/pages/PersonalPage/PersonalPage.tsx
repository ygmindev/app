import { Button } from '@lib/frontend/core/components/Button/Button';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { FORM } from '@lib/frontend/form/form.constants';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_BASIC_SIZE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
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
      style={styles}
      testID={testID}>
      <Text type={FONT_TYPE.HEADLINE}>{t('account:labels.personal')}</Text>

      {currentUser &&
        map(PERSONAL_PAGE_FIELDS, ({ icon, id, label, value }) => (
          <Wrapper
            key={id}
            spacing={THEME_BASIC_SIZE.SMALL}>
            <Wrapper isRowAlign>
              {icon && <Icon icon={icon} />}

              <TranslatableText type={FONT_TYPE.TITLE}>{label}</TranslatableText>
            </Wrapper>

            <Wrapper
              isRowAlign
              justify={FLEX_JUSTIFY.SPACE_BETWEEN}>
              <Text
                fontSize={THEME_SIZE.LARGE}
                isEllipsis>
                {value(currentUser)}
              </Text>

              <Button
                icon="edit"
                onPress={() => push({ pathname: `${FORM}/${PERSONAL}/${id}` })}>
                {t('core:labels.change')}
              </Button>
            </Wrapper>
          </Wrapper>
        ))}
    </MainLayout>
  );
};
