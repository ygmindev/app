import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { type SubmittableButtonsPropsModel } from '@lib/frontend/data/components/SubmittableButtons/SubmittableButtons.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { type ReactElement } from 'react';

export const SubmittableButtons = <TType,>({
  cancelLabel,
  elementState,
  onCancel,
  onSubmit,
  submitLabel,
  ...props
}: LFCPropsModel<SubmittableButtonsPropsModel<TType>>): ReactElement<
  LFCPropsModel<SubmittableButtonsPropsModel<TType>>
> => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const isDisabled =
    elementState == ELEMENT_STATE.LOADING || elementState == ELEMENT_STATE.DISABLED;
  return (
    <Wrapper
      {...wrapperProps}
      isAlign
      isDistribute
      isRow
      justify={FLEX_JUSTIFY.END}>
      {onCancel && (
        <Button
          elementState={isDisabled ? ELEMENT_STATE.DISABLED : undefined}
          icon="chevronLeft"
          onPress={onCancel}
          testID={props.testID ? `${props.testID}-cancel` : undefined}
          type={BUTTON_TYPE.TRANSPARENT}>
          {cancelLabel ?? t('core:cancel')}
        </Button>
      )}

      {onSubmit && (
        <Button
          elementState={elementState}
          icon="chevronRight"
          onPress={onSubmit}
          testID={props.testID ? `${props.testID}-submit` : undefined}>
          {submitLabel ?? t('core:continue')}
        </Button>
      )}
    </Wrapper>
  );
};
