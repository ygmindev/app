import range from 'lodash/range';
import toNumber from 'lodash/toNumber';
import { useState } from 'react';

import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { type OtpFieldPropsModel } from '#lib-frontend/auth/components/OtpField/OtpField.models';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { Tooltip } from '#lib-frontend/core/components/Tooltip/Tooltip';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCModel, type MeasureModel } from '#lib-frontend/core/core.models';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import { TEXT_FIELD_KEYBOARD } from '#lib-frontend/data/components/TextField/TextField.constants';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { isTranslatableText } from '#lib-frontend/locale/utils/isTranslatableText/isTranslatableText';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_SIZE } from '#lib-frontend/style/style.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';
import { withId } from '#lib-shared/core/utils/withId/withId';

const otpLength = toNumber(process.env.SERVER_OTP_LENGTH);

const IDS = withId(range(otpLength));

export const OtpField: LFCModel<OtpFieldPropsModel> = ({
  elementState,
  error,
  isAutoFocus,
  onChange,
  onSubmit,
  value,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue: '',
    onChange,
    value,
  });
  const [measure, measureSet] = useState<MeasureModel>();
  const [isFocused, isFocusedSet] = useState<boolean>(false);
  return (
    <Wrapper
      {...wrapperProps}
      isCenter
      isFullWidth>
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
            maxLength={otpLength}
            onBlur={() => isFocusedSet(false)}
            onChange={(value) => {
              valueControlledSet(value);
              if (value?.length === otpLength) {
                void sleep().then(onSubmit);
              }
            }}
            onFocus={() => isFocusedSet(true)}
            size={THEME_SIZE.MEDIUM}
            value={valueControlled}
          />
        </Wrapper>

        {IDS.map(({ id }, i) => (
          <TextField
            elementState={
              isFocused &&
              i === Math.min((valueControlled ?? '').length, otpLength - 1) &&
              elementState !== ELEMENT_STATE.DISABLED
                ? ELEMENT_STATE.ACTIVE
                : elementState
            }
            error={error !== undefined}
            isCenter
            isNoClear
            key={id}
            size={THEME_SIZE.MEDIUM}
            value={(valueControlled && valueControlled[i]) ?? ''}
            width={theme.shape.size[THEME_SIZE.MEDIUM]}
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
              isActive={valueControlled ? valueControlled?.length > 0 : undefined}
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
