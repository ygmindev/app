import { Skeleton } from '@lib/frontend/animation/components/Skeleton/Skeleton';
import { SkeletonGroup } from '@lib/frontend/animation/components/SkeletonGroup/SkeletonGroup';
import type { PaymentMethodPropsModel } from '@lib/frontend/billing/components/PaymentMethod/PaymentMethod.models';
import { useBankResource } from '@lib/frontend/billing/hooks/useBankResource/useBankResource';
import { useCardResource } from '@lib/frontend/billing/hooks/useCardResource/useCardResource';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { BORDER_DIRECTION } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { FONT_TYPE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { useUserResource } from '@lib/frontend/user/hooks/useUserResource/useUserResource';
import { PAYMENT_METHOD_TYPE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';

export const PaymentMethod: SFCModel<PaymentMethodPropsModel> = ({
  elementState,
  testID,
  value,
  ...props
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const currentUser = useCurrentUser();
  const { update } = useUserResource();

  const { remove: bankRemove } = useBankResource({ root: { _id: currentUser?._id } });
  const { remove: cardRemove } = useCardResource({ root: { _id: currentUser?._id } });

  const _type = (() => {
    switch (value?.type) {
      case PAYMENT_METHOD_TYPE.BANK:
        return t('billing:labels.bank');
      case PAYMENT_METHOD_TYPE.CARD:
        return t('billing:labels.card');
      default:
        return '';
    }
  })();

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

  const _tName = t('billing:labels.endingIn', { type: _type, value: value?.last4 });

  return (
    <SkeletonGroup
      isVisible={elementState === ELEMENT_STATE.LOADING}
      style={styles}>
      <Wrapper
        border={BORDER_DIRECTION.BOTTOM}
        isRowAlign
        justify={FLEX_JUSTIFY.SPACE_BETWEEN}
        p
        testID={testID}>
        <Skeleton>
          <Text type={FONT_TYPE.SUBTITLE}>{_tName}</Text>
        </Skeleton>

        <Wrapper isRowAlign>
          <Skeleton>
            {currentUser?.paymentMethodDefault === value?._id ? (
              <Text>{t('core:labels.default')}</Text>
            ) : (
              <Button
                elementState={elementState}
                onPress={async () =>
                  update({
                    filter: { _id: currentUser?._id },
                    update: { paymentMethodDefault: value?._id },
                  })
                }
                type={BUTTON_TYPE.TRANSPARENT}>
                {t('core:labels.setAsDefault')}
              </Button>
            )}
          </Skeleton>

          <Skeleton>
            <Button
              elementState={elementState}
              icon="edit">
              {t('core:labels.edit')}
            </Button>
          </Skeleton>

          <Skeleton>
            <Button
              color={THEME_COLOR.ERROR}
              confirmMessage={t('core:messages.confirmRemove')}
              elementState={elementState}
              icon="trash"
              onPress={_handleRemove}>
              {t('core:labels.remove', { value: _tName })}
            </Button>
          </Skeleton>
        </Wrapper>
      </Wrapper>
    </SkeletonGroup>
  );
};
