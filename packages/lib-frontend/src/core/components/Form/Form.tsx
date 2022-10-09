import { Button } from '@lib/frontend/core/components/Button/Button';
import { _Form } from '@lib/frontend/core/components/Form/_Form';
import type { FormPropsModel } from '@lib/frontend/core/components/Form/Form.models';
import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { FLEX_JUSTIFY } from '@lib/frontend/styling/utils/styler/flexStyler/flexStyler.constants';
import { THEME_SIZE } from '@lib/frontend/styling/utils/theme/theme.constants';

export const Form: SFCModel<FormPropsModel> = ({
  children,
  closeLabel,
  isDisabled,
  isFullWidth,
  isLoading,
  leftElement: left,
  onClose,
  onReset,
  onSubmit,
  submitLabel,
  testID,
  ...props
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const _isBlocked = isDisabled || isLoading;
  return (
    <Wrapper
      isFullWidth
      spacing
      style={styles}
      testID={testID}>
      <_Form onSubmit={_isBlocked ? undefined : onSubmit}>
        <Wrapper spacing>{children}</Wrapper>
      </_Form>
      <Wrapper
        isDistribute={isFullWidth}
        isRowAlign
        justify={isFullWidth ? undefined : FLEX_JUSTIFY.FLEX_END}
        spacing={THEME_SIZE.SMALL}>
        {left}
        {onClose && (
          <Button
            icon={ICON.chevronLeft}
            isDisabled={isLoading}
            isTransparent
            onPress={() => {
              onReset && onReset();
              onClose();
            }}>
            {closeLabel || t('core:labels.cancel')}
          </Button>
        )}
        <Button
          icon={ICON.chevronRight}
          isDisabled={isDisabled}
          isLoading={isLoading}
          onPress={async () => {
            onSubmit && (await onSubmit());
          }}
          testID="input">
          {submitLabel || t('core:labels.submit')}
        </Button>
      </Wrapper>
    </Wrapper>
  );
};
