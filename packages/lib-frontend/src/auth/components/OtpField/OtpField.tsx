import range from 'lodash/range';
import toNumber from 'lodash/toNumber';
import { useState } from 'react';

import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { type OtpFieldPropsModel } from '#lib-frontend/auth/components/OtpField/OtpField.models';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { Tooltip } from '#lib-frontend/core/components/Tooltip/Tooltip';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type MeasureModel, type SFCModel } from '#lib-frontend/core/core.models';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import { TEXT_FIELD_KEYBOARD } from '#lib-frontend/data/components/TextField/TextField.constants';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { isTranslatableText } from '#lib-frontend/locale/utils/isTranslatableText/isTranslatableText';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_SIZE } from '#lib-frontend/style/style.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { withId } from '#lib-shared/core/utils/withId/withId';

const IDS = withId(range(process.env.SERVER_OTP_LENGTH));

export const OtpField: SFCModel<OtpFieldPropsModel> = ({
  defaultValue,
  elementState,
  error,
  isAutoFocus,
  onChange,
  onSubmit,
  testID,
  value,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const theme = useTheme();
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
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
            maxLength={process.env.SERVER_OTP_LENGTH}
            onBlur={() => isFocusedSet(false)}
            onChange={(value) => {
              valueControlledSet(value);
              if (value?.length === toNumber(process.env.SERVER_OTP_LENGTH)) {
                onSubmit && onSubmit();
              }
            }}
            onFocus={() => isFocusedSet(true)}
            value={valueControlled}
          />
        </Wrapper>

        {IDS.map(({ _id }, i) => (
          <TextField
            elementState={
              isFocused &&
              valueControlled &&
              i === Math.min(valueControlled.length, process.env.SERVER_OTP_LENGTH - 1) &&
              elementState !== ELEMENT_STATE.DISABLED
                ? ELEMENT_STATE.ACTIVE
                : elementState
            }
            error={error !== undefined}
            isCenter
            isNoClear
            key={_id}
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
