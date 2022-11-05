import { Appear } from '@lib/frontend/animation/components/Appear/Appear';
import {
  OTP_FIELD_MAIN_TEST_ID,
  OTP_FIELD_WIDTH,
} from '@lib/frontend/auth/components/OtpField/OtpField.constants';
import type { OtpFieldPropsModel } from '@lib/frontend/auth/components/OtpField/OtpField.models';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { ErrorTooltip } from '@lib/frontend/form/components/ErrorTooltip/ErrorTooltip';
import { TextField } from '@lib/frontend/form/components/TextField/TextField';
import { useField } from '@lib/frontend/form/hooks/useField/useField';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { FONT_ALIGN } from '@lib/frontend/styling/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.constants';
import { OTP_LENGTH } from '@lib/shared/auth/resources/Otp/Otp.constants';
import { withId } from '@lib/shared/core/decorators/withId/withId';
import { isFunction, isString, range } from 'lodash';
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
  const { fieldValue, setFieldValue } = useField({ defaultValue: '', onChange, value });
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
            align={FONT_ALIGN.CENTER}
            defaultValue=""
            error={error !== undefined}
            isActive={isFocused && i === Math.min(fieldValue.length, OTP_LENGTH - 1) && !isDisabled}
            isDisabled={isDisabled}
            isNoClear
            key={id}
            value={fieldValue[i] || ''}
            width={OTP_FIELD_WIDTH}
          />
        ))}

        <Wrapper
          isAbsoluteFill
          opacity={0}
          testID={OTP_FIELD_MAIN_TEST_ID}
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
            {(isFunction(error) || isString(error)) && <ErrorTooltip error={error} />}

            <Appear isVisible={fieldValue.length > 0}>
              <Icon
                icon={ICON.times}
                isDisabled={isDisabled}
                onPress={() => setFieldValue('')}
              />
            </Appear>
          </Wrapper>
        )}
      </Wrapper>
    </Wrapper>
  );
};
