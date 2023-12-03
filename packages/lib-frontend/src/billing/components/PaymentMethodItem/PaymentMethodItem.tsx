import { type ReactElement } from 'react';
import { useCallback, useRef } from 'react';

import { Skeleton } from '#lib-frontend/animation/components/Skeleton/Skeleton';
import { BILLING, PAYMENT, PAYMENT_METHOD } from '#lib-frontend/billing/billing.constants';
import { PAYMENT_METHOD_ITEM_ICON_WIDTH } from '#lib-frontend/billing/components/PaymentMethodItem/PaymentMethodItem.constants';
import { type PaymentMethodItemPropsModel } from '#lib-frontend/billing/components/PaymentMethodItem/PaymentMethodItem.models';
import { useBankResource } from '#lib-frontend/billing/hooks/useBankResource/useBankResource';
import { useCardResource } from '#lib-frontend/billing/hooks/useCardResource/useCardResource';
import { type PaymentMethodFormPageParamsModel } from '#lib-frontend/billing/pages/PaymentMethodFormPage/PaymentMethodFormPage.models';
import { getPaymentMethodTitle } from '#lib-frontend/billing/utils/getPaymentMethodTitle/getPaymentMethodTitle';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { Image } from '#lib-frontend/core/components/Image/Image';
import { Menu } from '#lib-frontend/core/components/Menu/Menu';
import { type MenuRefModel } from '#lib-frontend/core/components/Menu/Menu.models';
import { PressableItem } from '#lib-frontend/core/components/PressableItem/PressableItem';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR } from '#lib-frontend/style/style.constants';
import { useCurrentUser } from '#lib-frontend/user/hooks/useCurrentUser/useCurrentUser';
import { useUserResource } from '#lib-frontend/user/hooks/useUserResource/useUserResource';
import { CARD_BRAND } from '#lib-shared/billing/resources/Card/Card.constants';
import { type CardModel } from '#lib-shared/billing/resources/Card/Card.models';
import { PAYMENT_METHOD_TYPE } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { ACCOUNT } from '#lib-shared/user/user.constants';

export const PaymentMethodItem: SFCModel<PaymentMethodItemPropsModel> = ({
  elementState,
  value,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation();
  const { push } = useRouter();
  const ref = useRef<MenuRefModel>(null);

  const currentUser = useCurrentUser();
  const { update } = useUserResource();
  const { remove: bankRemove } = useBankResource({ root: currentUser?._id });
  const { remove: cardRemove } = useCardResource({ root: currentUser?._id });

  const handleRemove = async (): Promise<void> => {
    switch (value?.type) {
      case PAYMENT_METHOD_TYPE.BANK: {
        await bankRemove({ filter: [{ field: 'id', value: value._id }] });
        break;
      }
      case PAYMENT_METHOD_TYPE.CARD: {
        await cardRemove({ filter: [{ field: 'id', value: value._id }] });
        break;
      }
    }
  };

  const title = t(getPaymentMethodTitle(value));
  const isPrimary = currentUser?.paymentMethodPrimary === value?.id;

  const getIcon = useCallback((): ReactElement | null => {
    switch (value?.type) {
      case PAYMENT_METHOD_TYPE.BANK:
        return <Icon icon="bank" />;
      case PAYMENT_METHOD_TYPE.CARD: {
        const brand = (value as CardModel)?.brand;
        switch (brand) {
          case CARD_BRAND.AMEX:
          case CARD_BRAND.DINERS:
          case CARD_BRAND.DISCOVER:
          case CARD_BRAND.JCB:
          case CARD_BRAND.MASTERCARD:
          case CARD_BRAND.VISA:
            return (
              <Image
                isAutoSize
                src={`/images/brands/${brand}.png`}
                width={PAYMENT_METHOD_ITEM_ICON_WIDTH}
              />
            );
          default:
            return (
              <Icon
                color={THEME_COLOR.PRIMARY}
                icon="card"
              />
            );
        }
      }
      default:
        return null;
    }
  }, [value?.type, (value as CardModel)?.brand]);

  return (
    <PressableItem
      {...wrapperProps}
      onPress={() => ref.current?.toggle()}
      rightElement={(isActive) => (
        <Skeleton>
          <Menu
            anchor={(isOpen) => (
              <Button
                elementState={isActive || isOpen ? ELEMENT_STATE.ACTIVE : elementState}
                icon="dots"
              />
            )}
            options={filterNil([
              {
                icon: 'edit',
                id: 'edit',
                label: t('core:edit'),
                onPress: value
                  ? () =>
                      push<PaymentMethodFormPageParamsModel>({
                        params: { value },
                        pathname: `/${ACCOUNT}/${BILLING}/${PAYMENT}/${PAYMENT_METHOD}`,
                      })
                  : undefined,
              },
              !isPrimary && {
                icon: 'checkCircle',
                id: 'setAsPrimary',
                label: t('core:setAsPrimary'),
                onPress: async () =>
                  currentUser &&
                  update({
                    filter: [{ field: '_id', value: currentUser._id }],
                    update: { paymentMethodPrimary: value?.id },
                  }),
              },
              { id: 'div', isDivider: true },
              {
                color: THEME_COLOR.ERROR,
                confirmMessage: t('core:confirmRemove', { value: title }),
                icon: 'trash',
                id: 'delete',
                label: t('core:remove'),
                onPress: handleRemove,
              },
            ])}
            ref={ref}
          />
        </Skeleton>
      )}>
      {/* <Skeleton>
        <Wrapper isRowAlign>
          <Wrapper
            isCenter
            width={PAYMENT_METHOD_ITEM_ICON_WIDTH}>
            {getIcon()}
          </Wrapper>

          <Text type={FONT_TYPE.SUBTITLE}>{value?.last4 && `•••• ${value.last4}`}</Text>

          {isPrimary && (
            <Icon
              icon="checkCircle"
              type={FONT_TYPE.SUBTITLE}
            />
          )}
        </Wrapper>
      </Skeleton> */}
    </PressableItem>
  );
};
