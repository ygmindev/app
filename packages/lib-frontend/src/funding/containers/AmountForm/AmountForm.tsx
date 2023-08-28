import { Text } from '#lib-frontend/core/components/Text/Text';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { RangeField } from '#lib-frontend/data/components/RangeField/RangeField';
import { NUMBER_UNIT_AMOUNT } from '#lib-frontend/data/data.constants';
import { type AmountFormPropsModel } from '#lib-frontend/funding/containers/AmountForm/AmountForm.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import {
  FONT_ALIGN,
  FONT_TYPE,
} from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { DATA_TYPE_MORE } from '#lib-shared/data/data.constants';

export const AmountForm: SFCModel<AmountFormPropsModel> = ({ ...props }) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <MainLayout
      {...wrapperProps}
      isVerticalCenter
      s={THEME_SIZE.LARGE}>
      <Text
        align={FONT_ALIGN.CENTER}
        type={FONT_TYPE.HEADLINE}>
        {t('funding:amountFormMessage')}
      </Text>

      <RangeField
        defaultUnit={NUMBER_UNIT_AMOUNT.MILLION}
        type={DATA_TYPE_MORE.AMOUNT}
      />
    </MainLayout>
  );
};
