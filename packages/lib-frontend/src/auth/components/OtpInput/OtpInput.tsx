import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import {
  type OtpInputPropsModel,
  type OtpInputRefModel,
} from '@lib/frontend/auth/components/OtpInput/OtpInput.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Link } from '@lib/frontend/core/components/Link/Link';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { Tooltip } from '@lib/frontend/core/components/Tooltip/Tooltip';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type MeasureModel, type RLFCModel } from '@lib/frontend/core/core.models';
import { useElementStateControlled } from '@lib/frontend/core/hooks/useElementStateControlled/useElementStateControlled';
import { isAsyncText } from '@lib/frontend/core/utils/isAsyncText/isAsyncText';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { TEXT_INPUT_KEYBOARD } from '@lib/frontend/data/components/TextInput/TextInput.constants';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { AUTH } from '@lib/shared/auth/auth.constants';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { withId } from '@lib/shared/core/utils/withId/withId';
import range from 'lodash/range';
import toNumber from 'lodash/toNumber';
import { forwardRef, useState } from 'react';

const otpLength = toNumber(process.env.SERVER_APP_OTP_LENGTH);

const IDS = withId(range(otpLength));

export const OtpInput: RLFCModel<OtpInputRefModel, OtpInputPropsModel> = forwardRef(
  (
    {
      elementState,
      error,
      onBack,
      onChange,
      onElementStateChange,
      onSubmit,
      testID,
      value,
      ...props
    },
    ref,
  ) => {
    const { t } = useTranslation([AUTH]);
    const { wrapperProps } = useLayoutStyles({ props });
    const theme = useTheme();
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue: '',
      onChange,
      value,
    });
    const { elementStateControlledSet, isActive, isBlocked, isLoading } = useElementStateControlled(
      { elementState, onElementStateChange },
    );
    const [measure, measureSet] = useState<MeasureModel>();

    return (
      <Wrapper
        {...wrapperProps}
        isCenter
        isFullWidth
        s>
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
              isNoClear
              keyboard={TEXT_INPUT_KEYBOARD.NUMBER}
              maxLength={otpLength}
              onChange={(value) => {
                valueControlledSet(value);
                if (value?.length === otpLength) {
                  void sleep().then(onSubmit);
                }
              }}
              onElementStateChange={elementStateControlledSet}
              ref={ref}
              size={THEME_SIZE.MEDIUM}
              testID={testID}
              value={valueControlled}
            />
          </Wrapper>

          {IDS.map(({ id }, i) => (
            <TextInput
              elementState={
                isActive && i === Math.min((valueControlled ?? '').length, otpLength - 1)
                  ? ELEMENT_STATE.ACTIVE
                  : undefined
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
            {isAsyncText(error) && <Tooltip color={THEME_COLOR.ERROR}>{error}</Tooltip>}

            <Wrapper position={SHAPE_POSITION.RELATIVE}>
              <Appearable
                bottom={0}
                isActive={!isBlocked && (valueControlled?.length ?? 0) > 0}
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
                isActive={isLoading}
                isCenter
                left={0}
                position={SHAPE_POSITION.ABSOLUTE}
                top={0}>
                <Loading size={THEME_SIZE.SMALL} />
              </Appearable>
            </Wrapper>
          </Wrapper>
        </Wrapper>

        <Link
          align={FONT_ALIGN.CENTER}
          onPress={onBack}>
          {t('auth:otpDidntGet')}
        </Link>
      </Wrapper>
    );
  },
);
