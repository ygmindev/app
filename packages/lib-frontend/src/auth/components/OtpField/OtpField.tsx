import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import type { OtpFieldPropsModel } from '@lib/frontend/auth/components/OtpField/OtpField.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Tooltip } from '@lib/frontend/core/components/Tooltip/Tooltip';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { TextField } from '@lib/frontend/form/components/TextField/TextField';
import { useControlledValue } from '@lib/frontend/form/hooks/useControlledValue/useControlledValue';
import { isTranslatableText } from '@lib/frontend/locale/utils/isTranslatableText/isTranslatableText';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { OTP_LENGTH } from '@lib/shared/auth/resources/Otp/Otp.constants';
import { withId } from '@lib/shared/core/decorators/withId/withId';
import range from 'lodash/range';
import { useState } from 'react';

const IDS = withId(range(OTP_LENGTH));

export const OtpField: SFCModel<OtpFieldPropsModel> = ({
  elementState,
  error,
  isAutoFocus,
  onChange,
  testID,
  value,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const theme = useTheme();
  const { setValueControlled, valueControlled } = useControlledValue({
    defaultValue: '',
    onChange,
    value,
  });
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <Wrapper
      isCenter
      style={styles}
      testID={testID}>
      <Wrapper
        isRowAlign
        position={SHAPE_POSITION.RELATIVE}>
        {IDS.map(({ id }, i) => (
          <TextField
            defaultValue=""
            elementState={
              isFocused &&
              i === Math.min(valueControlled.length, OTP_LENGTH - 1) &&
              elementState !== ELEMENT_STATE.DISABLED
                ? ELEMENT_STATE.ACTIVE
                : elementState
            }
            error={error !== undefined}
            isCenter
            isNoClear
            key={id}
            value={valueControlled[i] || ''}
            width={theme.shape.height.m}
          />
        ))}

        <Wrapper
          isAbsoluteFill
          opacity={0}
          zIndex={1}>
          <TextField
            defaultValue=""
            elementState={elementState}
            isAutoFocus={isAutoFocus}
            isNoClear
            maxLength={OTP_LENGTH}
            onBlur={() => setIsFocused(false)}
            onChange={setValueControlled}
            onFocus={() => setIsFocused(true)}
            value={valueControlled}
          />
        </Wrapper>

        <Wrapper
          isRowAlign
          position={SHAPE_POSITION.ABSOLUTE}
          right={-(theme.shape.height.m + theme.shape.spacing.s)}>
          {isTranslatableText(error) && <Tooltip color={THEME_COLOR.ERROR}>{error}</Tooltip>}

          {elementState !== ELEMENT_STATE.DISABLED && (
            <Appearable
              isCenter
              isVisible={valueControlled.length > 0}>
              <Button
                icon="times"
                onPress={() => setValueControlled('')}
              />
            </Appearable>
          )}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
