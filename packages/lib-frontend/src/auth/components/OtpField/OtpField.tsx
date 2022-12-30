import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import type { OtpFieldPropsModel } from '@lib/frontend/auth/components/OtpField/OtpField.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Tooltip } from '@lib/frontend/core/components/Tooltip/Tooltip';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { TextField } from '@lib/frontend/form/components/TextField/TextField';
import { useFieldValue } from '@lib/frontend/form/hooks/useField/useField';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { OTP_LENGTH } from '@lib/shared/auth/resources/Otp/Otp.constants';
import { withId } from '@lib/shared/core/decorators/withId/withId';
import { isString, range } from 'lodash';
import { useState } from 'react';

const OTP_FIELDS = withId(range(OTP_LENGTH));

export const OtpField: SFCModel<OtpFieldPropsModel> = ({
  error,
  isAutoFocus,
  isDisabled,
  onChange,
  testID,
  value,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const theme = useTheme();
  const { fieldValue, setFieldValue } = useFieldValue({ defaultValue: '', onChange, value });
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [width, setWidth] = useState<number>();
  return (
    <Wrapper
      isCenter
      isRowAlign
      onMeasure={({ width: _width }) => setWidth(_width)}
      style={styles}
      testID={testID}>
      <Wrapper
        isRowAlign
        position={SHAPE_POSITION.RELATIVE}>
        {OTP_FIELDS.map(({ id }, i) => (
          <TextField
            defaultValue=""
            error={error !== undefined}
            isActive={isFocused && i === Math.min(fieldValue.length, OTP_LENGTH - 1) && !isDisabled}
            isCenter
            isDisabled={isDisabled}
            isNoClear
            key={id}
            value={fieldValue[i] || ''}
            width={theme.shape.height.m}
          />
        ))}

        <Wrapper
          isAbsoluteFill
          opacity={0}
          zIndex={1}>
          <TextField
            defaultValue=""
            isAutoFocus={isAutoFocus}
            isDisabled={isDisabled}
            isNoClear
            maxLength={OTP_LENGTH}
            onBlur={() => setIsFocused(false)}
            onChange={setFieldValue}
            onFocus={() => setIsFocused(true)}
            value={fieldValue}
          />
        </Wrapper>

        {width && (
          <Wrapper
            isRowAlign
            left={width}
            position={SHAPE_POSITION.ABSOLUTE}>
            {error && isString(error) && <Tooltip color={THEME_COLOR.ERROR}>{error}</Tooltip>}

            {fieldValue && !isDisabled && (
              <Appearable
                isCenter
                isLazy={false}
                isVisible={fieldValue.length > 0}>
                <Button
                  icon="times"
                  onPress={() => setFieldValue('')}
                  type={BUTTON_TYPE.ICON}
                />
              </Appearable>
            )}
          </Wrapper>
        )}
      </Wrapper>
    </Wrapper>
  );
};
