import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import {
  type OtpInputPropsModel,
  type OtpInputRefModel,
} from '@lib/frontend/auth/components/OtpInput/OtpInput.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { Tooltip } from '@lib/frontend/core/components/Tooltip/Tooltip';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type MeasureModel, type RLFCModel } from '@lib/frontend/core/core.models';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { TEXT_INPUT_KEYBOARD } from '@lib/frontend/data/components/TextInput/TextInput.constants';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { isTranslatableText } from '@lib/frontend/locale/utils/isTranslatableText/isTranslatableText';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { withId } from '@lib/shared/core/utils/withId/withId';
import range from 'lodash/range';
import toNumber from 'lodash/toNumber';
import { forwardRef, useState } from 'react';

const otpLength = toNumber(process.env.SERVER_APP_OTP_LENGTH);

const IDS = withId(range(otpLength));

export const OtpInput: RLFCModel<OtpInputRefModel, OtpInputPropsModel> = forwardRef(
  ({ elementState, error, onChange, onSubmit, value, ...props }, ref) => {
    const { wrapperProps } = useLayoutStyles({ props });
    const theme = useTheme();
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue: '',
      onChange,
      value,
    });
    const [measure, measureSet] = useState<MeasureModel>();
    const [isFocused, isFocusedSet] = useState<boolean>(false);
    const isDisabled =
      elementState === ELEMENT_STATE.DISABLED || elementState === ELEMENT_STATE.LOADING;

    return (
      <Wrapper
        {...wrapperProps}
        isCenter
        isFullWidth>
        <Wrapper
          isAlign
          isRow
          onMeasure={measureSet}
          position={SHAPE_POSITION.RELATIVE}>
          <Wrapper
            isAbsoluteFill
            opacity={0}
            zIndex={1}>
            <TextInput
              defaultValue=""
              elementState={elementState}
              isNoClear
              keyboard={TEXT_INPUT_KEYBOARD.NUMBER}
              maxLength={otpLength}
              onBlur={() => isFocusedSet(false)}
              onChange={(value) => {
                valueControlledSet(value);
                if (value?.length === otpLength) {
                  void sleep().then(onSubmit);
                }
              }}
              onFocus={() => isFocusedSet(true)}
              ref={ref}
              size={THEME_SIZE.MEDIUM}
              value={valueControlled}
            />
          </Wrapper>

          {IDS.map(({ id }, i) => (
            <TextInput
              elementState={
                !isDisabled &&
                isFocused &&
                i === Math.min((valueControlled ?? '').length, otpLength - 1)
                  ? ELEMENT_STATE.ACTIVE
                  : elementState
              }
              error={!!error}
              isCenter
              isNoClear
              key={id}
              size={THEME_SIZE.MEDIUM}
              value={(valueControlled && valueControlled[i]) ?? ''}
              width={theme.shape.size[THEME_SIZE.MEDIUM]}
            />
          ))}

          <Wrapper
            isAlign
            isRow
            left={(measure?.width ?? 0) + theme.shape.spacing[THEME_SIZE.SMALL]}
            position={SHAPE_POSITION.ABSOLUTE}
            zIndex>
            {isTranslatableText(error) && <Tooltip color={THEME_COLOR.ERROR}>{error}</Tooltip>}

            <Wrapper position={SHAPE_POSITION.RELATIVE}>
              <Appearable
                bottom={0}
                isActive={
                  elementState !== ELEMENT_STATE.LOADING && (valueControlled?.length ?? 0) > 0
                }
                isCenter
                left={0}
                position={SHAPE_POSITION.ABSOLUTE}
                top={0}>
                <Button
                  icon="times"
                  onPress={() => valueControlledSet('')}
                />
              </Appearable>

              <Appearable
                bottom={0}
                isActive={elementState === ELEMENT_STATE.LOADING}
                isCenter
                left={0}
                position={SHAPE_POSITION.ABSOLUTE}
                top={0}>
                <Loading size={THEME_SIZE.SMALL} />
              </Appearable>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    );
  },
);
