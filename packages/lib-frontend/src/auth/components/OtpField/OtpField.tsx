import range from 'lodash/range';
import { useState } from 'react';

import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { type OtpFieldPropsModel } from '#lib-frontend/auth/components/OtpField/OtpField.models';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { Tooltip } from '#lib-frontend/core/components/Tooltip/Tooltip';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type MeasureModel, type SFCModel } from '#lib-frontend/core/core.models';
import { TextField } from '#lib-frontend/form/components/TextField/TextField';
import { TEXT_FIELD_KEYBOARD } from '#lib-frontend/form/components/TextField/TextField.constants';
import { useControlledValue } from '#lib-frontend/form/hooks/useControlledValue/useControlledValue';
import { isTranslatableText } from '#lib-frontend/locale/utils/isTranslatableText/isTranslatableText';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR } from '#lib-frontend/style/style.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { OTP_LENGTH } from '#lib-shared/auth/resources/Otp/Otp.constants';
import { withId } from '#lib-shared/core/utils/withId/withId';

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
  const { valueControlled, valueControlledSet } = useControlledValue({
    defaultValue: '',
    onChange,
    value,
  });
  const [measure, measureSet] = useState<MeasureModel>();
  const [isFocused, isFocusedSet] = useState<boolean>(false);
  return (
    <Wrapper
      isCenter
      isFullWidth
      style={styles}
      testID={testID}>
      <Wrapper
        isRowAlign
        onMeasure={measureSet}
        position={SHAPE_POSITION.RELATIVE}>
        <Wrapper
          isAbsoluteFill
          opacity={0}
          zIndex={1}>
          <TextField
            defaultValue=""
            elementState={elementState}
            isAutoFocus={isAutoFocus}
            isNoClear
            keyboard={TEXT_FIELD_KEYBOARD.NUMBER}
            maxLength={OTP_LENGTH}
            onBlur={() => isFocusedSet(false)}
            onChange={valueControlledSet}
            onFocus={() => isFocusedSet(true)}
            value={valueControlled}
          />
        </Wrapper>

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
          isRowAlign
          left={measure?.width && measure.width + theme.shape.spacing.s}
          position={SHAPE_POSITION.ABSOLUTE}
          zIndex>
          {isTranslatableText(error) && <Tooltip color={THEME_COLOR.ERROR}>{error}</Tooltip>}

          {elementState !== ELEMENT_STATE.DISABLED && (
            <Appearable
              isActive={valueControlled.length > 0}
              isCenter>
              <Button
                icon="times"
                onPress={() => valueControlledSet('')}
              />
            </Appearable>
          )}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
