import { Skeleton } from '@lib/frontend/animation/components/Skeleton/Skeleton';
import { PAYMENT_METHOD } from '@lib/frontend/billing/billing.constants';
import type { PaymentMethodItemPropsModel } from '@lib/frontend/billing/components/PaymentMethodItem/PaymentMethodItem.models';
import { useBankResource } from '@lib/frontend/billing/hooks/useBankResource/useBankResource';
import { useCardResource } from '@lib/frontend/billing/hooks/useCardResource/useCardResource';
import type { PaymentMethodFormPageParamsModel } from '@lib/frontend/billing/pages/PaymentMethodFormPage/PaymentMethodFormPage.models';
import { getPaymentMethodTitle } from '@lib/frontend/billing/utils/getPaymentMethodTitle/getPaymentMethodTitle';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import type { MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { FORM } from '@lib/frontend/form/form.constants';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_BASIC_SIZE, THEME_COLOR } from '@lib/frontend/style/style.constants';
import { BORDER_DIRECTION } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { FONT_TYPE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { useUserResource } from '@lib/frontend/user/hooks/useUserResource/useUserResource';
import { PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';

export const PaymentMethodItem: SFCModel<PaymentMethodItemPropsModel> = ({
  elementState,
  testID,
  value,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation();
  const { push } = useRouter();

  const currentUser = useCurrentUser();
  const { update } = useUserResource();
  const { remove: bankRemove } = useBankResource({ root: { _id: currentUser?._id } });
  const { remove: cardRemove } = useCardResource({ root: { _id: currentUser?._id } });

  const _handleRemove = async (): Promise<void> => {
    switch (value?.type) {
      case PAYMENT_METHOD_TYPE.BANK: {
        await bankRemove({ filter: { _id: value._id } });
        break;
      }
      case PAYMENT_METHOD_TYPE.CARD: {
        await cardRemove({ filter: { _id: value._id } });
        break;
      }
    }
  };

  const _title = getPaymentMethodTitle(value);
  const _isPrimary = currentUser?.paymentMethodPrimary === value?._id;

  return (
    <Wrapper
      border={BORDER_DIRECTION.BOTTOM}
      p={THEME_BASIC_SIZE.SMALL}
      style={styles}
      testID={testID}>
      <Wrapper
        isRowAlign
        justify={FLEX_JUSTIFY.SPACE_BETWEEN}>
        <Skeleton>
          <Wrapper isRowAlign>
            <Text type={FONT_TYPE.SUBTITLE}>{`•••• ${value?.last4}`}</Text>

            {_isPrimary && (
              <Icon
                icon="checkCircle"
                type={FONT_TYPE.SUBTITLE}
              />
            )}
          </Wrapper>
        </Skeleton>

        <Skeleton>
          <Menu
            anchor={(isOpen) => (
              <Button
                elementState={isOpen ? ELEMENT_STATE.ACTIVE : elementState}
                icon="ellipsis"
              />
            )}
            options={
              [
                {
                  icon: 'edit',
                  id: 'edit',
                  label: t('core:labels.edit'),
                  onPress: () =>
                    push<PaymentMethodFormPageParamsModel>({
                      params: value,
                      pathname: `/${FORM}/${PAYMENT_METHOD}`,
                    }),
                },
                {
                  color: THEME_COLOR.ERROR,
                  confirmMessage: t('core:messages.confirmRemove', { value: _title }),
                  icon: 'trash',
                  id: 'delete',
                  label: t('core:labels.remove'),
                  onPress: _handleRemove,
                },
                !_isPrimary && {
                  icon: 'checkCircle',
                  id: 'setAsPrimary',
                  label: t('core:labels.setAsPrimary'),
                  onPress: async () =>
                    update({
                      filter: { _id: currentUser?._id },
                      update: { paymentMethodPrimary: value?._id },
                    }),
                },
              ].filter(Boolean) as Array<MenuOptionModel>
            }
          />
        </Skeleton>
      </Wrapper>
    </Wrapper>
  );
};
